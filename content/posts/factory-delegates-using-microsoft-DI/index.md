---
title: Simplified DI with Funcs
date: 2023-04-17T00:00:00.000Z
tags: [C#, DI]
featuredImage:
  src: factory-delegates.jpg
  description: A factory
---

## Injecting a factory

When working with a DI container you sometimes want to inject a factory to resolve a type. This might for instance be because you need more control over the lifetime of that object so you want to create and dispose it yourself. There are several ways to do this with Microsoft DI such as injecting a factory instance class but one method I like is simply injecting a `Func<T>`. This is because it requires very little code and is also easier to mock in tests compared to a factory instance class.

The factory will simply be a static class with 1 method placed in the composition root:

```cs
public static class Factory
{
    public static IService1 Create(IService2 service2) => new Service1(service2); // Real life implementations will be a bit more complex.
}
```

Since we are going to resolve this as a `Func<IService1>` there's no need for a extra interface or even a instance. In order to register this with microsoft DI we have to do the following:

```cs
services.AddSingleton<Func<IService1>>(s => () => Factory.Create(s.GetRequiredService<IService2>()));
```

Hmm that looks more complicated than expected. Not only do we have to specify the generic parameters but we have to also actually write the code to call the Create static method. This means whenever we change the Create method we have to update this registration to make it compile. From a maintenance point of view that is not so good. Fortunately as you will see soon we can easily generalize this registration.

## The easy way

We can make it much easier for ourselves if we create a extension method that can generate the delegate we want. Unfortunately C#'s type inference is not powerful enough to do this on its own without reflection but by using reflection to call a generic method this is still quite easy to implement:

```cs
public static class ServiceCollectionExtensions
{
    public static void AddFactory(this IServiceCollection services, Delegate factory)
    {
        var returnType = factory.Method.ReturnType;
        var parameters = factory.Method.GetParameters().Select(x => x.ParameterType).ToArray();
        var addFactoryGenericParametersLength = parameters.Length + 1;
        var openGenericMethod = typeof(ServiceCollectionExtensions)
            .GetMethods(BindingFlags.Static | BindingFlags.NonPublic)
            .Where(x => x.Name == nameof(AddFactoryInternal))
            .SingleOrDefault(x => x.GetGenericArguments().Length == addFactoryGenericParametersLength);

        var closedGenericMethod = openGenericMethod.MakeGenericMethod(parameters.Concat(new[] { returnType }).ToArray());

        closedGenericMethod.Invoke(null, new object[] { services, factory });
    }


    private static void AddFactoryInternal<T1, TResult>(this IServiceCollection services, Func<T1, TResult> factory) =>
        services.AddSingleton<Func<TResult>>(c => () => factory(c.GetRequiredService<T1>()));

    private static void AddFactoryInternal<T1, T2, TResult>(this IServiceCollection services, Func<T1, T2, TResult> factory) =>
        services.AddSingleton<Func<TResult>>(c => () => factory(c.GetRequiredService<T1>(), c.GetRequiredService<T2>()));

    //Add more AddFactoryInternal's for delegates with more parameters...
}
```

With this extension method we can change our previous registration to this:

```cs
services.AddFactory(Factory.Create); // Note: needs C# 10 or later.
```

Which is much shorter and also we never have to change this if we change the parameters of the Create method!

Alternatively if all you need to do is pass in the static methods parameters to the constructor then you don't really need the static method. This simple extension method will allow you to register your service and resolve it as `Func<IService1>`:

```cs
public static void AddFactory<TService, TImplementation>(this IServiceCollection services)
    where TImplementation : class, TService
    where TService : class
{
    services.AddTransient<TService, TImplementation>();
    services.AddSingleton<Func<TService>>(s => s.GetRequiredService<TService>);
}

services.AddFactory<IService1, Service1>();
```

## Service locator anti pattern?

Some of you might argue this looks suspiciously like a service locator anti pattern. I can tell you its not:

- The implementation of the factory is placed inside of the composition root.
- You don't need any extra references, though you might argue we have a dependency on `Func<T>` now I think thats totally fine as thats not a volatile dependency.
- Any services that require a `Func<IService1>` will have to do so through their constructor parameters, dependencies are thus not hidden from consumers.
- Theres no way to resolve a unbounded set of dependencies, invoking `Func<IService1>` will always and only return `IService1` instances.

As you can see this is quite a bit different from the typical service locator anti pattern examples you might have come across.

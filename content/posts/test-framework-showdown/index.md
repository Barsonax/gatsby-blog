---
title: "Test Framework Showdown: Why NUnit (and maybe TUnit) Might Be Your Best Choice"
date: 2024-12-07T15:17:00.000Z
tags: [C#, Tests, NUnit, xUnit, TUnit]
---

## Why I prefer NUnit over xUnit
Over the years I used both [NUnit](https://nunit.org/) and [xUnit](https://xunit.net/). Both are good test frameworks to use for your tests and over the years many shortcomings in these libraries where fixed or improved, thus the differences are quite small. There are still some differences and limitations however that especially when you are doing integration/e2e tests are important to be aware of.

`xUnit` arguably has the best defaults as it runs tests classes in parallel and uses separate instances of the class for every test. It also reuses lots of C# concepts (constructors and dispose for test setup) instead of introducing new ones.

`NUnit` does not run tests in parallel by default and also uses a single instance of the class. This is easy to change however with some attributes. The parallelization can also go further than just on the class level, even individual test cases will be run in parallel:
```cs
[assembly: FixtureLifeCycle(LifeCycle.InstancePerTestCase)]
[assembly: Parallelizable(ParallelScope.Children)]
```
`NUnit` also has the concept of a `SetUpFixture` which allows you to run code before and after any tests are run:
```cs
[SetUpFixture]
internal sealed class GlobalSetup
{
    [OneTimeSetUp]
    public void RunBeforeAnyTests()
    {
        // Runs before any tests
    }

    [OneTimeTearDown]
    public async Task RunAfterAnyTests()
    {
        // Runs after any tests
    }
}
```

While something similar is also possible with xUnit `CollectionFixture` you will give up parallel execution as all tests in the same collection cannot be run in parallel. This might not matter for unit tests but for integration tests it does because often you want to do some setup before any tests are run such as spinning up [test containers](https://dotnet.testcontainers.org/). `xUnit` v3 might add a better way to do setup before any tests are run this but its unclear when this will be released. In the past there was also no way to limit the amount of parallel tests running with xUnit which could be a problem for resource heavy tests such as e2e tests, this has recently been fixed in v2.8 though.

While most differences are not that big I do prefer NUnit because:
- Higher parallelism
- Able to do assembly level setup without downsides.

In short NUnit works well for any test you throw at while xUnit has some limitations for tests more complex than unit tests. For me this is an important thing to consider since I don't limit my test suites to just unit tests and if I am being honest neither should you as in 2024 its no longer that hard to write these kinds of tests with all the fancy tooling available such as test containers. I do like the fact xUnit reuses C# concepts when possible, but I don't feel like this weights enough to offset the limitations of `xUnit`.

## Assertions
You might have noticed I didn't say anything about assertions and you're right. I use the excellent [FluentAssertions](https://fluentassertions.com/) library which means regardless of test framework my assertions stay the same. I find this library does a better job for assertions than any test framework.

## The newcomer
The test framework library is changing and a few months ago [TUnit](https://thomhurst.github.io/TUnit/) came out. It uses a different modern approach to running your tests based on source generators. In theory this should make the execution of the tests very fast and compatible with AOT compilation.

I played around with it for a bit and it looks really promising. The library itself is well designed and even though its so young it already has lots of features. The execution speed of tests was clearly faster which translates into quicker iterations and thus higher productivity.

There are [lots of ways](https://thomhurst.github.io/TUnit/docs/tutorial-extras/event-subscribing) to hook into the lifecycle of tests for instance making it a good fit integration/e2e tests as well. For example this is how you can take control of creating your test class:
```cs
public class MyClassConstructor : IClassConstructor, ITestEndEventReceiver
{
    public T Create<[DynamicallyAccessedMembers(DynamicallyAccessedMemberTypes.PublicConstructors)] T>(ClassConstructorMetadata classConstructorMetadata)
        where T : class => // create the test class however you like
    public ValueTask OnTestEnd(TestContext testContext) => //gets called when the test is finished
}
```
You can then specify to use `MyClassConstructor` this way:
```cs
[ClassConstructor<MyClassConstructor>]
public class Tests
{
}
```
This opens up lots of ways to construct your test class such as using dependency injection:
```cs
public class DependencyInjectionClassConstructor : IClassConstructor, ITestEndEventReceiver
{
    private static readonly IServiceProvider ServiceProvider = CreateServiceProvider();

    private AsyncServiceScope _scope;

    public T Create<[DynamicallyAccessedMembers(DynamicallyAccessedMemberTypes.PublicConstructors)] T>(ClassConstructorMetadata classConstructorMetadata)
        where T : class
    {
        _scope = ServiceProvider.CreateAsyncScope();
        return ActivatorUtilities.GetServiceOrCreateInstance<T>(_scope.ServiceProvider);
    }

    public ValueTask OnTestEnd(TestContext testContext) => _scope.DisposeAsync();

    private static ServiceProvider CreateServiceProvider() => // Create service provider
}
```

While I was playing with it I haven't really found any clear downsides yet, it seems to do its job simply better than `NUnit` or `xUnit`. I am looking forward to how this library further develops itself, who knows maybe this is the next big testing framework everyone will love to use? I am already using it for smaller projects and might in the future when I get more comfortable with `TUnit` switch completely.

---
title: Singularity and expression trees
date: 2018-11-20T20:48:51+02:00
tags: [C#, DI]
draft: false
featuredImage:
  src: tree.jpg
  description: "Trees"
---

## Why write yet another DI container?
Some time ago I was searching for a way to make code that used reflection faster. I came across expression trees which enables you to generate code at runtime thus making it possible to remove most of the overhead from reflection. After fiddling around with expression trees for a bit I wanted to do more with them. As a final experiment I decided to write a DI container. In the end I went a bit further than just a quick experiment and wrote a full DI container and thus [Singularity](https://github.com/Barsonax/Singularity) was born.

### What are expression trees?
You most likely already used expression trees without even realizing it. When you are building a LINQ query to a 'IQueryable' you are essentially building up a expression tree. Depending on what you are talking to this expression tree might be converted into SQL, REST API calls etc.

The reason this is possible is that a expression tree is nothing more than a data structure that represents what should be done but it does not dictate how it should be done. This means expression trees may be evaluated and interpreted in many different ways. One build in way in the .NET framework is converting a expression tree to a delegate. Basically this allows you to generate a program at runtime using expression trees.

## How does Singularity use expression trees?
Lets consider the following configuration:
```cs
var config = new BindingConfig();
config.For<ITestService10>().Inject<TestService10>();
config.For<ITestService11>().Inject<TestService11>();
```
The constructors looks like this:
```cs
public TestService10() {...}
public TestService11(ITestService10 testService10){...}
```

Now we create the container and call GetInstance
```cs
var container = new Container(config);
var value = container.GetInstance<ITestService11>(); //Contains a TestService11 instance
```
The container did alot of things for us:
- It knows to create a 'TestService10' instance when we ask for a 'ITestService10' instance.
- It knows to create a 'TestService11' instance when we ask for a 'ITestService11' instance.
- It knows how to create a 'TestService10' instance.
- It knows that to create a 'TestService11' instance it needs a instance of 'ITestService11'.

Basically the container knows that when we call 'container.GetInstance<ITestService11>()' it has to execute the following code:
```cs
return new TestService11(new TestService10());
```

### But where are the expression trees?
Just like with LINQ you are using expressions without realizing it:
```cs
config.For<ITestService10>().Inject<TestService10>();
config.For<ITestService11>().Inject<TestService11>();
```

Here Singularity automatically generates expressions that can call the contructors of 'TestService10' and 'TestService11'. It does not yet wire these together though. That happens when you create the container:
```cs
var container = new Container(config);
```
## A simplified DI container in a console
This is where things can get quite complex so I had to simplify alot of code and omitted things like decorators, lifetimes etc here. If you are looking for more complete and robust code I suggest you to take a look at the Singularity repository.

So first lets look at registering dependencies. We will do it really basic and won't handle edge cases or provide a nice API:
```cs
class Program
{
	static void Main(string[] args)
	{
		var list = new List<Binding>();
		list.Add(new Binding(typeof(ITestClass10), AutoResolveConstructorExpression(typeof(TestClass10))));
		list.Add(new Binding(typeof(ITestClass11), AutoResolveConstructorExpression(typeof(TestClass11))));
	}

	public static NewExpression AutoResolveConstructorExpression(Type type)
	{
		ConstructorInfo constructor = type.GetTypeInfo().DeclaredConstructors.First(x => x.IsPublic);
		ParameterInfo[] parameters = constructor.GetParameters();
		var parameterExpressions = new Expression[parameters.Length];
		for (var i = 0; i < parameters.Length; i++)
		{
			parameterExpressions[i] = Expression.Parameter(parameters[i].ParameterType);
		}
		return Expression.New(constructor, parameterExpressions);
	}
}

public class Binding
{
	public Type DependencyType { get; }
	public Expression Expression { get; }

	public Binding(Type dependencyType, Expression expression)
	{
		DependencyType = dependencyType;
		Expression = expression;
	}
}
```

Normally dependencies can be registered in any order but to keep things simple I omitted this. I just assume the user here registers the dependencies in the correct order already. Lets define the container itself:
```cs
public class Container
{
	private DependencyGraph _dependencyGraph;
	private Dictionary<Type, Func<object>> _getInstanceCache = new Dictionary<Type, Func<object>>();

	public Container(IEnumerable<Binding> bindings)
	{
		_dependencyGraph = new DependencyGraph(bindings);
	}

	public T GetInstance<T>()
	{
		if (!_getInstanceCache.TryGetValue(typeof(T), out Func<object> action))
		{
			Expression expression = _dependencyGraph.ResolvedDependencies[typeof(T)];
			action = (Func<object>)Expression.Lambda(expression).Compile();
			_getInstanceCache.Add(typeof(T), action);
		}
		return (T)action.Invoke();
	}
}
```
Note: The generic return parameter in 'Func' is covariant (it has a 'out' keyword) which makes it possible to cast to 'Func<object>' here.

And finally the DependencyGraph which does most of the hard work:
```cs
public class DependencyGraph
{
	public Dictionary<Type, Expression> ResolvedDependencies;

	public DependencyGraph(IEnumerable<Binding> unresolvedDependencies)
	{
		var resolvedDependencies = new Dictionary<Type, Expression>();

		foreach (Binding unresolvedDependency in unresolvedDependencies)
		{
			var resolvedExpression = GenerateDependencyExpression(unresolvedDependency.Expression, unresolvedDependency.DependencyType, resolvedDependencies);
			resolvedDependencies.Add(unresolvedDependency.DependencyType, resolvedExpression);
		}

		ResolvedDependencies = resolvedDependencies;
	}

	private Expression GenerateDependencyExpression(Expression expression, Type dependencyType, Dictionary<Type, Expression> resolvedDependencies)
	{
		var body = new List<Expression>();
		var parameters = GetParameterExpressions(expression);

		foreach (ParameterExpression unresolvedParameter in parameters)
		{
			Expression dependency = resolvedDependencies[unresolvedParameter.Type];
			body.Add(Expression.Assign(unresolvedParameter, dependency));
		}

		body.Add(Expression.Convert(expression, dependencyType));
		return Expression.Block(parameters, body); //Forgetting to add the parameters to the block will result in errors.
	}

	private ParameterExpression[] GetParameterExpressions(Expression expression)
	{
		switch (expression)
		{
			case NewExpression newExpression:
				return newExpression.Arguments.OfType<ParameterExpression>().ToArray();
			default:
				throw new NotSupportedException($"The expression of type {expression.GetType()} is not supported");
		}
	}
}
```

Lets go back to Program to create the container and ask it for a dependency:
```cs
class Program
{
	static void Main(string[] args)
	{
		var list = new List<Binding>();
		list.Add(new Binding(typeof(ITestClass10), AutoResolveConstructorExpression(typeof(TestClass10))));
		list.Add(new Binding(typeof(ITestClass11), AutoResolveConstructorExpression(typeof(TestClass11))));

		var container = new Container(list);
		var value = container.GetInstance<ITestClass11>();
	}

	public static NewExpression AutoResolveConstructorExpression(Type type)	{...}
}
```

Calling GetInstance will be slow on the first call but after that it will be very fast. In fact I measured this with [BenchmarkDotNet](https://benchmarkdotnet.org/) and most of the overhead is not coming from invoking the delegate but from retrieving the delegate from the dictionary or allocating the instances themselves. This level of performance simply is not possible with reflection.

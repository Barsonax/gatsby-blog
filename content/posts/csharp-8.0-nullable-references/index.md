---
title: C# 8.0 Nullable References
date: 2019-02-18T18:48:51+00:00
tags: [C#, NullReference]
featuredImage:
  src: nullreferenceexception.jpg
  description: A null reference exception in C#
description: Is this the end of the nullable reference exception?
dropcap: false
---
## The What and Why of 'nullable references'

If you ask a developer what kind of exception he most often sees when developing a application its almost certainly the NullReferenceException. Even the best developers will forget a null check sometimes.

It all began in 1965 when Tony Hoare invented the NullReference, basically a reference that does not reference a valid object. This has let to numerous errors, vulnerabilities and system crashes. The inventor of the null reference even calls it The Billion Dollar Mistake.

In my opinion I don't see null references themselves as a bad thing. They can be a very useful representation of nothing, empty etc. Problems start however when everything in a programming language is nullable by default. In fact in C# you don't even get to choose this for reference types. In alot of cases nullability is not actually needed and only opens the door to the dreaded NullReferenceException we all see too often.

So what the new nullable reference feature in C# 8.0 does is making everything non nullable by default. If you want a reference type to be possibly null you now have to be explicit about it by adding a `?` at the end of the type name.

## How does this help with null references?

Now the type system itself has information about whether something can be null or not it can warn the developer if rules are broken. It also more clearly communicates the intent to your fellow developers. No more guessing or diving in the documentation to see if a return value can be null!

In Visual studio 2019 with nullable references enabled (for more info on how to do this yourself see the bottom of this article) we take a look at the following method that has a non nullable parameter:

```cs
public static void MethodWithNonNullableParameter(SomeClass someclass)
{
}
```

The above method needs a parameter of type SomeClass and it cannot be null. The compiler will warn you if you put in a possible null:

```cs
SomeClass? value = null;
MethodWithNonNullableParameter(value); //Gives a warning because we are passing a possible null to a non nullable parameter
```

Adding a null check will solve the warning:

```cs
SomeClass? value = null;

if(value != null)
{
    MethodWithNonNullableParameter(value); //No warning here because of the null check
}
```

You are not limited to method parameters or local variables. A property or field can be made nullable too:

```cs
public class SomeClass
{
    public SomeClass? SomeProperty { get; set; }
    public SomeClass? SomeField;
}
```

## Shortcomings

Its important to note that the nullable references feature will not spot all possible null reference exceptions. There are cases where, atleast in the VS2019 preview 4, it will fail to spot a null reference exception such as this one:

```cs
var array = new SomeClass[100];
MethodWithNonNullableParameter(array[0]); //No warning even though this will produce a null reference exception
```

In the current state nullable references does not understand the TryGetValue pattern:

```cs
var dic = new Dictionary<int, SomeClass>();
dic.TryGetValue(3, out var someClass);
MethodWithNonNullableParameter(someClass); //No warning even though this will produce a null reference exception because we forgot checking the returned bool of TryGetValue
```

Sometimes you can run into a case where you get a warning but adding a nullreference check might not be desirable because you know it will never be null at that point in the code. You can then use the ! operator to say to the compiler that you know what you are doing:

```cs
SomeClass? value = null;
var propertyValue = value!.SomeProperty; //Normally this gives a warning but we ignore it with the !. operator
```

Another curious case is the following:

```cs
public class CustomExampleDictionary<TKey, TValue>
{
    public TValue Get(TKey key)
    {
        //Returns `null` if the key does not exist. This means TValue is always TValue? even if CustomExampleDictionary is used with a non nullable TValue generic parameter.
        //However changing the return type to TValue? will result in the following error:
        //Error CS8627  A nullable type parameter must be known to be a value type or non-nullable reference type. Consider adding a 'class', 'struct', or type constraint
        return default; //Possible null reference return warning due to the nullable reference feature...
    }
}
```

I havent found a way to get above code right so in the end I had to resort to the ! operator:

```cs
public TValue Get(TKey key)
{
    return default!; //No warning because nullable references are turned off here...
}
```

This is not desirable however as we now have a method signature that says it will never return null while that is not true. I hope this is getting fixed in a later version.

## Testing it out yourself

To test out nullable references yourself you have 2 options

* Install the preview of Visual Studio 2019
* Test out nullable references in [Sharplab](https://sharplab.io/#v2:EYLgZgpghgLgrgJwgZwLQDk4BstWFiAJQkiQDsBjCAFQE8AHFAGgBMQBqAHwAEAGAAm4BGANwBYAFDcAzIIBM/AML8A3pP4bBs7gBZ+AWQAUASlXrNAX0kWgA===)

Regardless of which option you take you will notice nullable references are not enabled by default. You have enable the feature by adding #nullable enable to the code:

```cs
class Program
{
    #nullable enable
    static void Main(string[] args)
    {
    }
}
```

If you are using .NETcore it will also be possible to enable nullable references by adding `<NullableContextOptions>enable</NullableContextOptions>` to the .csproj file. I could not get this to work for .NET framework projects in the current VS2019 preview 4.

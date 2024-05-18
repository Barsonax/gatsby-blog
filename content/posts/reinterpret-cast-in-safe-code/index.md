---
title: C# 7.2 Reinterpret cast in safe code
date: 2019-08-10T18:48:51.000+00:00
tags: [C#, Performance]
featuredImage:
  src: reinterpretcode.jpg
  description: Reinterpret cast in C# code
description: A different way of looking at the same thing
dropcap: false
---
## Reinterpret cast with Span
Did you know you can do a reinterpret cast in C# where we treat a array of structs as a array of bytes?
```cs
static unsafe void Main(string[] args)
{
    var colorArray = new RGBA[]
    {
        new RGBA(1,2,3,4),
        new RGBA(9,8,7,6)
    };
    fixed (RGBA* ptr = colorArray)
    {
        byte* bytes = (byte*)ptr;
        var byteSize = colorArray.Length * 4;
        for (int i = 0; i < byteSize; i++)
        {
            Console.WriteLine(bytes[i]);
        }
    }
    Console.ReadKey();
}
```
Did you know the above code is now possible in safe code with the help of Span<T> and C# 7.2?
```cs
static void Main(string[] args)
{
    var colorArray = new RGBA[]
    {
        new RGBA(1,2,3,4),
        new RGBA(9,8,7,6)
    };
    Span<byte> bytes = MemoryMarshal.AsBytes(colorArray.AsSpan());
    for (int i = 0; i < bytes.Length; i++)
    {
        Console.WriteLine(bytes[i]);
    }
    Console.ReadKey();
}
```
Enjoy but do use with care :)

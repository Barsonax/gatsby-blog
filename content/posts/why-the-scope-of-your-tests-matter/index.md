---
title: Why the scope of your tests matter
date: 2024-05-10T15:17:00.000Z
categories:
  - Programming
---

## Writing good tests takes skill
I like automated tests, I use them constantly while working on code bases. Tests increase my productivity and allow me to write code I just couldn't write without tests. I mean try writing a dependency injection container and rely 100% on manual testing, I can assure you won't have a good time.

You might even say I practice some form of TDD. I am not blindly writing tests just for the sake of it however, just like I don't blindly write code to implement a feature. Its software engineering after all and you need to think and care about your tests just as you think and care about the app you are making.

### The scope of your tests is important
Choosing the scope of a test is the most important decision you make when writing tests. Too big and the test case will be hard to control, errors might be vague and the implementation is complex.

However, choosing a too small scope will lead to the testing hell that is brittle tests. Ever worked on a code base where you constantly had to update tests whenever you changed some implementation details, even if the functionality didn't change? That might very well be because the tests had a too small scope. In some cases you might even end up in a situation where you would be better off without any tests.

### Is this about unit tests vs integration tests?
Not really, its more nuanced than that. I think this is also where a lot of ppl get confused about what exactly is a unit or integration test. To be clear for me the main differentiator is: does the test do any form of IO like a database call? If so you have to think about that because if you want reliable and fast tests that IO is probably going to be in the way if you don't do anything about it. That is not to say you should always try to remove it from the test. That IO might be a valuable part of the test and nowadays there are tools to actually bring that part under our control with for instance [TestContainers](https://testcontainers.com/).

Even when purely focussing on unit tests you can think of many different scopes. You can test at method, class, module level or anything in between. All of these might be valid choices depending on the context. Deciding the scope of a test has more to do with testing behaviors vs testing implementation details. To get to writing good tests you want to aim your tests at behaviors and avoid implementation details. Tests that target behaviors will survive many refactors giving you the freedom to write better code.

### Why avoid testing implementation details
It's important to realize that when you write a test you introduce coupling to the piece of code you are testing. Every reference to the code you are writing a test for makes it harder to change the code you are testing, the exact thing we want to avoid by writing tests.
To make this even more clear let's take an example of a code base where you would write unit tests for every single method in your code. Now think about how much freedom do you have left for refactoring without having to modify a test? This coupling is something you have to take into account when deciding if it's worth it to write a test for a certain piece of code. Ignoring this will lead to a code base that is very hard to change and productivity will plummet.

You can employ a combination of techniques to avoid testing implementation details. Choosing the right scope for your unit test is by far the most important determining factor.

In the next part I will give some ways to avoid testing implementation details and write tests that focus on the behaviors of your system.

### How to avoid testing implementation details
Testing implementation details usually happens when writing too fine-grained tests so how to avoid this? Yes by increasing the scope of the tests. You have to identify the behavioral units of your system and write tests for those units. A good place to start are the edges of your system that are consumed by others. To give some examples:
1. The GetService call on a dependency injection container.
2. An endpoint in your REST API.
3. Calculating a path from A to B using a pathfinding algorithm like A* for instance.

Now if your system is simple just writing tests that target the edge of the system might be enough. At some point though your system might start to become more complex and certain smaller units of behavior in your code might appear that could benefit from their own set of tests. Some examples:
1. Custom collections, for instance I implemented my own custom read optimized dictionary when I made Singularity just so I could top the benchmark.
2. A custom cross-cutting concern in your REST API
3. General utility methods
4. Complex domain logic

This might already start to feel more like a gray area so lets also give some examples where I wouldn't write tests:
1. A FluentValidator that was made specifically for an endpoint.
2. A Mapper that was made specifically for an endpoint.

So what's the difference here? One thing to realize is that in the first examples the examples were truly generic, they basically define their own behavioral promise and could even be used in a different context as well. While the validator and mapper are very specific to an endpoint, they are basically implementation details of that endpoint. If we swap out FluentValidation for DataAnnotations but keep the behavior of the endpoint the same we wouldn't want to have to modify our tests. Why should our test care if we are using FluentValidation? Now you might not swap out validation libraries every day but refactors are something that should happen regularly and not having to update the tests every time you clean something up will help you keep moving fast.

### Test only one unit in a test
I do want to press that even if the behavioral unit is larger you should still try to test only one behavioral unit. If you need to test another case just make another test, they are cheap. If you find that you write the same test many times over and over again then it might be time to parameterize your test. I also find that following the Arrange, Act and Assert pattern helps here while also increasing readability.

### Time for an example with code
Lets say were developing a REST API with ASP.NET. We are lucky ASP.NET has excellent support for tests that target an REST API with the help of [WebApplicationFactory](https://learn.microsoft.com/en-us/aspnet/core/test/integration-tests) and [TestContainers](https://testcontainers.com/). With these it is relatively easy to setup an integration test. A simple test that tests a GET endpoint might look as simple as this:
```cs
[Test]
public async Task GetJobById_ReturnsExpectedJob()
{
    //Arrange
    var job = new JobFaker().Generate();
    Sut.SeedData(context =>
    {
        context.Jobs.Add(job);
    });

    //Act
    var response = await Sut.CreateClientFor<IJobApiClient>().GetJobById(job.Id);

    //Assert
    await response.AssertStatusCode(HttpStatusCode.OK);
    await response.AssertJsonBodyIsEquivalentTo(new { Id = job.Id });
}
```

Even though a lot of implementation details are happening under the hood like SQL, serialization and HTTP it is still only one behavioral unit: Get a job by its id. The chance this test will break when refactoring the API itself is pretty low as this is the behavioral promise made by the GetJobById endpoint.

If you are interested in how exactly I abstract the whole integration test setup take a look at [TestExamplesDotnet repository](https://github.com/Barsonax/TestExamplesDotnet). The test itself I took from another repository of mine: [CleanAspCoreWebApiTemplate repository](https://github.com/Barsonax/CleanAspCoreWebApiTemplate).

Does this mean you should always go for a full integration test? I think that depends. As I said before with ASP.NET its very easy to do due to the support in the framework and available libraries so for me it just makes sense to go for that route in that case. However, I also worked with other frameworks like Azure Functions which don't have an equivalent of [WebApplicationFactory](https://learn.microsoft.com/en-us/aspnet/core/test/integration-tests) and in that case I wrote unit tests that just called the method instead. I see tests as a way to increase my productivity and the quality I deliver. They are a means to an end and sometimes you just have to be pragmatic.

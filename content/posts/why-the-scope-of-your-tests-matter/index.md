---
title: Why the scope of your tests matter
date: 2024-05-10T15:17:00.000Z
categories:
  - Programming
---

# Writing good tests takes skill
I like automated tests, I use them constantly while working on code bases. Tests increase my productivity and allow me to write code I just couldn't write without tests. I mean try writing a dependency injection container and rely 100% on manual testing, I can assure you you won't have a good time.

You might even say I practise some form of TDD. Iam not blindly writing tests just for the sake of it however, just like I don't blindly write code to implement a feature. Its software engineering after all and you need to think and care about your tests just as you think and care about the app you are making.

## The scope of your tests is important
Choosing the scope of a test is the most important decision you make when writing tests. Too big and the test case will be hard to control, errors might be vague and the implementation is complex.

However choosing a too small scope will lead to the testing hell that is brittle tests. Ever worked on a code base where you constantly had to update tests whenever you changed some implementation details, even if the functionality didn't change? That might very well be because the tests had a too small scope. In some cases you might even end up in a situation where you would be better off without any tests.

## Is this about unit tests vs integration tests?
Not really, its more nuanced than that. I think this is also where alot of ppl get confused about what exactly is an unit or integration test. To be clear for me the main differentiator is: does the test do any form of IO like a database call? If so you have to think about that because if you want reliable and fast tests that IO is probably going to be in the way if you don't do anything about it. That is not to say you should always try to remove it from the test. That IO might be a valuable part of the test and nowadays there are tools to actually bring that part under our control with for instance [TestContainers](https://testcontainers.com/).

Even when purely focussing on unit tests you can think of many different scopes. You can test at method, class, module level or anything in between. All of these might be valid choices depending on the context. Deciding the scope of a test has more to do with testing behaviors vs testing implementation details. To get to writing good tests you want to aim your tests at behaviors and avoid implementation details. Tests that target behaviors will survive many refactors giving you the freedom to write better code.

## Its about coupling and cohesion
Its important to realize that when you write a test you introduce coupling to the piece of code you are testing. Every reference to the code you are writing a test for makes it harder to change the code you are testing, the exact thing we want to avoid by writing tests. To make this even more clear lets take an example of a code base where you would write unit tests for every single method in your code. Now think about how much freedom do you have left for refactoring without having to modify a test? This coupling is something you have to take into account when deciding if its worth it to write a test for a certain piece of code. Ignoring this will lead to a code base that is very hard to change and productivity will plummet.

Tests that test too much different things are also hard to maintain. They can potentially break due to many different changes in the system under test which makes it harder to trace back the root cause. This is cohesion and is also something you have to take into account.

Choosing the scope of your tests is about balancing coupling and cohesion. In the next part I will give some more concrete examples and what I would do in that situation.

# Target stable interfaces with tests
One thing you can do to reduce the coupling of your tests is to write tests that target a stable interface that does not change often. A interface is stable when its expensive to introduce changes to it, maybe because the consumers of your system are using it. Coincidentally these might often align with the use cases of that code which helps cohesion as well. Some examples are:

## Your REST api
REST api's are everywhere and if you are building one this might be the first candidate you should look for when writing a test. While more complex to setup these test have very little coupling to the code under test, give you high confidence your system is working properly and you can do big refactors to the system without having to change even a single test.

.NET in particular has good support for such test with [WebApplicationFactory](https://learn.microsoft.com/en-us/aspnet/core/test/integration-tests) and I also made a [TestExamplesDotnet repository](https://github.com/Barsonax/TestExamplesDotnet) which I also use myself to quickly setup such tests. While the setup will more more complex than unit tests the tests themselves can be very easy to write and readable. Take for instance this test taken from my [CleanAspCoreWebApiTemplate repository](https://github.com/Barsonax/CleanAspCoreWebApiTemplate):
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

For systems with not too much complexity this might even all you need for your automated testing needs as you can indirectly test all your functionality with these tests. Even if you don't want to or can't use integration tests then atleast try to write unit tests that target the edges of your system.

## Code with many references to it
Your code base might have some very generic helpers utilities that are used in many different contexts. Think of string manipulation extensions for instance. These can be a good target for unit tests. Complex domain logic can also benefit from unit tests. Be careful though and weight the pros and cons of writing separate unit tests as it does increase coupling, testing indirectly can be totally fine.

## Align tests with behavior
Some of your code you might not be used directly but through another library. This is the case for instance with a JsonConverter. In this case I would not test the JsonConverter directly but by calling the JsonSerializer api's. For the test we are only interested in the json serialization and deserialization behavior, the JsonConverter is just a implementation detail. This avoids a bit of coupling with the JsonConverter but more importantly aligns with how you use it in the rest of your app so if the tests are passing you know your JsonConverter is working correctly in your app.

## Test one thing in a test
To avoid testing many different things in a test try to only test a specific use case. If you need to test another case just make another test, they are cheap. If you find that you write the same test many times over and over again then it might be time to parameterize your test. I also find that following the Arrange, Act and Assert pattern helps here while also increasing readability.

# It takes time
Knowing which tests to write and which you don't have to write takes experience but I hope I atleast made it a bit clearer. Even if you don't fully understand from this article what to do yet I do hope it will make you think about the coupling and cohesion in your tests.

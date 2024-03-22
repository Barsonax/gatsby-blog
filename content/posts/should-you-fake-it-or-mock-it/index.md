---
title: Should you fake it or mock it
date: 2024-03-22T18:25:00.000Z
categories:
  - Programming
---

# Volatile dependencies
When writing good unit tests there are several properties you want to uphold:
- Reliable, nobody likes flaky tests
- Fast, faster tests = higher dev productivity

One of the things that might prevent you from achieving this are so called volatile dependencies. Usually these are dependencies that do some form of IO which causes their behavior to be harder to control. For instance maybe you have a dependency thats calling an external service over the network. If you do that in your test as well your test will not only be slower but might also fail when something between your test and that service or the service itself breaks. Another example might be a dependency that uses 'DateTime.Now' (which depends on the system time) which makes it hard to control time in your test, maybe your test will suddenly start to break on a certain day in the year?

There are solutions to the problem of volatile dependencies though: just swap them out for a stable dependency.

But what exactly is that stable dependency? Should we simply hardcode the behavior or should it be a bit smarter and actually have some logic?

## Scenario
To make the following part more concrete lets introduce a simple scenario with some code. We have a `IITemStore` interface that lets us store and retrieve items:

```cs
public interface IITemStore
{
    void Store(Item item);

    Item GetById(int id);
}
```

The real dependency is volatile as it uses a external service that has to be called over the network so we won't be using the real dependency in our unit tests.

## Mocks/Stubs
One of the simplest ways to remove a volatile dependency is to provide a stable dependency where we just hardcode the behavior that we need in the test. You might also be interested in inspecting if certain calls were done. You might write your own or use a library like Moq to help you do this.

Following this approach our GetById test will look like this:
```cs
// Arrange
var itemStoreMock = new Mock<IITemStore>();
itemStoreMock.Setup(x => x.GetById(It.IsAny<int>())).Returns(new Item(1));

var sut = new DependencyThatUsesItemStore(itemStoreMock.Object);

// Act
var item = sut.GetItem(1);

// Assert
item.Id.Should().Be(1);
```

And the Store test will look like this:
```cs
// Arrange
var itemStoreMock = new Mock<IITemStore>();
itemStoreMock.Setup(x => x.Store(It.IsAny<Item>())).Verifiable();
var sut = new DependencyThatUsesItemStore(itemStoreMock.Object);

// Act
sut.StoreItem(new Item(1));

// Assert
itemStoreMock.Verify(); // This will check if the Store was actually called due to the setup being Verifiable.
```

This approach has some advantages:
- Full control over what happens.
- Easy to start with.
- You can easily mock a dependency even if the interface is complex.

But there are some downsides as well:
- Its tedious to set this up for every test case.
- Theres the risk that you might couple your test to implementation details which will make refactoring harder. Like in our example we are checking if the Store method was called.
- Hard to test more complex interaction between dependencies.

## Fakes
A fake is smarter and will actually mimic the behavior of the real dependency but without being volatile. They will have limitations that make them unsuitable for production though such as less scalable.

For instance you might have a interface that lets you store and retrieve items. The real dependency uses a external service but your fake is simply storing and retrieving these items in memory. Even though storing items in memory will not work in production the basic promise of the interface is still uphold which makes the fake suitable for usage in unit tests. You could use a library like Moq for this with more complicated setups but I find it easier and clearer to just do it without any library and simply write a new class:

```cs
public class FakeItemStore : IITemStore
{
    public List<Item> Items { get; } = new();

    public void Store(Item item)
    {
        Items.Add(item);
    }

    public Item GetById(int id) => Items.First(x => x.Id == id);
}
```

Then our GetById test will look like this:
```cs
// Arrange
var itemStore = new FakeItemStore();
itemStore.Items.Add(new Item(1));

var sut = new DependencyThatUsesItemStore(itemStore);

// Act
var item = sut.GetItem(1);

// Assert
item.Id.Should().Be(1);
```

And our Store test will look like this:
```cs
// Arrange
var itemStore = new FakeItemStore();
var sut = new DependencyThatUsesItemStore(itemStore);

// Act
sut.StoreItem(new Item(1));

// Assert
itemStore.Items.Should().BeEquivalentTo(new[]
{
    new
    {
        Id = 1
    }
});
```

Advantages:
- Generic, will work with many or even all tests.
- Less coupling to implementation details.
- Leads to clearer less noisy tests that focus more on functionality.

Downsides:
- Harder to start with.
- Even harder to do with complex interfaces with complex behavior.
- Less control over a specific test case.

## Verdict
So which approach should you use? I think that depends on your context. In the example above we have a simple interface that makes some clear promises: you can create items and get them by id. In this case I think a fake is the clear winner. The tests are easier to write and more readable and furthermore its generic so you could have many tests that use this fake.

However maybe you have a interface with very complex behavior which is hard to write a fake for and its easier to just mock it. In that situation you might ask yourself do you really need all that complex behavior in your app? Maybe a simplified interface that is easily fakeable is sufficient for your use cases so you might still want to use a fake in that situation. Maybe you are only ever going to have a few tests that uses that dependency and investing in a fake is not worth the time so a mock might still be the better choice. It really depends.

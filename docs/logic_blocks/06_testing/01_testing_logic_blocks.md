---
title: 💡 Testing Logic Blocks
image: ../header.jpg
---

LogicBlocks are mockable and testable.

:::tip
You can see plenty of test examples for the tutorial project in the `Chickensoft.LogicBlocks.Tutorial` package at the [LogicBlocks] repository.
:::

### 🥸 Mocking a Logic Block

LogicBlocks implement the `ILogicBlock<TState>` interface, which makes them easy to mock.

To make a logic block easily mockable, simply make it implement an interface.

```csharp
public interface ITimer : ILogicBlock<Timer.State>;

[Meta, LogicBlock(typeof(State), Diagram = true)]
public partial class Timer : LogicBlock<Timer.State>, ITimer {
  public override Transition GetInitialState() => To<State.PoweredOff>();

  ...
}
```

Then, we can mock whatever logic block api's we need to when testing an object which uses a logic block.

```csharp
using static Chickensoft.LogicBlocks.Tutorial.Timer;

sealed record MyComponent(ITimer Timer) {
  public void DoSomething() {
    if (Timer.Value is State.PoweredOff) {
      // Do something when the timer is off.
    }
  }
}

public class MyComponentTest {
  [Fact]
  public void Mocks() {
    var timer = new Mock<ITimer>();

    // Make the mock logic block be in a specific state.
    timer.Setup(t => t.Value).Returns(new State.PoweredOff());

    var component = new MyComponent(timer.Object);
    component.DoSomething();
  }
}
```

### 🔬 Testing a Logic Block

Logic blocks themselves don't usually have much to test, but you can still do it for the sake of completeness.

```csharp
[Fact]
public void Initializes() {
  // Mock dependencies that the logic block needs.
  var clock = new Mock<IClock>();

  // Create the real logic block.
  var timer = new Timer();

  // Add the mocked dependencies to the blackboard.
  timer.Set(clock.Object);

  // Check that the initial state is the one we expect.
  var state = timer.GetInitialState()
    .State
    .ShouldBeOfType<State.PoweredOff>();

  // Verify the timer has set its blackboard data correctly.
  timer.Has<Data>().ShouldBeTrue();
  timer.Get<IClock>().ShouldBe(clock.Object);
}
```

[LogicBlocks]: https://github.com/chickensoft-games/LogicBlocks

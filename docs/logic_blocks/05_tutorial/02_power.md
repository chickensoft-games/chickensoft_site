---
title: 🔆 Power
image: ../header.jpg
---

We know we'll need a `PoweredOn` state, too. Whenever the user presses the power button, we should toggle between off and on.

Fortunately, that's easy to do. We just create another state and an input for the power button being toggled.

```csharp
[Meta, LogicBlock(typeof(State), Diagram = true)]
public partial class Timer : LogicBlock<Timer.State> {
  public override Transition GetInitialState() => To<State.PoweredOff>();

  public static class Input {
    public readonly record struct PowerButtonPressed;
  }

  public static class Output;

  public abstract record State : StateLogic<State> {

    public record PoweredOff : State, IGet<Input.PowerButtonPressed> {
      public Transition On(in Input.PowerButtonPressed input) =>
        To<PoweredOn.Idle>();
    }

    public abstract record PoweredOn : State, IGet<Input.PowerButtonPressed> {
      public Transition On(in Input.PowerButtonPressed input) =>
        To<PoweredOff>();

      public record Idle : PoweredOn;
    }
  }
}
```

Whenever a state wants to handle a type of input, it simply implements the `IGet<TInput>` interface with the type of the input we're interested in. Then, you simply implement the `On(in TInput input)` method and return the transition to the next state.

Transitions are defined with the `To<TState>()` method. If you don't want to transition to another state in an input handler, you can always return `ToSelf()`.

The `PoweredOff` state now handles the `PowerButtonPressed` input and will go to the new `Idle` state, which inherits from `PoweredOn`.

Likewise, the `PoweredOn` state also handles the same `PowerButtonPressed` input and will go to the `PoweredOff` state.

## ⏰ Changing the Timer's Duration

We know we want the user to specify how long the timer should run. That raises another question: where do we store the value?

Well, we could always add a property to one of our states. But since LogicBlocks constructs states for us (something we'll appreciate more when we talk about [serializing] them), we don't really have a clean way of passing that data around.

Instead, let's use the shared ✨ blackboard ✨. We'll create a new type that contains the values we'll need to share between states and put that on the blackboard. Since this data bucket is specific to our logic block, we'll go ahead and make it a nested type of the logic block, too.

```csharp
[Meta, LogicBlock(typeof(State), Diagram = true)]
public partial class Timer : LogicBlock<Timer.State> {
  public override Transition GetInitialState() => To<State.PoweredOff>();

  public sealed record Data {
    public double Duration { get; set; }
    public double TimeRemaining { get; set; }
  }

  public Timer() {
    // Set shared data for all states in the blackboard.
    Set(new Data() { Duration = 30.0d });
  }

  ...
```

Now, whenever we create a new timer logic block, it'll add a new instance of the timer `Data` to the blackboard. Now all of our states can access the same data!

Let's modify our `Idle` state to receive a new input, `ChangeDuration`. We'll add a property to `ChangeDuration` that specifies the new duration.

```csharp
public static class Input {
  public readonly record struct PowerButtonPressed;
  public readonly record struct ChangeDuration(double Duration);
}

public record Idle : PoweredOn, IGet<Input.ChangeDuration> {
  public Transition On(in Input.ChangeDuration input) {
    Get<Data>().Duration = input.Duration;
    return ToSelf();
  }
}
```

All we do in the `ChangeDuration` input handler is update the `Duration` property on the shared `Data` object and remain in the same state. Simple!

While we're at it, let's go ahead and add a new input, `StartStopButtonPressed` and make the `Idle` state transition to a new `Countdown` state when the user presses the start/stop button.

```csharp
public static class Input {
  public readonly record struct PowerButtonPressed;
  public readonly record struct ChangeDuration(double Duration);
  public readonly record struct StartStopButtonPressed;
}

public record Idle : PoweredOn, IGet<Input.StartStopButtonPressed>, IGet<Input.ChangeDuration> {
  public Transition On(in Input.ChangeDuration input) {
    Get<Data>().Duration = input.Duration;
    return ToSelf();
  }

  public Transition On(in Input.StartStopButtonPressed input) =>
    To<Countdown>();
}
```

In the next part, we'll implement the `Countdown` state for our timer.

[serializing]: ../serialization

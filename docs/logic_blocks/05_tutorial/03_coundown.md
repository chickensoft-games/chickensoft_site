---
title: ⏳ Countdown
image: ../header.jpg
---

Now that our timer can be turned on, off, and set to a given duration, it's time to make it actually work.

We could build the timer in a really simple fashion, but in the interest of actually learning something, let's pretend that our project has a clock service that exposes an [event] that informs us when a second has passed, roughly speaking.

In this section, we'll make our new `Countdown` state subscribe to the clock service and respond to a new `TimeElapsed` input.

First, let's define what the clock service looks like.

```csharp
/// <summary>
/// A service that announces the passage of time, roughly once per second.
/// </summary>
public interface IClock {
  /// <summary>
  /// Invoked about every second or so. Provides the time since the last
  /// invocation (in seconds).
  /// </summary>
  event Action<double> TimeElapsed;
}
```

Easy enough. Let's make a new `Countdown` state. We can register [attach and detach callbacks][attachment] to subscribe to the clock service whenever the `Countdown` state becomes the active state, and unsubscribe when it is no longer the active state.

```csharp
public static class Input {
  public readonly record struct PowerButtonPressed;
  public readonly record struct ChangeDuration(double Duration);
  public readonly record struct StartStopButtonPressed;
  public readonly record struct TimeElapsed(double Delta);
}

public record Countdown : PoweredOn, IGet<Input.TimeElapsed>, IGet<Input.StartStopButtonPressed> {
  public Countdown() {
    OnAttach(() => Get<IClock>().TimeElapsed += OnTimeElapsed);
    OnDetach(() => Get<IClock>().TimeElapsed -= OnTimeElapsed);
  }

  private void OnTimeElapsed(double delta) =>
    Input(new Input.TimeElapsed(delta));

  public Transition On(in Input.TimeElapsed input) {
    var data = Get<Data>();
    data.TimeRemaining -= input.Delta;
    return data.TimeRemaining <= 0.0d ? To<Beeping>() : ToSelf();
  }

  public Transition On(in Input.StartStopButtonPressed input) => To<Idle>();
}
```

We access the clock service through the blackboard when we're attaching/detaching so that we can subscribe and unsubscribe to it.

We've also added a private method in `Countdown` that adds an input to the logic block whenever the clock invokes the `TimeElapsed` event.

```csharp
private void OnTimeElapsed(double delta) =>
  Input(new Input.TimeElapsed(delta));
```

The `Input()` method allows us to add an input on the logic block we are attached to. Since we unsubscribe when we're detached, this method will only ever get called when the `Countdown` state is active.

:::tip
By subscribing to an event and adding an input to ourselves, we can force a state change to occur. This pattern of forcing state changes through subscriptions and inputs allows us to react to external events without creating a mess of our code.
:::

Finally, in our input handler for the `TimeElapsed` input that we add to ourselves whenever the clock we're subscribed to invokes its `TimeElapsed` event, we decrement the time remaining and transition to the `Beeping` state when the time runs out.

We don't have a beeping state yet, so we'll go ahead and create one in the next section.

[event]: https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/events/
[attachment]: ../basics/states#%EF%B8%8F-attachment

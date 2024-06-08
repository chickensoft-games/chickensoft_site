---
title: ⏰ Beeping
image: ../header.jpg
---

It's finally time to make the last (and best) part of our timer: the beeping state!

Fortunately, this is really simple. We'll pretend that our timer is designed to be owned by something in the view layer of the application that can play sounds for us.

We'll simply create [outputs] when the beeping state is entered and exited that tell anything binding to the logic block to play or stop a sound. We also want to handle the `StartStopButtonPressed` input to go back to the `Idle` state.

```csharp
public static class Output {
  public readonly record struct PlayBeepingSound;
  public readonly record struct StopBeepingSound;
}

public record Beeping : PoweredOn, IGet<Input.StartStopButtonPressed> {
  public Beeping() {
    this.OnEnter(() => Output(new Output.PlayBeepingSound()));
    this.OnExit(() => Output(new Output.StopBeepingSound()));
  }

  public Transition On(in Input.StartStopButtonPressed input) =>
    To<Idle>();
}
```

Outputs are just objects that are sent to the logic block's bindings. They can be used to communicate with anything that is interested in the logic block without the logic block states' having to know about them directly.

We use the state's `this.OnEnter` and `this.OnExit` extension methods to define callbacks that should be invoked whenever the state is entered and exited, respectively. These entrance and exit callbacks are different than attach and detach callbacks since they are only invoked if the relevant portions of the type hierarchy changes. For more on that, see the ["Correct Hierarchical State Lifecycles"][correct-lifecycles] section.

Finally, we're done!

Now the only thing that remains is to [write tests] (and of course you love writing tests, or else you wouldn't have read several pages on state management with hierarchical state machines 🤠).

[outputs]: ../basics/outputs
[correct-lifecycles]: ../why#-correct-hierarchical-state-lifecycles
[write tests]: ../testing

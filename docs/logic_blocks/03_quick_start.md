---
title: 🚀 Quick Start
image: ./header.jpg
---

## 💡 Creating a Logic Block

A logic block is simply a class that extends `LogicBlock`. Logic blocks receive inputs, maintain a single state value, and produce outputs.

```csharp
using Chickensoft.Introspection;

[Meta, LogicBlock(typeof(State), Diagram = true)]
public partial class LightSwitch : LogicBlock<LightSwitch.State> {
  // Define your initial state here.
  public override Transition GetInitialState() => To<State.PoweredOff>();

  // By convention, inputs are defined in a static nested class called Input.
  public static class Input {
    public readonly record struct Toggle;
  }

  // By convention, outputs are defined in a static nested class called Output.
  public static class Output {
    public readonly record struct StatusChanged(bool IsOn);
  }

  // To reduce unnecessary heap allocations, inputs and outputs should be
  // readonly record structs.

  // By convention, the base state type is nested inside the logic block. This
  // helps the logic block diagram generator know where to search for state
  // types.
  public abstract record State : StateLogic<State> {
    // Substates are sometimes nested inside their parent states to help
    // organize the code.

    // On state.
    public record PoweredOn : State, IGet<Input.Toggle> {
      public PoweredOn() {
        // Announce that we are now on.
        this.OnEnter(() => Output(new Output.StatusChanged(IsOn: true)));
      }

      public Transition On(in Input.Toggle input) => To<PoweredOff>();
    }

    // Off state.
    public record PoweredOff : State, IGet<Input.Toggle> {
      public PoweredOff() {
        // Announce that we are now off.
        this.OnEnter(() => Output(new Output.StatusChanged(IsOn: false)));
      }

      public Transition On(in Input.Toggle input) => To<PoweredOn>();
    }
  }
}
```

To make a logic block, you simply extend the `LogicBlock<TState>` class, override the `GetInitialState()` method, and add the `[LogicBlock]` attribute to your class with the type of your state.

## 🔌 Using a Logic Block

LogicBlocks includes a simple binding system to enable you to write declarative code, even in imperative environments like a game engine. Bindings allow you to monitor the inputs a state machine receives and the outputs it produces, in addition to its state changes and any exceptions that occur.

```csharp
// Start the logic block to force the initial state to be active.
//
// This is optional: you can also start a logic block by just adding an
// input to it or reading its state.
logic.Start();

// Add an input to turn our light switch on.
logic.Input(new LightSwitch.Input.Toggle());

// The logic block's value represents the current state.
var state = logic.Value; // PoweredOn

// Bindings allow you to observe the logic block easily.
using var binding = logic.Bind();

// Monitor an output:
binding.Handle((in LightSwitch.Output.StatusChanged output) =>
  Console.WriteLine(
    $"Status changed to {(output.IsOn ? "on" : "off")}"
  )
);

// Can also use bindings to monitor inputs, state changes, and exceptions.
//
// In general, prefer monitoring outputs over state changes for more
// flexible code.

// Monitor an input:
binding.Watch((in LightSwitch.Input.Toggle input) =>
  Console.WriteLine("Toggled!")
);

// Monitor a specific type of state:
binding.When((LightSwitch.State.PoweredOn _) =>
  Console.WriteLine("Powered on!")
);

// Monitor all exceptions:
binding.Catch((Exception e) => Console.WriteLine(e.Message));

// Monitor specific types of exceptions:
binding.Catch((InvalidOperationException e) =>
  Console.WriteLine(e.Message)
);
```

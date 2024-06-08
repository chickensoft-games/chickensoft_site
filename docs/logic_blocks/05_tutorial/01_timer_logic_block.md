---
title: 🧊 Timer Logic Block
image: ../header.jpg
---

To start off the tutorial, we'll start by making sure we have the right dependencies and then setup an empty logic block.

:::caution
This tutorial assumes a high degree of familiarity with state machines and C#. If you're new to either, you may wish to [learn more about C#][learn csharp] or read the basics on [statecharts].
:::

### 📦 Environment Setup

If you haven't already, make sure you've [installed everything]. You'll need LogicBlocks and the Chickensoft [Introspection] generator. Feel free to install the optional diagram generator so you can [see your code as a state diagram][state diagram].

:::note
The introspection generator produces information about types at build time, allowing logic blocks to know about all the possible states when it runs. If we don't use the introspection generator, we'd have to manually create and register every state manually.
:::

### 📝 Creating a Logic Block

To define a logic block, we simply make a class that extends `LogicBlock<TState>`. By convention, we usually define our state inside the logic block itself as a [nested type].

:::tip
If you don't define your state nested inside the logic block, the diagram generator won't be able to generate diagrams of your code since it won't know where to look to find your logic block's state.
:::

Let's go ahead and make an empty logic block for the timer.

```csharp
using Chickensoft.Introspection;

[Meta, LogicBlock(typeof(State), Diagram = true)]
public partial class Timer : LogicBlock<Timer.State> {
  public override Transition GetInitialState() => To<State.PoweredOff>();

  public static class Input;

  public static class Output;

  public abstract partial record State : StateLogic<State> {
    public record PoweredOff : State;
  }
}
```

We've created an empty abstract base state, a starting state `PoweredOff`, and two empty static classes which will store our input and output types. We've also specified that our initial state should be `PoweredOff`.

The `[Meta]` attribute tells the Chickensoft [Introspection] generator that we want to generate additional metadata about our logic block at build time by making it an _introspective type_. LogicBlocks is smart enough to know if it has been upgraded to an introspective type, and if it has, it will automatically identify the possible states and create them.

:::note
If you really don't want to use the introspection generator, you don't have to — but you'll have to register each state manually in the constructor. Here's what that would look like so far:

```csharp
public Timer() {
  Set(new PoweredOff()); // Do this for each possible state.
}
```

For best results, just use the introspection generator: it prevents human error by protecting you against forgetting to register a state type, especially as you refactor your code and change up the state type hierarchy — a common occurrence when working with state machines.
:::

[installed everything]: ../installation
[state diagram]: ../#%EF%B8%8F-visualizing-logic-blocks
[learn csharp]: http://rbwhitaker.wikidot.com/c-sharp-tutorials
[statecharts]: ../#-what-to-read-next
[nested type]: https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/nested-types
[Introspection]: https://github.com/chickensoft-games/Introspection

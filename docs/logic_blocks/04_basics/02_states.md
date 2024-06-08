---
title: 🔄 States
slug: states
image: ../header.jpg
---

**State** refers to the value maintained by a logic block.

States can receive inputs, read values from the shared blackboard, and produce outputs and errors. Logic blocks don't actually do very much by themselves — the current state determines what inputs get handled.

States are always `record class` reference types that are derived from `StateLogic<TState>`, a type provided by LogicBlocks.

```csharp
using Chickensoft.Introspection;

[Meta, LogicBlock(typeof(State), Diagram = true)]
public partial class LightSwitch : LogicBlock<LightSwitch.State> {

  // Define the state. By convention, this is placed inside the logic block.
  public abstract record State : StateLogic<State> {
    // On state.
    public record PoweredOn : State, IGet<Input.Toggle> {}

    // Off state.
    public record PoweredOff : State, IGet<Input.Toggle> {
      public Transition On(in Input.Toggle input) => To<PoweredOn>();
    }
  }

  // Define your initial state here.
  public override Transition GetInitialState() => To<State.PoweredOff>();
}
```

Each state type can extend other state types using traditional C# inheritance, representing the idea of [compound states] from statechart theory.

Only one instance of a state is ever active at once. When a state instance is active, we say it is `attached`. When a state change occurs, the previous state instance is `detached`.

### 📥 Handling Inputs & State Changes

States define input handlers which allow them to receive inputs and return the next state th e
States indicate which inputs they handle by implementing `IGet<TInputType>` for each type of input they want to handle.

```csharp
public record MyState : State, IGet<Input.A>, IGet<Input.B>, IGet<Input.C> {
  // Don't change states on A
  public Transition On(in Input.A input) => ToSelf();

  // Go to StateC on C
  public Transition On(in Input.C input) => To<StateC>();
}
```

Input handlers are processed synchronously and always return a transition to the next state. We use `To<TState>()` method to define a transition to another state. If you don't want to change states, simply return `ToSelf()`.

States are stored on the blackboard.

### 🧑‍🏫 Blackboard

The **[blackboard]** is a type of dictionary collection that allows the logic block and its states to access shared data. States look up values stored in the blackboard by their system type.

The logic block keeps a blackboard internally, but doesn't expose it. Instead, it implements the `IBlackboard` interface, allowing you to treat it as if it were the blackboard.

```csharp
var logic = new MyLogicBlock();

// Add all the dependencies that states will need.
logic.Set<IService>(new MyRelatedService());

var service = logic.Get<IService>();
```

Each state instance has an internal context that allows it to interact with the logic block while it is attached. The base `StateLogic<TState>` class that every state derives from provides a `Get<T>()` method that allow the state to read values from the logic block's blackboard.

```csharp
[Meta, LogicBlock(typeof(State), Diagram = true)]
public partial class LightSwitch : LogicBlock<LightSwitch.State> {

  public abstract record State : StateLogic<State> {

    public record PoweredOn : State, IGet<Input.Toggle> {
      public PoweredOn() {
        OnAttach(() => {
          Get<MyRelatedService>().StartDoingSomething()
        });
      }
    }

  ...
```

### 🌱 Lifecycle Callbacks

#### 👩‍❤️‍👨 Attachment

When a state change occurs, the current state instance is `detached` and the next state instance is `attached`. Only one state instance is ever `attached` at once.

States can register callbacks that allow them to know when they become attached and detached.

```csharp
public MyState() {
  OnAttach(() => System.Console.WriteLine("MyState attached."))
  OnDetach(() => System.Console.WriteLine("MyState detached."))
}
```

:::info
For the sake of sanity, registering lifecycle callbacks should only be done in the state's constructor.
:::

#### 🚪 Entrance and Exits

States can also observe when they are `entered` and `exited`.

Unlike attachment, which is called every time a state instance is swapped for the active state of the logic block, entrance and exit callbacks are only invoked when the state's type hierarchy changes.

```csharp
public MyState() {
  this.OnEnter(() => System.Console.WriteLine("MyState entered."))
  this.OnExit(() => System.Console.WriteLine("MyState exited."))
}
```

**LogicBlocks guarantees correct behavior for entrance and exit callbacks with compound states** (states that inherit other states).

If you transition between two states that extend a common parent state, the common parent state will not have any of its exit callbacks invoked, since you are still in that _type_ of state.

:::info
Unlike `OnAttach` and `OnDetach`, you have to invoke `OnEnter` and `OnExit` as `this.OnEnter` and `this.OnExit`, respectively. LogicBlocks has to implement `this.OnEnter` and `this.OnExit` as extension methods to properly capture the generic context. Unlike in previous versions, you don't have to specify which type of state you are entering — it just knows.
:::

### 🏎️ Stopping and Starting

By default, a logic block will not create the first state until it is read, explicitly started, or receives an input. Lazily initializing state allows you to determine when the initial state should actually be attached and entered, guaranteeing that any _side effects_ don't occur until you're ready.

```csharp
var logic = new MyLogicBlock();

// Make sure the initial state is attached and entered.
logic.Start();

// Exit and detach the current state.
logic.Stop();
```

Starting and stopping a logic block triggers the relevant attach/detach and entrance/exit callbacks.

### ⠛ Compound / Composite States

LogicBlocks supports the concept of [compound states] (also known as composite states) as defined by statecharts. A compound state is simply a state which contains more than one state inside it.

:::info
States can define themselves in terms of other existing states, only accounting for the changes between them. Coding-by-difference like this helps prevents duplicate logic and ensure correctness.
:::

<FancyImage src={require("./images/compound.png").default} alt="Logic block visual diagram" widthOverride="380px">
</FancyImage>

To create a compound state with LogicBlocks, simply create a state record that inherits from another state type.

Below is an example of a logic block that defines a few compound states.

```csharp
[Meta, LogicBlock(typeof(State))]
public partial class ExerciseLogic : LogicBlock<ExerciseLogic.State> {
  public override Transition GetInitialState() => To<Standing>();

  public abstract record State : StateLogic<State>;

  public abstract record Active : State {
    public Active() {
      this.OnEnter(() => Console.WriteLine("Active"));
    }

    public record Walking : Active {
      public Walking() {
        this.OnEnter(() => Console.WriteLine("Walking"));
      }
    }

    public record Running : Active {
      public Running() {
        this.OnEnter(() => Console.WriteLine("Running"));
      }
    }
  }

  public abstract record Inactive : State {
    public Inactive() {
      this.OnEnter(() => Console.WriteLine("Inactive"));
    }

    public record Standing : Inactive {
      public Standing() {
        this.OnEnter(() => Console.WriteLine("Inactive"));
      }
    }
  }
}
```

Note how `Walking` and `Running` are inherit from the same parent state, `Active`. Likewise, `Standing` inherits from the `Inactive` state. The parent states `Active` and `InActive` are both compound states.

We have chosen to make the `Active` and `Inactive` states abstract since we plan to always be in one of the concrete states that inherit from them. You can decide whether or not to make a state abstract or not based on your desired behavior for your logic block.

<FancyImage src={require("./images/call_order.png").default} alt="Logic block visual diagram" widthOverride="380px">
</FancyImage>

States that inherit from other states will register their attach/detach and enter/exit callbacks in the order that the C# constructors are executed: from base type to most derived type. Internally, LogicBlocks exploits this C# constructor call order to infer the type hierarchy of a given state.

When the example state machine shown above is started, the initial state is `Standing`, which inherits from the `Inactive` state. When entered, each of the entrance callbacks registered by the base type `Inactive` and the derived type `Standing` will be invoked.

```csharp
logic.Start();

// Prints:
// Inactive
// Standing
```

If the `Standing` state were to receive an input that causes it to transition to `Walking`, the entire state hierarchy would change and all of the entrance callbacks for `Walking` would execute:

```text
Active
Walking
```

Transitioning from `Walking` to `Running`, however, will result in only the following being printed:

```text
Running
```

Because the `Running` state also inherits from the `Active` state, transitioning between one `Active` state (`Walking`) to another `Active` state (`Running`) only results in the entrance callbacks being invoked for the portion of the state hierarchy that has changed — i.e., only the callbacks for each subtype of the last common ancestor type.

:::note
LogicBlocks determines which entrance/exit callbacks to run when changing states, and only calls the entrance or exit callbacks that actually apply to the state transition. This behavior is consistent with the statechart requirements for [compound states]:

> When a substate transitions to another substate, both “inside” the compound state, the compound state does not exit or enter; it remains active.
> :::

### ⚙️ Adding Inputs to Force a State Change

Attach and detach callbacks are especially useful for subscribing to services and disposing of subscriptions.

:::caution
For best results, don't add inputs during lifecycle callbacks. Instead, use them in handlers for services you're subscribed to, as shown above.
:::

```csharp
public record MyState : State, IGet<Input.SomethingHappened> {
  public MyState() {
    OnAttach(() => Get<ISomeService>().DataReceived += OnDataReceived)
    OnDetach(() => Get<ISomeService>().DataReceived -= OnDataReceived)
  }

  private void OnDataReceived(int data) {
    // Trigger an input on the logic block that owns us — this can force a
    // state change reactively if we know we can handle this type of input.
    Input(new Input.SomethingHappened(data));
  }

  public Transition On(in Input.SomethingHappened input) => To<OtherState>();
}
```

We add an input to the logic block we are attached to from the handler of the event we subscribed to using the `Input<T>()` method provided by the state. We also implement the input handler for that event, which allows us to return a new state — effectively forcing the logic block to change states when something happens. This pattern is commonly leveraged with logic blocks to create complex reactive behaviors.

### 🥊 Attach and Detach vs Entrance and Exit

:::caution
Unlike entrance and exit callbacks, attach and detach callbacks **always** run for _each state instance_ that the logic block transitions to.
:::

Because **attach and detach** callbacks are invoked for each state instance, _they should only be used for housekeeping_: i.e., subscribing and unsubscribing from events, notifications or other observables.

Likewise, **entrance and exit** callbacks _should not manage subscriptions_, as the type hierarchy can remain mostly unchanged but the actual state instance can be different.

:::tip
In general, place instance-specific initialization or cleanup in `OnAttach` and `OnDetach`. Likewise, place game or business related logic in `this.OnEnter` and `this.OnExit`.
:::

[compound states]: https://statecharts.dev/glossary/compound-state.html
[blackboard]: https://github.com/chickensoft-games/Collections?tab=readme-ov-file#blackboard

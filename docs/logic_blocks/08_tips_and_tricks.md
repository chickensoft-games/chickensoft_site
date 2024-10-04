---
title: 🪄 Tips and Tricks
image: ./header.jpg
---

Additional functionality and troubleshooting tips for LogicBlocks are described here.

## 🔧 Manual Logic Blocks

Most examples in the documentation depict logic blocks being used alongside the [Introspection] generator to enable automatic state preallocation and serialization. If you do not want to leverage the generator, you can omit it and still use logic blocks.

To make a logic block without the generator, simply omit the `[Meta]` type attribute from the logic block and its states. Be sure to manually preallocate all possible instantiable states in the logic block's constructor and add them to the blackboard, being careful not to forget any.

```csharp
[LogicBlock(typeof(State))]
public class ManualLogicBlock : LogicBlock<ManualLogicBlock.State> {
  public abstract record State : StateLogic<State> { }

  public record StateOne : State;
  public record StateTwo : State;
  public override Transition GetInitialState() => To<State>();

  public ManualLogicBlock() {
    // Important: we have to add an instance of each state to the blackboard
    // to avoid errors at runtime.
    Set(new StateOne());
    Set(new StateTwo());
  }
}
```

## 📐 Generic Logic Blocks

In C#, a type is generic if it accepts type parameters or is nested (however deeply) inside a type that receives generic parameters. Logic Blocks **can** be generic, but there are a few limitations to be aware of. Notably:

- 🚫 ✨ Generic logic blocks can't be used with the introspection generator to automatically preallocate states, so you have to manually create state instances and add them to the blackboard, as shown above.

- 🚫 💾 Generic logic blocks are not serializable. The logic block serialization mechanisms are built on top of the Chickensoft [Serialization] system, which itself is built on the Chickensoft [Introspection] library. The [Introspection] system does not support generic types (by design), so neither does the Chickensoft Serialization system or Logic Blocks.

### 🤪 The Naive Approach

The `[LogicBlock]` attribute specifies the type to be used as the logic block's state and is read at build-time by the Logic Blocks Diagram Generator so it can resolve the state hierarchy for visualization purposes. The `[LogicBlock]` attribute is also used to find the state's type when [Introspection] is being used so that the logic block can look up derived states and their metadata at runtime to preallocate states.

:::danger
The following example results in a build error because `typeof` expressions inside an attribute are not allowed to _implicitly_ reference generic types.

```csharp
// Example: nesting a logic block in a generic type
public class MyGenericType<T> {
  [LogicBlock(typeof(State))] // <- Error CS0416
  public class MyLogicBlock : LogicBlock<MyLogicBlock.State> {
    public override Transition GetInitialState() => To<State>();
    public record State : StateLogic<State> {}
  }
}
```

```txt
ERROR: 'MyGenericType<T>.MyLogicBlock.State': an attribute argument cannot use type parameters (CS0416)
```

:::

Because the `State` type is nested inside a generic type, it is itself a generic type (per the C# language rules), even though it might not look like it. In reality, the actual fully qualified name of the `State` type is `MyGenericType<T>.MyLogicBlock.State`. When depicted with its fully qualified name, it is easy to see why the `State` type is secretly generic.

One alternative is to move the state outside the generic type, but this isn't always desirable since you won't have access to the generic types that the logic block is intended to work with.

### ✅ Generic Logic Block Fix

To declare a generic logic block, simply specify the state type as an _[open generic]_ type and ensure your logic block and its states do _not_ have the `[Meta]` attribute. The diagram generator (as of version 5.10.0) is smart enough to recognize open generic state types.

```csharp
public class MyGenericType<T> {
  // Fix: simply specify the state type as an open generic type
  [LogicBlock(typeof(MyGenericType<>.MyLogicBlock.State))]
  public class MyLogicBlock : LogicBlock<MyLogicBlock.State> {
    public override Transition GetInitialState() => To<State>();
    public record State : StateLogic<State> { }
  }
}
```

Since C# doesn't like secret generic types, you have to be very specific when specifying the state type in the `[LogicBlock]` attribute.

[Introspection]: https://github.com/chickensoft-games/Introspection
[Serialization]: https://github.com/chickensoft-games/Serialization
[open generic]: https://stackoverflow.com/a/2173115

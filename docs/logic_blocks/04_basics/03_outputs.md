---
title: 📤 Outputs
slug: outputs
image: ../header.jpg
---

**Outputs** are temporary, disposable objects that are produced by a state and immediately passed to each of the logic block's listeners and bindings.

An output is a state's way of indicating something of interest has happened without having to be tightly coupled to interested systems.

```csharp
partial class DimmableLightSwitch {
    public static class Output {
        public readonly record struct StatusChanged(bool IsOn);
    }
}
```

:::tip
By convention, outputs are shown stored in a simple static class called `Output` inside the logic block that owns them.
:::

Outputs are produced from inside a state by calling the `Output` method.

```csharp
public record PoweredOn : State {
  public PoweredOn() {
    this.OnEnter(() =>
      // Produce an output when we enter this state.
      Output(new Output.StatusChanged(IsOn: true))
    );
  }
}
```

Like inputs, outputs should be `readonly record struct` types.

### 🚒 Responding to Outputs

Whenever an output is produced, any bindings or logic block listeners will be invoked immediately. If you're using structs, this will keep outputs from ever hitting the heap — ensuring zero memory allocations occur.

```csharp
using var binding = lightSwitch.Bind();

// Monitor an output:
binding.Handle((in LightSwitch.Output.StatusChanged output) =>
  System.Console.WriteLine(
    $"Status changed to {(output.IsOn ? "on" : "off")}"
  )
);
```

## 🥊 Outputs vs Direct Manipulation

LogicBlocks provides two different mechanisms that states can use to mutate objects outside the state:

- call methods directly on blackboard objects

  ```csharp
  public Transition On(in Input.SomethingHappened input) {
    Get<MyRelatedService>().ChangeSomething(input.Value);

    return ToSelf();
  }
  ```

- produce outputs for objects that bind to the logic block

  ```csharp
  public Transition On(in Input.SomethingHappened input) {
    Output(new Output.ChangeSomething(input.Value));

    return ToSelf();
  }
  ```

You can use either mechanism depending on the situation.

If you're following the [enjoyable game architecture] guide, prefer calling methods to mutate services in the layer below the logic block (the non-visual game logic layer), and produce outputs to influence the view layer above you (game entity scripts, etc).

If you wish, you can restrict what operations are possible from a logic block by getting and setting blackboard objects by the type of the interface you wish to interact with them as.

```csharp
logic = new MyLogicBlock();

logic.Set(new MyRelatedService() as IMyRelatedService)
//  or, same as above:
logic.Set<IMyRelatedService>(new MyRelatedService())

// elsewhere, in your logic block state
  public Transition On(in Input.SomethingHappened input) {
    // must access by the type it was stored as
    var something = Get<IMyRelatedService>().GrabSomethingForMe();

    // ...

    return ToSelf();
  }
```

[enjoyable game architecture]: /blog/game-architecture

---
title: 📥 Inputs
slug: inputs
image: ../header.jpg
---

**Inputs** are temporary, disposable objects that contain relevant information about the input.

For example, a logic block for a dimmable light switch might have an input that contains the dimmer value as a percentage between `0` and `1`.

```csharp
partial class DimmableLightSwitch {
  public static class Input {
    public readonly record struct DimmerUpdated(double Value);
  }
}
```

:::tip
By convention, inputs are shown stored in a simple static class called `Input` inside the logic block that owns them. This organizational pattern groups inputs and allows consistent referencing: e.g., `DimmableLightSwitch.Input.DimmerUpdated`.

If that feels too verbose, you can always import the logic block statically with a `using static Project.DimmableLightSwitch;` statement and then reference the nested types directly: `Input.DimmerUpdated`.
:::

You'll primarily interact with a logic block by giving it an input whenever something interesting happens. Inputs are designed to be short lived, ephemeral objects that simply carry relevant data.

```csharp
var dimmableLightSwitch = new DimmableLightSwitch();

dimmableLightSwitch.Input(new DimmableLightSwitch.Input.DimmerUpdated(0.5d));
```

:::info
🚀 Using a `struct` for an input helps keep it on the stack. A logic block will only queue an input on the heap if an input is added while another input is still being processed. Even then, the way .NET collections tend to cache and resize themselves will typically prevent any memory allocations from happening at all! Plus, if LogicBlocks does need to queue inputs, it can do so without boxing them. 😊

Making an input a `record struct` allows us to take advantage of the [primary constructor syntax introduced for records][positional-records] in C# 10, ensuring the positional parameters are [converted to properties automatically][primary-constructors]. Using the primary constructor syntax drastically shortens the amount of code we need to write for each input type.

Lastly, we use the `readonly` modifier for our inputs to ensure that they can't be modified after they are created. This has the nice advantage of making our inputs immutable and allows us to take advantage of performance optimizations by passing inputs with the [`in` modifier introduced in C# 7][in-modifier].
:::

[positional-records]: https://devblogs.microsoft.com/dotnet/welcome-to-csharp-10/#record-structs
[primary-constructors]: https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/tutorials/primary-constructors#primary-constructors
[in-modifier]: https://devblogs.microsoft.com/premier-developer/the-in-modifier-and-the-readonly-structs-in-c/

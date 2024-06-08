---
title: 🪢 Bindings
slug: bindings
image: ../header.jpg
---

LogicBlocks provides a binding system that allows objects to listen to a particular logic block. Bindings allow you to observe inputs, outputs, errors, and state changes declaratively.

## 📥 Observing Inputs

```csharp
using var binding = logic.Bind();

binding.Watch((in MyLogicBlock.Input.SomeInput input) => {
  // Watch for a particular input.
});
```

## 📤 Observing Outputs

```csharp
using var binding = logic.Bind();

binding.Handle((in MyLogicBlock.Output.SomeOutput output) => {
  // Handle a particular output.
});
```

## 🔄 Observing State Changes

```csharp
using var binding = logic.Bind();

binding.When<MyLogicBlock.State.SomeState>(state => {
  // Respond to a state change. This is only called when changing from a state
  // that is not the type specified.
});
```

## 🚨 Observing Errors

```csharp
using var binding = logic.Bind();

binding.Catch<System.Exception>(e => {
  // Catch an error.
});
```

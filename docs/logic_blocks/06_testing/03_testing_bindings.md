---
title: 🪢 Testing Bindings
image: ../header.jpg
---

LogicBlocks allows you to create a fake binding for testing purposes.

Make sure to create an interface for each logic block you want to test so that your logic block can be mocked.

```csharp
public interface IMyLogicBlock : ILogicBlock<MyLogicBlock.State> { }

[Meta, LogicBlock(typeof(State))]
public partial class MyLogicBlock : LogicBlock<MyLogicBlock.State>, IMyLogicBlock {
  public record State : StateLogic<State> { ... }
}
```

## 🥸 Creating Fake Bindings

Fake bindings allow you to simulate adding inputs, producing outputs, adding errors, and making state changes.

```csharp
var logic = new Mock<MyLogicBlock>();

// CreateFakeBinding() is actually a static method on the logic block.
var binding = MyLogicBlock.CreateFakeBinding();

// Make our mock logic block return the fake binding.
logic.Setup(logic => logic.Bind()).Returns(binding);
```

Then, you can use the binding to simulate the logic block's behavior.

### 📥 Input Simulation

```csharp
var logic = new Mock<IMyLogicBlock>();

var binding = MyLogicBlock.CreateFakeBinding();

logic.Setup(logic => logic.Bind()).Returns(binding);

// Simulate an input with our fake binding.
binding.Input(new MyLogicBlock.Input.SomeInput());
```

### 📤 Output Simulation

```csharp
var logic = new Mock<IMyLogicBlock>();

var binding = MyLogicBlock.CreateFakeBinding();

logic.Setup(logic => logic.Bind()).Returns(binding);

// Simulate an input with our fake binding.
binding.Output(new MyLogicBlock.Output.SomeOutput());
```

### 🚨 Error Simulation

```csharp
var logic = new Mock<IMyLogicBlock>();

var binding = MyLogicBlock.CreateFakeBinding();

logic.Setup(logic => logic.Bind()).Returns(binding);

// Simulate an error with our fake binding.
binding.AddError(new InvalidOperationException());
```

### 🔄 State Change Simulation

```csharp
var logic = new Mock<IMyLogicBlock>();

var binding = MyLogicBlock.CreateFakeBinding();

logic.Setup(logic => logic.Bind()).Returns(binding);

// Simulate a state change with our fake binding.
binding.SetState(new MyLogicBlock.State.SomeOtherState());
```

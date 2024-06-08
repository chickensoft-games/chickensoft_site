---
title: 🔄 Testing States
image: ../header.jpg
---

Logic block states can easily be unit tested by themselves. To understand how to test a state, you need to know a little bit about its underlying context.

## 🕵️ Understanding the Context

Each logic block state has an internal `context` which wraps the logic block it is attached to.

Behind the scenes, calling the state's `Input`, `Output`, `Get`, and `AddError` methods will manipulate the context (and by extent the logic block). Attempting to call those state methods when not attached to a logic block results in the state throwing an exception regarding an "uninitialized context." This most commonly happens if you reference one of those methods in the state's constructor instead of in the relevant lifecycle callbacks, since the state is not attached at the time it is constructed.

## 🥸 Faking the Context

LogicBlocks allows you to create a fake context for testing purposes. The fake context has its own blackboard, and allows you to collect inputs, outputs, and errors added by the state.

```csharp
[Fact]
public void PlaysBeepingSoundOnEnter() {
  var state = new Timer.State.PoweredOn.Beeping();

  // Create a fake context for testing purposes.
  var context = state.CreateFakeContext();

  // Simulate the state being entered.
  state.Enter();

  // Verify that the state produced the outputs we expect.
  context.Outputs.ShouldBe([new Timer.Output.PlayBeepingSound()]);
}
```

You can also verify inputs and errors in the same way via `context.Inputs` and `context.Errors`.

Here's another example where we add a dependency to the fake context's blackboard. This allows us to swap the dependencies a state uses during testing.

```csharp
[Fact]
public void ChangesDuration() {
  var state = new Timer.State.PoweredOn.Idle();

  var context = state.CreateFakeContext();

  // Put a value on the blackboard for the state to use.
  context.Set(new Timer.Data() { Duration = 30.0d });

  var duration = 45;

  state.On(new Timer.Input.ChangeDuration(duration))
    .State
    .ShouldBeOfType<Timer.State.PoweredOn.Idle>();

  context.Get<Timer.Data>().Duration.ShouldBe(duration);
}
```

## 🚪 Testing Entrance and Exit

Entrance and exit callbacks can be invoked manually by calling `Enter()` and `Exit()` on the state.

```csharp
var context = state.CreateFakeContext();

// Simulate the state being entered.
state.Enter();

// Simulate the state being exited.
state.Exit();
```

Sometimes you only want to invoke entrance and exit callbacks that apply to a certain subsection of the state's type hierarchy to avoid simulating side effects (like outputs) outputted by its base classes.

To accomplish this, pass in a parent state type. The parent state and its ancestor callbacks will be ignored, allowing you to simulate just the substate callbacks that you care about.

```csharp
var state = new Timer.State.PoweredOn.Idle();

// If PoweredOn had entrance callbacks, they wouldn't be run. This only runs
// the entrance callbacks for Idle, if any.
state.Enter<Timer.State.PoweredOn>();
// Same as above, but for exiting.
state.Exit<Timer.State.PoweredOn>();
```

:::info
Passing in a parent state type is optional and usually only done when testing a state that's derived from another state that you have other unit tests for.
:::

## 👩‍❤️‍👨 Testing Attachment

You can easily invoke a state's attach and detach callbacks by calling `Attach()` and `Detach()` on the state.

```csharp
var state = new Timer.State.PoweredOn.Idle();

var context = state.CreateFakeContext();

// Simulate the state being attached to a logic block.
state.Attach();

// Simulate the state being detached from a logic block.
state.Detach();
```

---
title: ❌ Errors
slug: errors
image: ../header.jpg
---

Logic blocks are designed to be error-tolerant by default to reduce crashes in production. When an error occurs in an input handler, the logic block catches it internally to avoid halting execution.

You can easily override the default error handling behavior.

## 🚨 Customizing Error Handling

```csharp
[Meta, LogicBlock(typeof(State))]
public partial class MyLogicBlock : LogicBlock<MyLogicBlock.State> {
  ...

  protected override void HandleError(Exception e) {
    // Make this logic block crash on error.
    throw e;
  }
}
```

## 🚫 Adding Errors

You have two options for engaging the error handling mechanism:

- Throw an exception from an input handler. The `HandleError` method will be called, which does nothing by default unless you override it.

- Call `AddError(Exception e)` from your state. This method also invokes `HandleError` and works well for non-critical errors if you don't automatically throw in the `HandleError` method.

How you handle errors is up to you.

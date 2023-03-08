---
title: 🔋 PowerUps & Interfaces
image: docs/super_nodes/header.jpg
---

PowerUps can implement interfaces on behalf of a SuperNode.

Whenever a SuperNode applies a PowerUp, the SuperNode implements any interfaces that the PowerUp had also implemented.

```csharp
namespace ImplementedInterfaceExample;

using System.Diagnostics;
using Godot;
using SuperNodes.Types;

[SuperNode(typeof(MyPowerUp))]
public partial class MySuperNode : Node {
  public override partial void _Notification(int what);

  public void OnReady()
    => Debug.Assert(
      this is IMyPowerUp, "MySuperNode should implement IMyPowerUp"
    );
}

public interface IMyPowerUp { }

[PowerUp]
public class MyPowerUp : IMyPowerUp { }
```

At compile-time, SuperNodes will generate an implementation of `MySuperNode` with the contents of the PowerUp applied, including all of the interfaces that the PowerUp implements!

```csharp
// ImplementedInterfaceExample.MySuperNode_MyPowerUp.g.cs
#nullable enable
using Godot;
using SuperNodes.Types;

namespace ImplementedInterfaceExample {
  partial class MySuperNode : global::ImplementedInterfaceExample.IMyPowerUp
  {
  }
}
#nullable disable
```

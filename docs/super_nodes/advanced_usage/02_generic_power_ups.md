---
title: 🪫 Generic PowerUps
image: ../header.jpg
---

PowerUps support generic type parameters. Using PowerUps as generic mixins can allow you to implement patterns that would otherwise be difficult, painful, or impossible to implement without expensive runtime reflection.

## 🔌 Creating a Generic PowerUp

Creating a generic PowerUp is the same as creating a generic class:

```csharp
namespace GenericPowerUpExample;

using Godot;
using SuperNodes.Types;

[PowerUp]
public partial class MyPowerUp<T> : Node {
  public T Value { get; set; } = default!;

  public void OnMyPowerUp(int what) {
    if (what == NotificationReady) {
      if (Value is string) {
        GD.Print("You gave me a string!");
      }
      else if (Value is int) {
        GD.Print("You gave me an int!");
      }
      else {
        GD.Print("You gave me something else!");
      }
    }
  }
}
```

Any SuperNode that applies this PowerUp will gain a `Value` property of the type specified by `T`.

## ⚡️ Using a Generic PowerUp

To use a generic PowerUp, simply specify the type arguments when applying the PowerUp:

```csharp
namespace GenericPowerUpExample;

using Godot;
using SuperNodes.Types;

[SuperNode(typeof(MyPowerUp<string>))]
public partial class MySuperNode : Node {
  public override partial void _Notification(int what);

  public void OnReady() => System.Diagnostics.Debug.Assert(Value is not null);
}
```

## 👯 Type Substitution

At compile time, the SuperNodes generator will substitute the type parameters on the PowerUp with the type arguments given to it from the `[SuperNode]` attribute.

Here's the generated code for the example above:

<Details summary={<summary><code>GenericPowerUpExample.MySuperNode_MyPowerUp.g.cs</code></summary>}>

```csharp
#nullable enable
using Godot;
using SuperNodes.Types;

namespace GenericPowerUpExample {
  partial class MySuperNode
  {
    public string Value { get; set; } = default !; // <-- Type was changed!
    public void OnMyPowerUp(int what)
    {
      if (what == NotificationReady)
      {
        if (Value is string)
        {
          GD.Print("You gave me a string!");
        }
        else if (Value is int)
        {
          GD.Print("You gave me an int!");
        }
        else
        {
          GD.Print("You gave me something else!");
        }
      }
    }
  }
}
#nullable disable
```

</Details>

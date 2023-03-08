---
title: 🧬 Advanced Usage
sidebar_position: 3
image: /docs/super_nodes/header.jpg
---

In the [first section][super_nodes], we explained the basics of PowerUps and how to apply them to SuperNodes.

PowerUps have a number of features that allow you to enhance a node script in a way that would have only been possible previously with a source generator. PowerUps are, in a sense, a lightweight static [metaprogramming] tool.

## 🧰 When to Use PowerUps

Adding code freely to node scripts is big hammer to swing, so we recommend reserving PowerUps for systems that may apply across a large number of scripts. Things like serialization, dependency injection, logging, analytics, or integration with other components are all good candidates for PowerUps.

If you go crazy using PowerUps for game logic, you'll end up with a lot of generated code that's hard to read and debug. If you aren't sure if you should make something into a PowerUp, feel free to hop on over to the [Chickensoft Discord][discord] and ask for advice.

## 🪢 PowerUp Constraints

PowerUps can constrain the type of SuperNodes that they can be applied to by extending the least specific type that they can be applied to.

:::tip
Extending a base class in a PowerUp _constrains_ the usage of the PowerUp to SuperNodes that are subclasses (or subtypes) of the extended class.
:::

For example, if you want a PowerUp to be able to be applied to a `Node2D` (or any of its descendants), you can extend `Node2D` in your PowerUp class. SuperNodes that don't extend `Node2D` or any of its descendants will get a compile-time error if they try to apply the PowerUp.

```csharp
namespace PowerUpConstraints;

using Godot;
using SuperNodes.Types;

[SuperNode(typeof(MyPowerUp))]
public partial class MySuperNode : Node3D {
  public override partial void _Notification(int what);
}

[PowerUp]
public partial class MyPowerUp : Node2D { }
```

:::warning
Since `Node3D` is not an ancestor of `Node2D`, trying to build the code above results in a `SUPER_NODE_INVALID_POWER_UP` error.
:::

## 💎 Naming Conflicts

If you apply two PowerUps to a node that both declare the same member, you will get a compile time error.

```csharp
[SuperNode(typeof(PowerUpA), typeof(PowerUpB))]
public partial class MySuperNode : Node {
  public override partial void _Notification(int what);
  // ...
}

[PowerUp]
public partial class PowerUpA : Node {
  public string MyName { get; set; } = nameof(PowerUpA);
}

[PowerUp]
public partial class PowerUpB : Node {
  public string MyName { get; set; } = nameof(PowerUpB);
}
```

:::warning
The example above results in the following compiler error:

```md
The type 'ExampleNode' already contains a definition for 'MyName'
```

:::

The clever reader may recognize this as the classic "diamond problem" from [multiple inheritance][multiple-inheritance].

Fortunately, you can leverage C#'s [explicit interface implementation syntax][explicit-interface-implementations] to resolve naming conflicts between PowerUps.

```csharp
namespace NamingConflictWorkaround;

using Godot;
using SuperNodes.Types;

[SuperNode(typeof(PowerUpA), typeof(PowerUpB))]
public partial class MySuperNode : Node {
  public override partial void _Notification(int what);
}

public interface IPowerUpA {
  string MyName { get; }
}

[PowerUp]
public class PowerUpA : IPowerUpA {
  string IPowerUpA.MyName { get; } = nameof(PowerUpA);
}

public interface IPowerUpB {
  string MyName { get; }
}

[PowerUp]
public class PowerUpB : IPowerUpB {
  string IPowerUpB.MyName { get; } = nameof(PowerUpB);
}
```

In the next few sections, we'll explain more of the advanced capabilities of PowerUps, as well as provide information on how to take advantage of them in your project.

[super_nodes]: ../
[metaprogramming]: https://en.wikipedia.org/wiki/Metaprogramming
[multiple-inheritance]: https://en.wikipedia.org/wiki/Multiple_inheritance
[explicit-interface-implementations]: https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/interfaces/explicit-interface-implementation
[discord]: https://discord.gg/gSjaPgMmYW

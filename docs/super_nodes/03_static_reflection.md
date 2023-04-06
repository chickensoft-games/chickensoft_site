---
title: 🕵️ Static Reflection
image: ./header.jpg
---

At compile-time, SuperNodes will generate information about the properties and fields in a SuperNode script, as well as any properties or fields that have been added by PowerUps. These "static reflection" tables can be read by the SuperNode (or even an external assembly), allowing you to inspect the structure of a SuperNode at runtime _without_ using expensive C# reflection calls!

## 📊 Static Reflection Tables

Below is an example SuperNode with an applied PowerUp.

```csharp
namespace AdvancedReflection;

using System;
using Godot;
using SuperNodes.Types;

[SuperNode(typeof(MyPowerUp))]
public partial class MySuperNode : Node2D {
  public override partial void _Notification(int what);

  [Export(PropertyHint.Range, "0, 100")]
  public int Probability { get; set; } = 50;
}

[PowerUp]
public partial class MyPowerUp : Node2D {
  [Obsolete("MyName is obsolete — please use Identifier instead.")]
  public string MyName { get; set; } = nameof(MyPowerUp);

  public string Identifier { get; set; } = nameof(MyPowerUp);
}
```

The `MySuperNode` script has a property that it exports to the Godot editor, `Probability`. Because it also applies `MyPowerUp`, the SuperNode ends up gaining two additional properties: `MyName` and `Identifier`.

At compile-time, SuperNodes will [generate][generated] the following static reflection implementation for `MySuperNode`. The generated implementation includes the table of properties, their attributes, types, visibility, mutability information, and methods to get and set the values of those properties.

<Details summary={<summary><code>StaticReflectionExample.MySuperNode_Reflection.g.cs</code></summary>}>

```csharp
#nullable enable
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using Godot;
using SuperNodes.Types;

namespace StaticReflectionExample {
  partial class MySuperNode : ISuperNode {
    public ImmutableDictionary<string, ScriptPropertyOrField> PropertiesAndFields
      => ScriptPropertiesAndFields;

    public static ImmutableDictionary<string, ScriptPropertyOrField> ScriptPropertiesAndFields { get; }
      = new Dictionary<string, ScriptPropertyOrField>() {
      ["Identifier"] = new ScriptPropertyOrField(
        Name: "Identifier",
        Type: typeof(string),
        IsField: false,
        IsMutable: true,
        IsReadable: true,
        ImmutableDictionary<string, ImmutableArray<ScriptAttributeDescription>>.Empty
      ),
      ["MyName"] = new ScriptPropertyOrField(
        Name: "MyName",
        Type: typeof(string),
        IsField: false,
        IsMutable: true,
        IsReadable: true,
        new Dictionary<string, ImmutableArray<ScriptAttributeDescription>>() {
          ["global::System.ObsoleteAttribute"] = new ScriptAttributeDescription[] {
            new ScriptAttributeDescription(
              Name: "ObsoleteAttribute",
              Type: typeof(global::System.ObsoleteAttribute),
              ArgumentExpressions: new dynamic[] {
                "MyName is obsolete — please use Identifier instead.",
              }.ToImmutableArray()
            )
          }.ToImmutableArray()
        }.ToImmutableDictionary()
      ),
      ["Probability"] = new ScriptPropertyOrField(
        Name: "Probability",
        Type: typeof(int),
        IsField: false,
        IsMutable: true,
        IsReadable: true,
        new Dictionary<string, ImmutableArray<ScriptAttributeDescription>>() {
          ["global::Godot.ExportAttribute"] = new ScriptAttributeDescription[] {
            new ScriptAttributeDescription(
              Name: "ExportAttribute",
              Type: typeof(global::Godot.ExportAttribute),
              ArgumentExpressions: new dynamic[] {
                Godot.PropertyHint.Range, "0, 100",
              }.ToImmutableArray()
            )
          }.ToImmutableArray()
        }.ToImmutableDictionary()
      )
      }.ToImmutableDictionary();

    public TResult GetScriptPropertyOrFieldType<TResult>(
      string scriptProperty, ITypeReceiver<TResult> receiver
    ) => ReceiveScriptPropertyOrFieldType(scriptProperty, receiver);

    public static TResult ReceiveScriptPropertyOrFieldType<TResult>(
      string scriptProperty, ITypeReceiver<TResult> receiver
    ) {
      switch (scriptProperty) {
        case "Identifier":
          return receiver.Receive<string>();
        case "MyName":
          return receiver.Receive<string>();
        case "Probability":
          return receiver.Receive<int>();
        default:
          throw new System.ArgumentException(
            $"No field or property named '{scriptProperty}' was found on MySuperNode."
          );
      }
    }

    public dynamic GetScriptPropertyOrField(string scriptProperty) {
      switch (scriptProperty) {
        case "Identifier":
          return Identifier;
        case "MyName":
          return MyName;
        case "Probability":
          return Probability;
        default:
          throw new System.ArgumentException(
            $"No field or property named '{scriptProperty}' was found on MySuperNode."
          );
      }
    }

    public void SetScriptPropertyOrField(string scriptProperty, dynamic value) {
      switch (scriptProperty) {
        case "Identifier":
          Identifier = value;
          break;
        case "MyName":
          MyName = value;
          break;
        case "Probability":
          Probability = value;
          break;
        default:
          throw new System.ArgumentException(
            $"No field or property named '{scriptProperty}' was found on MySuperNode."
          );
      }
    }
  }
}
#nullable disable
```

</Details>

## 🎫 Available Information

That was a lot of generated code to look at all at once. Let's take a closer look at what's happening!

SuperNodes generates a static property on each SuperNode class called `ScriptPropertiesAndFields`. It also generates an instance member, `PropertiesAndFields` that just returns the value of `ScriptPropertiesAndFields`.

```csharp
    public ImmutableDictionary<string, ScriptPropertyOrField> PropertiesAndFields
      => ScriptPropertiesAndFields;

    public static ImmutableDictionary<string, ScriptPropertyOrField> ScriptPropertiesAndFields { get; }
      = new Dictionary<string, ScriptPropertyOrField>() {
```

:::tip
The `PropertiesAndFields` instance property makes it easier for outside objects classes to access static information about a particular instance's class.
:::

`ScriptPropertiesAndFields` is just a mapping of property and field names found in the SuperNode class (and any of its applied PowerUps) to a `ScriptPropertyOrField` object.

:::caution
The `SuperNodes.Types` package has to be included in each project that wants to use SuperNodes, as well as in any assemblies that want to leverage SuperNodes' static reflection capabilities. If the models were injected rather than shared in a package, each assembly would have its own copy of the models which would make cross-assembly static reflection more difficult.

See [installation][installation] for information about how to setup SuperNodes and its runtime types.
:::

The `ScriptPropertyOrField` model contains information about whether the member is a property or field, its mutability and readability, as well as a dictionary of attributes that are applied to the member.

Here's a closer look at the information provided about the `MyName` property from `MyPowerUp` that has an `[Obsolete]` attribute on it.

```csharp
// ...
public static ImmutableDictionary<string, ScriptPropertyOrField> ScriptPropertiesAndFields { get; }
  = new Dictionary<string, ScriptPropertyOrField>() {
  // ...
  ["MyName"] = new ScriptPropertyOrField(
    Name: "MyName",
    Type: typeof(string),
    IsField: false,
    IsMutable: true,
    IsReadable: true,
    new Dictionary<string, ImmutableArray<ScriptAttributeDescription>>() {
      ["global::System.ObsoleteAttribute"] = new ScriptAttributeDescription[] {
        new ScriptAttributeDescription(
          Name: "ObsoleteAttribute",
          Type: typeof(global::System.ObsoleteAttribute),
          ArgumentExpressions: new dynamic[] {
            "MyName is obsolete — please use Identifier instead.",
          }.ToImmutableArray()
        )
      }.ToImmutableArray()
    }.ToImmutableDictionary()
  ),
  // ...
```

The attributes dictionary is a map of the attribute's full type name to an array of attribute descriptions, since some attributes [allow multiples of the same type to be applied][multiple-attributes].

Similar to the `ScriptPropertyOrField` model, each `ScriptAttributeDescription` model contains information about the attribute's friendly name, type, and the arguments passed to the attribute's constructor. Since these arguments are C# constants, they are able to provided in an immutable, dynamic array.

:::info
If you aren't super familiar with dynamic types, you can read more about them [here][dynamic-types].
:::

## 🧐 Introspection

Using the generated reflection utilities, we can manipulate the properties and fields of a SuperNode anywhere in our codebase.

### 📜 SuperNode Introspection

Inside a script, you can access the `PropertiesAndFields` dictionary to get information about a particular property or field.

```csharp
[SuperNode(typeof(MyPowerUp))]
public partial class MySuperNode : Node2D {
  public override partial void _Notification(int what);

  [Export(PropertyHint.Range, "0, 100")]
  public int Probability { get; set; } = 50;

  public void OnReady() {
    foreach (var property in PropertiesAndFields.Keys) {
      GD.Print($"{property} = {GetScriptPropertyOrField(property)}");
    }
    // Change probability to 100
    SetScriptPropertyOrField("Probability", 100);
  }
}
```

### 🔋 PowerUp Introspection

Inside a PowerUp, you can also access the generated reflection tables _if_ (and only if) you declare stubs for them. You can mark the stubs with the `[PowerUpIgnore]` attribute to prevent them from being copied over into a SuperNode implementation and causing duplicate definition errors.

:::tip
The easiest way to declare stubs for the generated reflection tables is to mark your PowerUp class as `abstract`.
:::

```csharp
[PowerUp]
public abstract partial class MyPowerUp : Node2D {
  [Obsolete("MyName is obsolete — please use Identifier instead.")]
  public string MyName { get; set; } = nameof(MyPowerUp);

  public string Identifier { get; set; } = nameof(MyPowerUp);

  #region StaticReflectionStubs

  [PowerUpIgnore]
  public abstract ImmutableDictionary<string, ScriptPropertyOrField> PropertiesAndFields { get; }

  [PowerUpIgnore]
  public abstract dynamic GetScriptPropertyOrField(string name);

  [PowerUpIgnore]
  public abstract void SetScriptPropertyOrField(string name, dynamic value);

  #endregion StaticReflectionStubs

  [PowerUpIgnore]

  public void OnMyPowerUp(int what) {
    foreach (var property in PropertiesAndFields.Keys) {
      GD.Print($"{property} = {GetScriptPropertyOrField(property)}");
    }
    // Change identifier
    SetScriptPropertyOrField("Identifier", "AnotherIdentifier");
  }
}
```

### 📦 Cross-Assembly Introspection

If you're writing code in another assembly that wants to load code from an assembly that uses SuperNodes, you can access the publicly generated static reflection utilities the same as if you were inside the codebase.

```csharp
using AnAssemblyUsingSuperNodes;
using SuperNodes.Types;

public static void Main() {
  var mySuperNode = new MySuperNode();
  var properties = mySuperNode.PropertiesAndFields.Keys;

  // ...
}
```

:::tip
If you're importing multiple assemblies that use SuperNodes and want to store references to the `ScriptPropertyOrField` objects, you can include the `SuperNodes.Types` package in your project so that each assembly shares the same definition of the reflection models.
:::

[installation]: ./installation
[multiple-attributes]: https://learn.microsoft.com/en-us/dotnet/api/system.attributeusageattribute.allowmultiple
[dynamic-types]: https://learn.microsoft.com/en-us/dotnet/csharp/advanced-topics/interop/using-type-dynamic
[generated]: ./#-beneath-the-magic

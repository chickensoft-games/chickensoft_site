---
title: 🔬 Advanced Static Reflection
image: https://chickensoft.games/assets/images/header-bbf251851f04eefa5fd63323124240f2.jpg
---

SuperNodes can do some cool coding tricks. If you want to learn how to use them, you've come to the right place!

## 🗂 Accessing Type Information

You can easily access the normal `Type` information of a property or a field on a SuperNode by looking it up in the generated table.

```csharp
// ...
public void OnReady() {
  var myPropertyType = PropertiesAndFields("MyProperty").Type;
}
// ...
```

:::warning
Unfortunately, converting from a `Type` object to a generic type argument requires the use of reflection or code generation at runtime.

You cannot use a variable as a type argument in C#, as [types have to be resolved at compile-time][no-variables-as-type-arguments].

```csharp
public void OnReady() {
  var myPropertyType = PropertiesAndFields("MyProperty").Type;

  // doesn't work — can't use a variable as a type argument.
  myService.SomeMethod<myPropertyType>();
}
```

For more information, feel free to read about [reification] and [parametric polymorphism]. It might sound like a religion, but it's not. Although, if you talk to a programming language theorist, you wouldn't be entirely mistaken if you got the impression it was a cult.

:::

SuperNodes provides a mechanism to access the type information of a property or field as a generic type argument.

Let's pretend we are trying to make a SuperNode that will serialize all the properties and fields it contains. For the sake of example, we'll define a dummy serializer that looks like this:

```csharp
public interface ISerializer {
  bool Serialize<T>(T value);
  T Deserialize<T>(dynamic value);
}

// Stub implementation for example — build or use your own serializer!
public class MySerializer : ISerializer {
  public bool Serialize<T>(T value) => true;
  public T Deserialize<T>(dynamic value) => default!;
}
```

:::tip
Accessing the type of a property or field as a generic type argument at runtime can help when writing code that interfaces with — well, serializers, for example. Perhaps you will find it other uses for it!
:::

Next, we'll create a type receiver that calls our serializer's `Serialize` method. When we create it, we'll give it the serializer and the value to serialize.

The type receiver implements `ITypeReceiver.Receive<T>()`, an interface provided by `SuperNodes.Types` that allows us to receive the type of the property we're interested in as a type argument, rather than a `Type` object.

```csharp
public class MySerializerHelper : ITypeReceiver<bool> {
  public ISerializer Serializer { get; }
  public dynamic Value { get; }

  public MySerializerHelper(ISerializer serializer, dynamic value) {
    Serializer = serializer;
    Value = value;
  }

  public bool Receive<TSerialize>()
    => Serializer.Serialize<TSerialize>(Value);
}
```

:::note
Why do we have to make a class that implements an interface?

Unfortunately, [C# doesn't support anonymous functions (lambdas) with generic type parameters][no-generic-lambdas]. To work around this, we have to define a class that implements a generic method so that we can "receive" a type argument.
:::

Finally, we'll create a SuperNode that uses our type receiver when it calls the generated utility method `GetScriptPropertyOrFieldType`. To get the type of a property as a type argument, we pass the name of the property we want and an instance of our type receiver to `GetScriptPropertyOrFieldType`.

```csharp
namespace AccessingTypesExample;

using System;
using Godot;
using GoDotTest;
using SuperNodes.Types;

[SuperNode]
public partial class MySuperNode : Node {
  /// <summary>This property will be serialized!</summary>
  public string MyName { get; } = nameof(MySuperNode);

  public override partial void _Notification(int what);

  private readonly ISerializer _serializer = new MySerializer();

  public void OnReady() {
    foreach (var memberName in PropertiesAndFields.Keys) {
      var member = PropertiesAndFields[memberName];

      if (!member.IsReadable || member.IsField) { continue; }

      var value = GetScriptPropertyOrField(memberName);
      var serializerHelper = new MySerializerHelper(_serializer, value);
      var result = GetScriptPropertyOrFieldType(memberName, serializerHelper);
      if (!result) {
        throw new InvalidOperationException(
          $"Failed to serialize {memberName}."
        );
      }
    }
  }
}
```

In our `OnReady` method, we grab the names of all the properties and fields on ourselves and iterate over them.

Once we have a property name and value, we create an instance of our type receiver, the `MySerializerHelper` and invoke the `GetScriptPropertyOrFieldType` utility. The `GetScriptPropertyOrFieldType` utility will then invoke our type receiver's `Receive<T>()` method with the type of the property we've requested. In the type receiver, we use the property's generic type to invoke our serializer — and that's it!

## PowerUp ↔️ SuperNode Communication

PowerUps should not be designed in such a way that they need their own properties or fields to be initialized by the SuperNode they are applied to. Doing so would require the SuperNode to configure the members it gained from the PowerUp in its constructor or in another lifecycle method, which would defeat the purpose of the PowerUp adding functionality to the SuperNode with zero-configuration or knowledge on the SuperNode's part.

If you find yourself wanting to configure PowerUps outside the PowerUp, you can probably use [composition][composition-pattern] instead.

It is perfectly acceptable, however, to expose static properties on a PowerUp that configures its usage for every application of the PowerUp. For example, when your main scene loads, it can configure static properties on each PowerUp class that needs to be configured.

To reference a PowerUp's own static property inside its code, you must specifically reference the name of the static property via the PowerUp's class name. Additionally, you should remember to add `[PowerUpIgnore]` to the static property. If you don't, the static property will get copied over into any SuperNodes that applies the PowerUp.

```csharp
#pragma warning disable IDE0002
[PowerUp]
public partial class MyPowerUp : Node {
  [PowerUpIgnore]
  public static string NameToGreet { get; set; } = default!;

  public void OnMyPowerUp(int what) {
    if (what == NotificationReady) {
      GD.Print($"Hello, {MyPowerUp.NameToGreet}!");
    }
  }
}
#pragma warning restore IDE0002
```

:::tip
Disabling [`IDE0002`][IDE0002] above prevents .NET from suggesting that we simplify the reference `MyPowerUp.NameToGreet` to `NameToGreet`. In this particular case, we must fully resolve the name or else the SuperNodes generator will think we are referring to a static property on the SuperNode the PowerUp is applied to.
:::

## 🧮 Explicit Interface Implementations

It's worth mentioning that static reflection supports [explicit interface implementation syntax][explicit-interface-implementations].

Just for fun, here's an example of a generic PowerUp that explicitly implements an interface.

```csharp
namespace ExplicitInterfaceImplementationExample;

using Godot;
using SuperNodes.Types;

[SuperNode(typeof(MyPowerUp<int>))]
public partial class MySuperNode : Node {
  public override partial void _Notification(int what);

  public void OnReady() { }
}

[PowerUp]
public partial class MyPowerUp<T> : Node, IMyPowerUp<T> {
  T IMyPowerUp<T>.Value { get; } = default!;
}

public interface IMyPowerUp<T> {
  T Value { get; }
}
```

//! TODO: show how to show generated code

If we look at the generated code for MySuperNode, we'll see that the SuperNodes generator refers to the `Value` property as `IMyPowerUp<int>.Value`:

```csharp
public static ImmutableDictionary<string, ScriptPropertyOrField> ScriptPropertiesAndFields { get; }
  = new Dictionary<string, ScriptPropertyOrField>() {
  ["IMyPowerUp<int>.Value"] = new ScriptPropertyOrField(
    Name: "IMyPowerUp<int>.Value",
    Type: typeof(int),
    IsField: false,
    IsMutable: false,
    IsReadable: true,
    ImmutableDictionary<string, ImmutableArray<ScriptAttributeDescription>>.Empty
  )
  }.ToImmutableDictionary();
```

[no-variables-as-type-arguments]: https://stackoverflow.com/a/2107864
[reification]: https://en.wikipedia.org/wiki/Reification_(computer_science)
[parametric polymorphism]: https://en.wikipedia.org/wiki/Parametric_polymorphism
[no-generic-lambdas]: https://stackoverflow.com/a/2405060
[composition-pattern]: https://en.wikipedia.org/wiki/Composition_over_inheritance
[IDE0002]: https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/style-rules/ide0002
[explicit-interface-implementations]: https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/interfaces/explicit-interface-implementation

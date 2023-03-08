---
title: 🔮 SuperNodes
image: ./header.jpg
---

[SuperNodes] is a C# source generator that gives superpowers to Godot node scripts.

<FancyImage
  alt=""
  src="/img/chickensoft/super_nodes.svg"
  widthOverride="200px"
/>

## 🔮 Superpowers for C# Scripts

Many programming languages allow you to combine the contents of one class with another class using features such as [`mixins`][mixins], [`traits`][traits] or even [`templates`][templates] and [`macros`][macros].

C# has no such feature. 😢

<Details summary={
<summary>Wait! What about <i>Default Interface Implementations?</i></summary>
}>

You might be wondering about C#'s [default interface implementations][default-interfaces] feature. Unfortunately, default interface implementations cannot be used to add instance data to a class.

That is, you can't add fields to a class using default interface implementations (and by extent, you can't add property implementations since they use fields under-the-hood).

Here's what [Microsoft has to say about it][default-interfaces-instance-data]:

<Admonition type="caution">

Interfaces may not contain instance state. While static fields are now permitted, instance fields are not permitted in interfaces. Instance auto-properties are not supported in interfaces, as they would implicitly declare a hidden field.

</Admonition>
</Details>

To make up for these shortcomings in C#, the SuperNodes generator allows you to turn an ordinary Godot script and turn it into a `SuperNode` by applying a `[SuperNode]` attribute on it. Turning a node into a SuperNode allows you to:

- ✅ Apply PowerUps (essentially mixins for C#) to your node scripts.
- ✅ Use third-party source generators alongside Godot's official source generators.
- ✅ Get and set the value of script properties and fields at runtime, without using reflection.
- ✅ Examine the attributes and types of script properties and fields at runtime, without using reflection.
- ✅ Inspect SuperNodes across assemblies using the shared runtime types.

Making a PowerUp is also easy: just mark another script class with a `[PowerUp]` attribute and then apply that PowerUp to a SuperNode.

```csharp
namespace SimpleExample;

using Godot;
using SuperNodes.Types;

[SuperNode(typeof(ExamplePowerUp))]
public partial class ExampleNode : Node {
  public override partial void _Notification(int what);

  public void OnReady() => SomeMethod();

  public void OnProcess(double delta) => SomeMethod();

  public void SomeMethod() {
    var d = GetProcessDeltaTime();
    if (LastNotification == NotificationReady) {
      GD.Print("We were getting ready.");
    }
    else if (LastNotification == NotificationProcess) {
      GD.Print("We were processing a frame.");
    }
  }
}

// A PowerUp that logs some of the main lifecycle events of a node.
[PowerUp]
public partial class ExamplePowerUp : Node {
  public long LastNotification { get; private set; }

  public void OnExamplePowerUp(int what) {
    switch ((long)what) {
      case NotificationReady:
        GD.Print("PowerUp is ready!");
        break;
      case NotificationEnterTree:
        GD.Print("I'm in the tree!");
        break;
      case NotificationExitTree:
        GD.Print("I'm out of the tree!");
        break;
      default:
        break;
    }
    LastNotification = what;
  }
}
```

The script above defines a SuperNode named `ExampleNode` that applies the PowerUp called `ExamplePowerUp`.

The `ExamplePowerUp` tracks the last lifecycle event that has occurred in the node, allowing the `ExampleNode` to access the PowerUp's `LastNotification` property as if it were its own, even though `ExampleNode` didn't declare such a property.

Because of the magic of source generators, there are no syntax errors. Everything compiles correctly and with static typing support!

## 🔘 SuperNodes

We'll break the example above into a few smaller pieces to explain what's happening.

```csharp
[SuperNode(typeof(ExamplePowerUp))]
```

The `[SuperNode]` attribute can be given a list of parameters. Each parameter can specify a PowerUp or a string that represents a lifecycle method hook (more on those later). PowerUps are specified by passing the type of the PowerUp class, so we use `typeof` to identify the type of the `ExamplePowerUp`. It's fast, easy, and **works at compile-time**!

```csharp
public partial class ExampleNode : Node {
```

You probably recognize this from writing C# scripts in Godot. It's just an ordinary Godot script class!

```csharp
  public override partial void _Notification(int what);
```

Unfortunately, all `[SuperNode]` scripts have to include this extremely verbose partial method signature.

:::caution
If you forget to add the `public override partial void _Notification(int what);` to your SuperNode script, you'll get a nice little message from the SuperNodes generator reminding you to do just that with the correct method signature (because we all know you probably don't want to memorize that).
:::

For SuperNodes to work, it has to be able to generate an implementation for Godot's `_Notification` method. Implementing the lifecycle method allows SuperNodes to invoke PowerUps and lifecycle hooks in response to any lifecycle event that occurs in a Godot node.

:::caution
If you need your script to also implement `_Notification`, just declare a method with the signature `public void OnNotification(int what)` and SuperNodes will make sure it's called whenever `_Notification` is called.
:::

You may have noticed that instead of overriding `_Ready` and `_Process`, the SuperNode uses methods named `OnReady` and `OnProcess` that have otherwise identical signatures to their Godot counterparts. The SuperNodes generator will look inside SuperNodes for methods named `On{LifecycleHandler}` for each Godot lifecycle notification (there are quite a few) and call the handler with the same name, prefixed with the word `On`.

```csharp
public partial class ExampleNode : Node {
  public override partial void _Notification(int what);

  public void OnReady() => SomeMethod();

  public void OnProcess(double delta) => SomeMethod();
```

## 🔋 PowerUps

The PowerUp in the example above is also just an ordinary script class that extends a Godot node. The only new piece appears to be the `[PowerUp]` attribute, but there's actually something hiding here.

```csharp
[PowerUp]
public partial class ExamplePowerUp : Node {
  public long LastNotification { get; private set; }

  public void OnExamplePowerUp(int what) {
    switch ((long)what) {
      case NotificationReady:
        GD.Print("PowerUp is ready!");
        break;

        // ...
```

When making PowerUps, SuperNodes will check to see if the PowerUp declares a method with the name `On{PowerUpName}`.

In this case, there is a `OnExamplePowerUp(int what)` method that receives a Godot notification identifier integer. SuperNodes will call the `OnExamplePowerUp` method from its generated `_Notification` handler whenever a Godot event occurs, allowing the PowerUp to perform actions in response to the events of whatever SuperNode it is applied to.

:::info
From now on, we'll refer to the `On{PowerUpName}` method as the `OnPowerUp` method when talking about PowerUps.
:::

PowerUps can add any kind of additional instance data (fields, properties, events, static members, etc) to a C# Godot script, bypassing the limitations of default interface implementations. But that's not all. PowerUps can also:

- ✅ Add instance data, methods, and event implementations to SuperNodes.
- ✅ Implement interfaces on SuperNodes.
- ✅ Receive type parameters (generic PowerUps)!
- ✅ Implement generic interfaces on SuperNodes.
- ✅ Inspect and manipulate all the properties and fields of a SuperNode, including the properties and fields that come from other PowerUps.

We'll discuss how to take advantage of these features in your projects in the documentation that follows this article.

## 🪄 Beneath the Magic

SuperNodes will generate several implementation files for `ExampleNode` so that it can be magically enhanced.

:::tip
To show generated files, you can add the following to your `.csproj` file:

```xml
<PropertyGroup>
  <EmitCompilerGeneratedFiles>true</EmitCompilerGeneratedFiles>
  <CompilerGeneratedFilesOutputPath>.generated</CompilerGeneratedFilesOutputPath>
</PropertyGroup>
```

:::

Here's what's in the main implementation file that contains the `_Notification` method:

<Details summary={<summary><code>SimpleExample.ExampleNode.g.cs</code></summary>}>

```csharp
#nullable enable
using Godot;
using SuperNodes.Types;

namespace SimpleExample {
  partial class ExampleNode {
    public override partial void _Notification(int what) {
      // Invoke declared lifecycle method handlers.
      OnExamplePowerUp(what);

      // Invoke any notification handlers declared in the script.
      switch ((long)what) {
        case NotificationReady:
          OnReady();
          break;
        case NotificationProcess:
          OnProcess(GetProcessDeltaTime());
          break;
        default:
          break;
      }
    }
  }
}
#nullable disable
```

</Details>

The generated `_Notification` implementation allows the SuperNode to track the lifecycle events that occur and dispatch them to your script's lifecycle method handlers, as well as to any `OnPowerUp` methods declared in the applied PowerUps.

SuperNodes only generates `switch/case` statements for the lifecycle handlers present in your script — it doesn't generate a `case` for every single Godot notification identifier. If you don't declare an `OnReady` method, the `switch/case` statement won't have a `case` for `NotificationReady`, reducing the number of jump instructions in the final binary.

We've barely scratched the surface of showing what's possible with SuperNodes and PowerUps. If you're having fun, keep reading to learn more!

[SuperNodes]: https://github.com/chickensoft-games/SuperNodes
[mixins]: https://en.wikipedia.org/wiki/Mixin
[traits]: https://en.wikipedia.org/wiki/Trait_(computer_programming)
[templates]: https://en.wikipedia.org/wiki/Template_(C++)
[macros]: https://en.wikipedia.org/wiki/Macro_(computer_science)
[default-interfaces]: https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/proposals/csharp-8.0/default-interface-methods
[default-interfaces-instance-data]: https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/proposals/csharp-8.0/default-interface-methods#detailed-design

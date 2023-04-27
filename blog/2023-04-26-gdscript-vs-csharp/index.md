---
title: 'GDScript vs C# in Godot 4'
description: Deep-dive into the advantages and disadvantages of GDScript and C#, as well as tips on how to choose one — or use them both!
image: ./header.jpg
slug: gdscript-vs-csharp
keywords:
  - Godot
  - game engine
  - GDScript
  - C#
  - programming language
  - game development
  - indie game development
  - scripting
  - performance optimization
  - syntax comparison
  - cross-platform
  - community support
  - tutorials
  - comparison
  - pros and cons
  - game engine features
  - 2D game development
  - 3D game development
  - game development tips
  - game design
  - game programming
  - game publishing
authors: [joanna]
---

<FancyImage src={require("./header.jpg").default} alt="Godot allows you to use two incredible languages to build games, right out of the box. But how do you know which one to use?" />

Almost every day, someone asks "Should I use GDScript or C# to make my Godot game?"

A lot of amazing advice has been given out on the Godot Reddit, the forums, various Discord servers, and just about anywhere people are talking about Godot — so let's write it up, once and for all!

<!-- truncate -->

In this article, we’ll take a deep dive into the advantages and disadvantages of GDScript and C# in Godot 4.x, as well as tips on how to choose one — or use them both!

:::info
In case you don't have time to read all this, here's why you might pick GDScript:

- ✅ You're new to coding or you're a casual hobbyist.
- ✅ You're an expert who doesn't mind dynamic types.
- ✅ You want seamless engine integration and native extension support.
- ✅ Performance isn't a major concern (it usually isn't for game scripts).
- ✅ No fighting with tooling. Write your code inside the engine itself!

On the other hand, here's some reasons why you might choose C#:

- ✅ You have experience with managed languages such as Java, Go, or Dart.
- ✅ You already know C#, perhaps from using Unity previously or writing enterprise applications.
- ✅ You prefer static typing.
- ✅ You prefer curly braces over whitespace-delimited syntax.
- ✅ You need access to mature developer tooling: linting, custom analyzers, and source generation.
- ✅ You want additional performance without resorting to a systems language.
- ✅ You need access to the vast library of .NET packages.
- ❌ You don't need to publish to Android or iOS. Currently, C# support is lagging behind GDScript in Godot 4.x for mobile platforms. You can [track the progress here][csharp-mobile].
- ❌ You don't need to integrate with any GDExtensions. Currently, Godot does not generate C# bindings for GDExtensions, meaning you cannot call a GDExtension from C#. You can work around this by calling into GDScript from C# if you are willing to incur the performance penalty.
- ❌ You don't need to create custom [resources][godot-resources] with C# (there's a [pull request][csharp-resources] for it open, but it hasn't made it in).
:::

## 🤖 GDScript

As you likely know, Godot provides its own high-level, dynamically typed programming language called GDScript. While GDScript often gets compared to Python, I find the syntax to be even friendlier, with [optional type hints][gdscript-type-hints] that are also reminiscent of TypeScript or Swift.

<FancyImage src={require("./gdscript.jpg").default} alt="GDScript code inside the Godot Engine editor.">
The Godot Engine will provide this script as a starting point for all <code>CharacterBody3D</code> nodes.
</FancyImage>

For quick prototypes and experiments, I will often just throw together a quick script using GDScript (or hack away on someone else's) until I get what I want. In almost every case, it is simply easier and faster to use GDScript.

If you happen to be handy with C++ or Rust, you can create a [GDExtension][gdextension] for just about anything you can't do in GDScript (or that would be too slow to do in GDScript). Godot will generate bindings for extensions, allowing you to call your extension code from GDScript with no additional work. Pretty magical!

To sweeten the deal further, [Godot 4 has drastically improved GDScript][gdscript-whats-new]: it's [considerably faster][gdscript-performance], can [handle circular/cyclic dependencies][gdscript-cyclic-dependencies], and supports [lambda functions][gdscript-lambdas]. On top of all that, just about every tutorial or video you watch regarding Godot uses GDScript.

If you're not sold yet, there probably isn't anything else I can say to get you to use it.

### ☀️ GDScript Pros

- 🚀 Incredibly easy to learn and well supported.
- 🤝 Many large, friendly communities that provide hands-on support.
- 📚 Tons of tutorials and videos.
- 🥳 Supports every platform Godot supports.
- ✨ Always up-to-date with the latest Godot features.
- 🔌 Perfect native extension integration.
- 🪛 Tooling support — you can write GDScript directly inside the Godot Engine's editor, or use the [official VSCode extension][gdscript-vscode]. You can even get a [VSCode extension for formatting][gdscript-formatter] your GDScript files, too.

### 🌧 GDScript Cons

So what's the catch with GDScript? Not much, really, but I'll list a few considerations to be aware of here:

- 💨 Not necessarily as performant as C#. There is a performance penalty when calling into the Godot engine from C# due to marshalling, but C# itself tends to execute considerably faster than GDScript.
- 🔒 Any code written in GDScript is completely specific to the Godot engine. This is usually not a problem for game scripts (since they are not very portable by nature), but it's worth mentioning.
- ⬜️ Whitespace-delimited syntax. If you can't stand Python or just strongly prefer curly braces, no amount of GDScript will ever soothe your soul. Likewise, if you love whitespace-delimited syntax, you'll feel right at home.
- ⚡️ Not statically typed. While you can specify type hints to help with error-checking, they are optional at best. For some, this is an advantage. For others, the lack of enforced static typing presents a headache.

For the majority of game developers I've spoken to, none of those are typically deal-breakers. GDScript has a cult following for a reason: it's *really*, *really* great. Now that you know its strengths and weaknesses, you can feel confident choosing it.

Still not convinced? Let's talk about C#.

## #️⃣ C\#

While not as popular as GDScript, [C# support in Godot has come a long ways][csharp-whats-new]. Out of the approximately 5,000 surveyed users, [only about 13%][godot-2022-poll] said they were using C# to build Godot games.

<FancyImage src={require("./csharp.jpg").default} alt="C# script for a Godot node.">
C# code for an editor tool that helps visualize a <code>RayCast3D</code>.
</FancyImage>

### 🌧 C# Cons

Before we get too far, it's worth reiterating a couple of points:

- ❌ Godot can't export C# games for iOS or Android.
- ❌ You cannot call GDExtensions directly from C#.
- ❌ You can't create custom [resources][godot-resources] with C# (there's a [pull request][csharp-resources] for it open, but it hasn't made it in).

If either of those are an immediate must-have for your project, you should **not** use C#. Unless you are optimistic and believe those shortcomings will be addressed by the time your project requires them, you should use GDScript or a third party language integration instead.

:::info
C# is incredibly powerful and allows you to tap into the massive .NET ecosystem of packages and tools, but it comes at a cost. If you're up for an adventure, don't mind a challenge, and can live with the drawbacks mentioned above, C# might be an excellent fit for your project.
:::

### ☀️ C# Pros

Because C# is a general-purpose programming language that first appeared 23 years ago, it is hard to fully extol its virtues. In the interest of time, I'll list a few positives within the context of Godot game development:

- 🚀 C# is a well-established language with the full weight of Microsoft behind it. If you've ever used Java or Dart, you'll also feel right at home.
- 🛠 Incredible tooling support. Want to create a custom analyzer with an automatic fix? A source generator? A template project? You can do that.
- 🧑‍💻 Choice of IDE's: You can use [Visual Studio][vs], [JetBrains Rider][rider], or [Visual Studio Code][vscode].
- 📦 The entire .NET package ecosystem. If there's a nuget package that solves your problem, you can probably use it.
- 🤝 There's an extremely helpful C# channel in the official [Godot Discord][godot-discord].
- 🐤 We have a Chickensoft Discord server dedicated to supporting the Godot C# community. If you run into questions or just want to talk, feel free to stop by and say hello!

<BlogDiscordInvite />

### 🎟 Free Stuff

While there aren't many Godot addons created with C#, [Chickensoft] provides a number of well-tested packages to help you get started. Each project began as a piece of my own personal game project before being broken into separate packages to share with the community. Each project is fully tested and has 100% code coverage (for my own peace of mind).

Want to quickly create a Godot game with basic CI/CD and unit testing already setup? Use our [`dotnet new` template][godot-game] for creating a game. We have [a package template][godot-package] for creating nuget packages for use with Godot, too.

Need to inject code into lifecycle methods in your scripts automatically? We have a [source generator][super-nodes] for that. How about automatic, [node-based dependency injection][auto-inject]?

We even have our own command line tool, [Chicken][chicken], that will automatically manage Godot addons for your project based on an `addons.json` file and let you symlink addons locally while they're in development. No more git submodules for addons!

<FancyImage src={require("./packages.jpg").default} alt="Chickensoft's package offerings">
Chickensoft's package offerings as of April 2023.
</FancyImage>

If you'd like to use Godot from a GitHub actions workflow, you can use [setup-godot] to run Godot directly on a macOS, Windows, or Linux runner.

We also have packages for [running tests inside Godot][go-dot-test], creating basic [state machines][go-dot-net] in C#, [logging][go-dot-log], and a handful of other things.

:::tip
Chickensoft is an open source organization — all of our offerings are *free*. We welcome contributions and feedback from the community!
:::

## 🎁 Wrapping Up

Even though Chickensoft is dedicated to the C# Godot community, C# isn't necessarily the correct choice for every Godot game. For most people, GDScript is probably the best choice.

I like to think that if you need (or want) to use C#, you already know that deep down inside.

Ultimately, if you decide to embark on an adventure and use C# for your next Godot game, we're happy to lend a hand and cheer you on in the [Chickensoft Discord][discord]. Either way, we wish you the best of luck and we hope to hear from you! 😀

:::info
If you're interested in what I'm up to, you are more than welcome to [follow me on Mastodon][mastodon] or [reach out to me on Discord][discord-personal].
:::

[gdscript-lambdas]: https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_basics.html#lambda-functions
[gdextension]: https://docs.godotengine.org/en/stable/tutorials/scripting/gdextension/what_is_gdextension.html
[csharp-mobile]: https://github.com/godotengine/godot/issues/68153#issuecomment-1299672279
[gdscript-type-hints]: https://godotengine.org/article/gdscript-progress-report-feature-complete-40/#typed-arrays
[gdscript-whats-new]: https://gdscript.com/articles/godot-4-gdscript/
[gdscript-performance]: https://godotengine.org/article/gdscript-progress-report-typed-instructions/#how-faster-is-it
[gdscript-cyclic-dependencies]: https://godotengine.org/article/dev-snapshot-godot-4-0-beta-6/
[gdscript-vscode]: https://marketplace.visualstudio.com/items?itemName=geequlim.godot-tools
[gdscript-formatter]: https://marketplace.visualstudio.com/items?itemName=Razoric.gdscript-toolkit-formatter
[godot-2022-poll]: https://docs.google.com/forms/d/e/1FAIpQLSe-OIpxXqou9cDnPXEAjxzpICbf8_YZB3jUizdECXRydtB8cA/viewanalytics
[csharp-whats-new]: https://godotengine.org/article/whats-new-in-csharp-for-godot-4-0/
[godot-resources]: https://docs.godotengine.org/en/stable/tutorials/scripting/resources.html
[csharp-resources]: https://github.com/godotengine/godot/pull/72619
[godot-discord]: https://discord.gg/4JBkykG
[discord]: https://discord.gg/gSjaPgMmYW
[Chickensoft]: /
[godot-game]: https://github.com/chickensoft-games/GodotGame
[godot-package]: https://github.com/chickensoft-games/GodotPackage
[super-nodes]: https://github.com/chickensoft-games/SuperNodes
[auto-inject]: https://github.com/chickensoft-games/AutoInject
[setup-godot]: https://github.com/chickensoft-games/setup-godot
[go-dot-test]: https://github.com/chickensoft-games/GoDotTest
[go-dot-net]: https://github.com/chickensoft-games/GoDotNet
[go-dot-log]: https://github.com/chickensoft-games/GoDotLog
[Chicken]: https://github.com/chickensoft-games/Chicken
[mastodon]: https://mastodon.online/@jolexxa
[discord-personal]: https://discordapp.com/users/jolexxa#4292
[vs]: https://visualstudio.microsoft.com/
[rider]: https://www.jetbrains.com/rider/
[vscode]: https://code.visualstudio.com/

---
title: 'Using Godot with C# in 2024'
description: |
  C# support in Godot has come a long way since its inception. Now that it's 2024, let's dive in and see what it's like.
slug: godot-csharp-2024
keywords:
  - Godot
  - C#
  - 2024
  - game design
  - game engine
  - Unity
  - indie game development
  - open source
  - foss
  - programming language
  - game development
  - scripting
  - performance optimization
  - syntax comparison
  - cross-platform
  - community support
  - tutorials
  - game engine features
  - 2D game development
  - 3D game development
  - game development tips
  - game programming
  - game publishing
  - software architecture
  - architecture
authors: [joanna]
---

<FancyImage src={require("./header.jpg").default} alt="2024 written with balloon letters against a backdrop of fireworks and confetti, with the title 'Using Godot with C# in 2024'." />

About a year and a half ago, starting a project with Godot and C# was a brave choice. There's always been a C# channel in the main Godot Discord server, but information and tutorials (let alone demos) were all but non-existent.

Now that it's 2024, let's take a look and see how far we've come.

<!-- truncate -->

## 🥳 A LOT has happened

Throughout 2023, a a lot of things happened in the game development world. A lot of these changes were big news for game developers using C#, too:

- [Godot 4][godot4] was released!
- [Unity did things][can-godot-deliver] that game developers didn't like.
- Godot's [C# integration was completely overhauled][mono-to-net] and ported over from Mono to the .NET SDK.
- [Experimental iOS and Android mobile platform support for C# Godot games][csharp-mobile] shipped in Godot 4.2.
- The [Godot Forums][godot-forums] came back in style.
- W4 Games, the company created by some of the Godot founders, [raised another $15 million][w4].
- The Godot Fund is now bringing in [over $60,000/month][godot-fund]!

:::tip
Not sure you want to use C#? Check out our blog about [GDScript vs C# in Godot 4][gdscript-vs-csharp].
:::

Besides Godot's increased financial support and broader endorsements from established organizations, the Godot C# community itself continues to thrive. We've even observed a new baseline level of user activity on the Chickensoft website, beginning right about the time that Unity was introducing an installation fee.

## 🎮 A Complete Game Demo

Late in 2023, we released an open source, fully-tested 3D platformer game demo built with Godot and C# using the awesome [GDQuest] assets. We'll be maintaining the demo over the next year, too, keeping it up-to-date and cleaning it up as we learn new things.

<Spacer><GithubCard profile='chickensoft-games' repo='GameDemo' logo='/img/chickensoft/game_demo.png'/></Spacer>

[Gamefromscratch] covered our game demo, too — check it out below!

<Spacer><YoutubeEmbed embedUrl="https://www.youtube.com/embed/rQyEu1pkcTk?si=YaJ7fRPHgHyZnUe3" /></Spacer>

If you want to know more about it, feel free to read our recent [treatise on game architecture][game-arch] — it breaks the demo down and goes into painstaking detail about the technical decisions that went into it. But, bring your reading glasses — it's a _long_ read.

Speaking of Godot game architecture with C#, there's now also the [Godot Architecture Organization Advice][godot-arch-advice] repository — go check it out and give it a star, too!

<FancyImage src={require("../2023-12-01-game-architecture/images/separating_game_logic.png").default} alt="Separating game logic from visualization.">
This, and many other diagrams await you in our <a href="http://chickensoft.games/blog/game-architecture">long-winded blog about game architecture.</a>
</FancyImage>

## 🛠 The Power to Make Games

Chickensoft is now home to 14 open source packages designed to solve common problems you might run into if you're using Godot with C#:

- [GodotEnv]: Automate and standardize Godot installation, version switching, and addon management on macOS, Linux, and Windows.
- [GoDotTest]: Run and debug automated tests locally or from the command-line for CI/CD purposes.
- [setup-godot]: Install and run Godot on macOS, Linux, and Windows GitHub runners with support for Godot export templates.
- [LogicBlocks]: Easy-to-use, hierarchical state machines for games. It even generate state diagrams of your code for you, too.
- [AutoInject]: Tree-based dependency injection that lets you easily scope dependencies to specific Godot scene subtrees.
- [GodotGame]: Template for quickly spinning up a C# game with the Chickensoft best practices already applied.
- ...and more, all easily reachable from our [homepage][chickensoft].

## 🏆 Fun Highlights from 2023

### 🎨 TerraBrush

[TerraBrush] is a Godot map editor addon written in C# by [spimort], and it features a number of incredible map-editing capabilities. Be sure to give it a star and try it out in your next 3D project!

<FancyImage src="https://github.com/spimort/TerraBrush/raw/main/preview.gif?raw=true" alt="The TerraBrush map editor being used inside the Godot game engine.">
<a href="hhttps://github.com/spimort/TerraBrush">TerraBrush</a> is a recently released map editor addon for Godot built in C#.
</FancyImage>

### 🍰 Layer Generator

[Anton] released [GodotLayersSourceGenerator], a generator that will produce mappings of your collision layer names. He also updated [BinaryBundle], a C# serialization generator for use with netcode.

:::tip
If you are looking for more C# generators, take a look at the [GodotSharp.SourceGenerators] project: it has generators for the scene tree, input mappings, and a ton of other stuff.
:::

### 📺 Arbitrary Color Reduction and Palette Ordered Dithering

If you're looking to make your game a little more retro, check out Mark's [Arbitrary Color Reduction and Palette Ordered Dithering][dither] shader that was released recently. Here's a video of it applied to a pseudo-isometric 3D scene:

<ReactPlayer width="100%" playing={true} loop={true} controls={true} url="/media/dither.mp4" />

### 🌉 Unidot Importer

Looking to bring assets over from Unity? You can now do that easily with the [Unidot Importer][unidot] — it will automatically convert your `.unitypackage` assets into Godot `.tscn` scene files!

<FancyImage src="https://github.com/V-Sekai/unidot_importer/raw/main/unidot_example.jpg" alt="Unidot importing a Unity asset package into Godot." />

## 🐤 An Open Source Community

If you're using Godot with C#, or interested in doing so, you are no longer alone! Many of us are actively working on creating a better game development future with Godot and C# by sharing tools, documentation, and games we create. We'd love to see you, too!

:::note
Chickensoft is a grassroots community and open source organization dedicated to furthering the use of Godot with C#. We're excited to have a community of over a 1,000 members now, and folks have graciously contributed a number of bugfixes and features to our open source packages over the last year. Come say hi!
:::

<Spacer><BlogDiscordInvite /></Spacer>

[GDQuest]: https://www.gdquest.com/
[game-arch]: /blog/game-architecture
[gdscript-vs-csharp]: /blog/gdscript-vs-csharp/
[can-godot-deliver]: /blog/can-godot-deliver/
[godot-arch-advice]: https://github.com/abmarnie/godot-architecture-organization-advice
[Gamefromscratch]: https://www.youtube.com/watch?v=rQyEu1pkcTk
[godot4]: https://godotengine.org/article/godot-4-0-sets-sail/
[w4]: https://w4games.com/2023/12/07/w4-games-raises-15m-to-drive-video-game-development-inflection-with-godot-engine/
[csharp-mobile]: https://godotengine.org/article/godot-4-2-arrives-in-style/#c--net
[godot-forums]: https://godotengine.org/article/introducing-new-forum/
[mono-to-net]: https://godotengine.org/article/whats-new-in-csharp-for-godot-4-0/
[godot-fund]: https://fund.godotengine.org/
[GodotEnv]: https://github.com/chickensoft-games/GodotEnv
[GoDotTest]: https://github.com/chickensoft-games/GoDotTest
[setup-godot]: https://github.com/chickensoft-games/setup-godot
[LogicBlocks]: https://github.com/chickensoft-games/LogicBlocks
[AutoInject]: https://github.com/chickensoft-games/AutoInject
[GodotGame]: https://github.com/chickensoft-games/GodotGame
[spimort]: https://twitter.com/spimortdev
[TerraBrush]: https://github.com/spimort/TerraBrush
[Anton]: https://anton.bergaker.com/
[GodotLayersSourceGenerator]: https://github.com/AntonBergaker/GodotLayersSourceGenerator
[GodotSharp.SourceGenerators]: https://github.com/Cat-Lips/GodotSharp.SourceGenerators
[BinaryBundle]: https://github.com/AntonBergaker/BinaryBundle
[dither]: https://godotshaders.com/shader/arbitrary-color-reduction-ordered-dithering/
[unidot]: https://github.com/V-Sekai/unidot_importer
[chickensoft]: https://chickensoft.games

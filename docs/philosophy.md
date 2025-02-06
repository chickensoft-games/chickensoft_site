---
title: 🏛️ Philosophy
description: Our game development philosophy.
sidebar_position: 1
image: ./header.jpg
---

## Purpose

Chickensoft is an open source organization that exists to empower small-to-midsize indie game developers and studios. We believe game architecture is largely a solved problem for most midsize games.

Ideally, game developers should be free to focus on implementing interesting game logic instead of being forced to rediscover decades worth of knowledge surrounding software architecture. As an organization, Chickensoft offers strong opinions about how games can be architected and provides the tools to implement those opinions.

Many people have pointed out that our code looks a lot different from other C# projects. We aren't intentionally deviating from the norms — our code is inspired from a variety of sources, including the code for the C# compiler itself. To explain why we do what we do, we’ve outlined the principles that inform our strong opinions about software architecture and game development.

:::tip
Looking for something less theoretical? Check out our technical how-to guide, [Enjoyable Game Architecture](https://chickensoft.games/blog/game-architecture).
:::
Chickensoft believes general purpose tools to construct quality software should always be open source. Chickensoft’s tools are built for the world’s most popular open source game engine, [Godot](https://godotengine.org/), and are licensed under the permissive [MIT License](https://chickensoft.games/license). We write our tools in one of the world’s [most popular programming languages](https://pypl.github.io/PYPL.html), [C#](https://dotnet.microsoft.com/en-us/languages/csharp), which has been open source [since 2014](https://medium.com/microsoft-open-source-stories/how-microsoft-rewrote-its-c-compiler-in-c-and-made-it-open-source-4ebed5646f98). Godot provides first party support for C# and consistently ranks in the [top 100 most starred GitHub projects](https://github.com/EvanLi/Github-Ranking/blob/master/Top100/Top-100-stars.md) of all time.

## Why use C# with Godot?

We believe code quality and developer happiness are core determiners of whether or not a project will be successfully completed on time. As a language, C# allows small teams to produce performant, well organized code, and is one of the [most loved programming languages](https://survey.stackoverflow.co/2022/#section-most-loved-dreaded-and-wanted-programming-scripting-and-markup-languages) of all time.

C# has an [extensive ecosystem](https://www.nuget.org/) of enterprise-grade libraries and tooling available, and is frequently used to implement everything from simple console programs to complex, distributed systems.

## Dog-fooding

Contrary to popular belief, we do not make tools for fun. We only develop a tool if we run into a real-life use case and determine that making a tool would benefit most other midsize game development projects (i.e., [we eat our own dog food](https://en.wikipedia.org/wiki/Eating_your_own_dog_food)).

We build each tool with the intention of immediately using and trying it out in a real game project. To this end, we maintain a fully tested, [3D platformer game demo](https://github.com/chickensoft-games/GameDemo) that leverages the Chickensoft tools and demonstrates our architectural practices. Only developing tools that we have an immediate need for prevents us from solving unnecessary problems and ensures the quality of our tools. Nothing identifies design flaws and bugs in a tool like using it in a real, production environment with non-trivial use cases.

## Our Technical Point of View

We believe game code can be...

- 🏎️ Fast
- 🧘‍♀️ Flexible
- 🏭 Consistent
- 🧪 Testable
- 📱 Cross-platform
- 🥚 Minimal
- 👩‍💻 Hackable
- 🪢 Loosely Coupled

We've spent the last several years building tools to support software architecture patterns that exist to promote those goals. While no patterns are perfect, we feel pretty confident we've come up with a good foundation that we can build on for years to come.

### 🏎️ Fast

Chickensoft prefers optimized source generation over reflection. Production dependencies only use “reflection” that is supported in C#’s [reflection-free mode](https://github.com/dotnet/corert/blob/master/Documentation/using-corert/reflection-free-mode.md), ensuring future compatibility on platforms that require ahead-of-time compilation, like iOS.

To prevent C# garbage collector pauses, production dependencies avoid memory allocations during critical game loop paths. Each package strives to use data structures with the correct time complexity or benchmarked performance needed to best solve the job at hand. Time complexity is sometimes irrelevant for differing amounts of data, so benchmarking data structures based on real-world use cases is preferred for performance-critical data.

### 🧘‍♀️ Flexible

All Chickensoft projects exist to serve the classic game development idea of “finding the fun.” Since most game development projects [fail because of execution](https://www.diva-portal.org/smash/get/diva2:1479893/FULLTEXT01.pdf), the Chickensoft tools are designed to guarantee the execution of scalable, well-structured code throughout the entire development lifecycle. Traditionally, the cost of adding a feature increases over time as the code becomes messier. Chickensoft’s game architecture and tooling exist to flatten that cost as time goes on. Chickensoft’s opinions are based on proven practices and successes from [other cross-platform frameworks](https://flutter.dev/) that [resemble Godot behind-the-scenes](https://www.youtube.com/watch?v=fLBkGoOP4RI&t=1705s), as well as the advice of many top engineers who contributed to those ecosystems.

### 🏭 Consistent

Chickensoft leverages the concept of [feature-based project structure](https://stackoverflow.com/a/4147237) to ensure that game code can be properly tokenized (see "Thinking in Tokens" in Chapter 17 [page 482] of _Game Architecture and Design: A New Edition_). Keeping all non-shared elements of a feature in one directory enables features to be more easily copied into other projects, as well as standardizes where developers need to look to understand any given piece of the game. Ease of copying features between projects should not be underestimated, either, as it allows developers to quickly try things out in a sandbox project and move them into a more mature project, or reorganize larger projects without consequence.

When everything is structured consistently, developers can more easily understand parts of the codebase that they themselves did not author. Similarity helps reduce developer ramp up time between features (and even entire game projects), drastically reducing costs. Feature based architecture is also an easy idea to understand, making it that much simpler for developers to teach to the new hires or junior engineers on their team.

Self contained code is also easier to mock (or fake) when leveraging automated tests. Well structured code is relatively cheap to test.

### 🧪 Testable

As projects become more advanced, the importance of unit testing auxiliary tools or core game systems becomes more important. In addition, automated integration tests that simulate input can provide tremendous value for games and drastically reduce the burden on manual QA testers by preventing bug regressions. Better yet, your QA team can be freed up to help write automated tests, ensuring an infinite return on a mostly-flat development cost.

### 📱 Cross-platform

Chickensoft’s command line and CI/CD tools are designed to work on the three major desktop operating systems: Windows, macOS, and Linux. Production game dependencies are also designed to work on the three major desktop platforms, as well as iOS and Android. While cross-platform support creates an additional workload for us, we believe the added effort is worth it to ensure that developers can market their products across as many platforms as possible.

### 🥚 Minimal

Each Chickensoft project is striving to have as little code as is necessary to perform its function in a readable, maintainable manner that adheres to the principles outlined here. Because it’s hard to design elegant systems up front, we often streamline and remove unnecessary code as projects mature, constantly iterating towards these goals wherever we can.

Wherever possible, we look for ways to solve big, real-life problems with the fewest points of failure. It’s not a perfect process, but we are continually on the hunt to find better ways to simplify things and improve reliability while decreasing the risk of defects. Simple code is easier to use, too.

### 👩‍💻 Hackable

Chickensoft projects expose public API’s that are not always mentioned in our tutorials or readme’s. While we don’t advise you to build core systems around these API’s, it can come in handy in a pinch. We believe developers should have the freedom they need to get stuff done, even if it means making our tools do things that make us squirm. Many times, features are added or improved because of community members informing us about unexpected use cases that end up being extremely useful.

### 🪢 Loosely Coupled

Game-engine specific packages are designed to avoid touching the game engine as much as possible. Fewer calls into the engine makes it easier to keep packages up-to-date and reduces marshaling costs between C#’s managed environment and Godot’s native environment. Leveraging vanilla C# wherever possible reduces the learning curve for developers with previous C# experience and allows us to take advantage of the language’s incredible abilities, such as record types and events.

Because [Godot has a fairly rapid release cycle](https://godotengine.org/article/release-management-4-1/), keeping packages updated allows our projects to be used with the latest versions of Godot and enables us to integrate upcoming changes or fixes almost as soon as new versions of Godot are released. For non-breaking changes, most of our package releases have been automated, ensuring that our packages are available whenever Godot is updated.

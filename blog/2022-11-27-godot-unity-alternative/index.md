---
title: 'Godot and C#: A Viable Unity Alternative'
description: Godot had a really good year. So did C# support.
image: ./header.jpg
slug: godot-unity-alternative
keywords: ['indie', 'csharp', 'godot', '2022']
authors: [joanna]
---

import BlogDiscordInvite from '@site/src/components/blog_discord_invite/blog_discord_invite';
import FancyImage from '@site/src/components/fancy_image/fancy_image';
import Toot from '@site/src/components/social_post/toot';
import Tweet from '@site/src/components/social_post/tweet';
import GithubCard from '@site/src/components/github_card/github_card';
import Spacer from '@site/src/components/spacer/spacer';
import useBaseUrl from '@docusaurus/useBaseUrl';

<FancyImage src={require("./header.jpg").default} alt="SatiRogue by @lewiji on GitHub">
<a href="https://github.com/lewiji/SatiRogue">SatiRogue</a> by <a href="https://twitter.com/TetrisMcKenna">@TetrisMcKenna</a>
</FancyImage>

Godot is a viable alternative to Unity — not just for early adopters, but for game developers and artists across the entire skill spectrum.

<!-- truncate -->

The engine provides a significantly better development experience (via text-based resources) and a snappy, responsive user interface. We'll spend the rest of the blog defending that statement and addressing common concerns about Godot.

Over the last few months, I've heard dozens of questions from interested users about Godot, the C# support it provides, and the future of the engine. It's important to note that I am in no way officially affiliated with the Godot Engine organization. I have, however, spoken with some of the core engine developers and contributors and **I'd like to put the arguments against Godot and C# to rest, once and for all.**

There's a lot to cover, and it's all good news — so let's dive in!

## 🎇 Godot's Big Year

If you haven't been watching too closely, you might have missed some of the news! Godot 4 is now in beta, and it's shipping some impressive new features:

- Vulkan renderer
- Signed distance, field-based global illumination (SDFGI) for large open worlds
- GPU lightmapping
- Custom sky shaders
- Automatically generated LOD (level-of-detail) meshes
- .NET 6 support
- Revamped shader language
- Circular dependencies support for GDScript
- ...[and countless other changes][godot4beta]

<FancyImage src={require("./aniela.jpg").default} alt="Aniela — a lighting study made in Godot by @cybereality on Twitter">
<a href="https://cybereality.itch.io/aniela">Aniela — a lighting study made in Godot</a> by <a href="https://twitter.com/cybereality">@cybereality</a> demonstrating Godot 4's new SDFGI features.
</FancyImage>

To top it all off, C# support has been completely overhauled by migrating away from mono and integrating support for .NET 6 directly. We'll come back to that in a bit.

### Overwhelming Support

Godot continues to receive an overwhelming amount of support from the community. The creator of Godot, [Juan Linietsky][juan], describes how Godot suffers from the best possible problem:

> we have too many people who are doing things really really efficiently and really well."[^1]

Essentially, the sheer number of contributors (1,800+ on GitHub) almost guarantees that any specific feature is being worked on at any given moment.

On [Patreon][patreon], Godot now receives over **$15,000 USD** of donations _per month_. That went up about $2,000 per month since I last checked on it in the summer.

The Godot subreddit, [r/godot], now has over **101,000 members**, an increase of at least 5,000 users since the summer (probably in large part to [Unity's missteps][unity-problems]). The official [Godot Discord][godot-discord] now has over **50,000 users**.

## 💁‍♀️ Addressing Your Concerns

On Reddit (and occasionally elesewhere), interested users will ask if C# is "ready" or a "first-class" citizen in Godot. The answer is simple: **yes**.

If you don't believe me, read on. We'll respond to each of the common arguments against Godot and its support for C#.

### Where's the asset store?

When I tell people that Godot is a viable Unity alternative, this is usually the first counterargument I hear, and for good reason. Godot doesn't have a monetization system for assets..._yet_.

Of course, Godot does have an official [Asset Library][asset-library] with over 1,500 assets, but they're all free. 🙁

Most of us would normally be thrilled about free assets, but when you're an artist or developer who relies on selling your assets to support yourself, giving away your products is a no-go. It's only fair that you should be able to make a living doing what you're good at.

Monetization, as [someone pointed out on Reddit][reddit-asset-store-comment], requires a lot of beurocratic effort. Collecting payments and being responsible for payment handling is a gigantic chore.

In 2021, the founder of Godot — Juan Linietsky — confirmed a paid asset marketplace was on the way.

<Tweet id="1395380550983196673" />

The Godot team recently announced the formation of the non-profit [Godot Foundation][godot-foundation], citing a paid asset marketplace as one of the primary motivations:

> As Godot keeps growing, so do our needs. Godot's size merits the flexibility of having its own organization and the opportunity to explore broader funding sources.
>
> Examples of this are crowdfunding campaigns (like Blender or Krita do), the highly requested ability for users to sell assets on an asset library (and have a share going to the Godot Foundation), selling merchandise, and other types of funding.

While that doesn't solve the problem today, you can probably get pretty far with the 1,500+ free assets that already exist.

For some users, having access to a multitude of assets is non-negotiable. Those users will not use Godot until its asset library is a thriving, paid marketplace. For most developers, however, I believe the boost in developer productivity Godot provides over Unity _et al._ more than makes up for any reduction in assets.

For example: if you're creating your own art, or purchasing art and models from artists, you're probably writing all your own custom code anyways. Why not do it in Godot? The editor won't [hang for 2 minutes straight][unity-painful] whenever it decides to scan your assets, unlike in other engines, _cough cough_.

### What About C#?

People often ask "is C# a first class citizen?" when looking into Godot and C#. I believe the question became popular when Godot first introduced C#. Like all new features, C# support was initially incomplete and poorly documented, but solidified over time. These days, the [Godot Docs][godot-docs] provide almost every code example in both C# and GDScript, and C# support in Godot 3 (LTS) is incredibly robust.

If you are looking for C# API docs, [paulloz] maintains a [C# version of the Godot API docs][csharp-godot-docs].

Just to reiterate, **Godot supports two first-party programming languages: GDScript and C#**. All other language bindings are unofficial, third party projects.

When asked if the new `GDExtension` support in Godot would replace the need for first-party C# support, [neikeq] (one of the core Godot C# contributors), explained that C# support would continue to be built-in because it would be difficult (if even possible) [to load more than one .NET assembly through a native extension][native-extension].

#### Future of C# Support

I asked [neikeq] a couple of questions about C# in Godot via private message in Discord, and with their permission I am posting some of the interview here (lightly edited for clarity):

> **me**: A lot of people are on the fence about Godot because they're not sure C# support is planned long term, or maybe they've been burned by the lack of documentation in the past. What do you want them to know?
>
> **neikeq**:
> They shouldn't worry about C# support in the long term. There was a lot of concern about that this year because initially C# wasn't included with the Godot 4 alpha releases, but now it's already there and soon it will be unified as a single version of Godot.
>
> One of the most important factors for the future of C# support is that starting with Godot 4, it's much easier to maintain. There is still room for improvement (for example, changing/adding a type for marshalling takes a bit more work right now). But the amount of work we took off our shoulders is huge. That's time that can be spent on other parts like addressing issues.
>
> Hopefully there will be less confusion about some things as well. Previous marshalling errors that would be printed at runtime are now compiler errors.
>
> **me**: Is the maintenance effort easier because of the new source generators, or other changes that were made?
>
> **neikeq**: We no longer build the Mono runtime ourselves, which was especially painful on platforms like wasm, iOS and even Android sometimes. As well as having to maintain build code for some of those platforms and ensuring that it works (like AOT for iOS). That's all offloaded to MSBuild with the official .NET releases. Granted we don't have mobile and wasm support yet but when the time comes, it will be easier to implement. The new hosting + pure C# + source generators is also easier to maintain than our previous approach with the Mono embedding APIs (although marshalling needs to be improved in this regard as I mentioned).
>
> **me**: Any closing words to those who were worried C# support was going away?
>
> **neikeq**: **_We don't have any intention of removing C# support because a lot of people in the industry communicate to us that C# support is a big factor in adopting the engine._**

### A Bigger C# Ecosystem

Still skeptical about taking the plunge on an open source game engine? Allow me to sweeten the deal by showcasing some awesome C# projects.

Our feature image for this article is from [SatiRogue][satirogue], a "turn-based dungeon-crawler roguelike RPG, made with Godot 3.x C# + RelEcs" by [TetrisMcKenna][tetrismckenna]. The source code is freely available on GitHub under the MIT license.

<FancyImage src={require("./satirogue.jpg").default} alt="SatiRogue">
</FancyImage>

Here's a few other awesome projects written in C#:

<Spacer><GithubCard profile='lewiji' repo='SatiRogue' /></Spacer>
<Spacer><GithubCard profile='Carnagion' repo='GDSerializer' /></Spacer>
<Spacer><GithubCard profile='derkork' repo='godot-test-driver' /></Spacer>
<Spacer><GithubCard profile='Byteron' repo='RelEcsGodot' /></Spacer>

## 🐤 Free Stuff from Chickensoft

Chickensoft had a good first year: what originally started as a C#-focused fan club for Godot has blossomed into a small community of enthusiastic package authors and game developers. Our community members have helped answer technical questions about Godot and C#, shared a number of open source packages, and filed multiple bug reports on the Godot engine (some of which have already been fixed!).

### Ready for Godot 4

If you were already using one of our packages, I'm pleased to announce that **all of the Chickensoft packages have been officially update for Godot 4!** See our [home page][home] for the complete list.

### Announcing Chicken

[Chicken][chicken] is a command line tool to help manage Godot addons and quickly create new Godot projects from a template.

While learning Godot, I kept running into the same few headaches over and over. When trying to make my code reusable across game projects, I realized there was no easy way to keep my addons up to date while I was still developing them. Likewise, whenever I created a new sandbox project, I had to copy a dozen or so files into the new project every time.

Chicken's addon management system allows you to declare dependencies in their own file (to prevent versioning headaches with git submodules), while template generation enables you to quickly create new projects without having to copy over all the files you need each time.

<FancyImage src='/img/chickensoft/chicken_cli.svg' alt="Chicken CLI" widthOverride="200px" />

<Spacer><GithubCard profile='chickensoft-games' repo='Chicken' logo='/img/chickensoft/chicken_cli.svg'/></Spacer>

#### Addon Management, Simplified

Godot addons are simply git repositories with an `addons/your_addon_name` folder inside them. The contents of that folder (scenes, scripts, art assets, etc) will be copied to a project folder's `addons/your_addon_name` when a user installs your addon. Because addons are a flat folder structure, people often think to use git submodules for addons in their project repositories. I initially tried git submodules and found it was too difficult to keep everything up-to-date across all of my projects that were using the addons.

If git submodules also sound too painful to you, Chicken allows you to declare what addons your project needs in an `addons.json` file so it can install them for you.

Chicken also lets you install addons by copying or symlinking to local folders.

```js
{
  "path": "addons",
  "cache": ".addons",
  "addons": {
    "godot_dialogue_manager": {
      "url": "https://github.com/nathanhoad/godot_dialogue_manager",
      "source": "remote",
      "checkout": "main",
      "subfolder": "addons/dialogue_manager"
    },
    "my_local_addon_repo": {
      "url": "../my_addons/my_local_addon_repo",
      "source": "local"
    },
    "my_symlinked_addon": {
      "url": "/drive/path/to/addon",
      "source": "symlink"
    }
  }
}
```

Then, all you have to do is run the following:

```sh
chicken addons install
```

#### Creating New Godot C# Projects

Godot will generate a new C# project for you the moment you add your first C# script to a node. Unfortunately, the C# project that Godot generates doesn't include a lot of common fixes needed in the `.csproj` for most projects or any other features.

Chickensoft is introducing an opionated [Godot 3 Game Template][godot-3-game] that provides working tests, test coverage, and VSCode debug configurations all working out-of-the-box. Sometimes it's easier to delete a feature you don't need than it is to create one, so feel free to fork it and make your own template.

> In the near future, we hope to introduce a Godot 4 game template, as well as templates for making reusable nuget packages for Godot!

<Spacer><GithubCard profile='chickensoft-games' repo='godot_3_game'/></Spacer>

To generate a project based on a template, use Chicken like so:

```sh
chicken egg crack ./MyGodot3Game \
  --egg "git@github.com:chickensoft-games/godot_3_game.git" \
  -- --title "MyGodot3Game"
```

A Chicken template (or egg 🐣, if you will) contains an `EDIT_ACTIONS.json` file which describes the actions chicken should perform to customize the template based on input values. When running `chicken egg crack`, arguments after `--` are given directly to the template to satisfy its required inputs. To learn more about making and using eggs, hop on over to the [Chicken readme][chicken]!

## 🎬 Conclusion

Making Godot games with C# is an incredible experience, and it's only getting better. If you're looking to start (or continue) your game development journey, you are more than welcome to be a part of our open source community here at Chickensoft.

> If you're already making games with Godot and C# and want your project featured in a blog, let's get in touch!

<BlogDiscordInvite />

### Footnotes

[^1]: Tune into around 00:48:00 of [The Role of Open Source Game Engines: Godot and O3DE][open-metaverse] on the Podcast [Building the Open Metaverse][open-metaverse-podcast]

<!-- Links -->

[asset-library]: https://godotengine.org/asset-library/asset
[game-jams]: https://godotwildjam.com
[communities]: https://godotengine.org/community/user-groups
[nuget]: https://www.nuget.org
[consoles]: https://godotengine.org/article/godot-consoles-all-you-need-know
[godot4beta]: https://godotengine.org/article/dev-snapshot-godot-4-0-beta-1#rendering
[open-metaverse]: https://uk-podcasts.co.uk/podcast/building-the-open-metaverse/the-role-of-open-source-game-engines-godot-and-o3d
[open-metaverse-podcast]: https://cesium.com/open-metaverse-podcast/
[juan]: https://twitter.com/reduzio
[patreon]: https://www.patreon.com/godotengine/posts
[r/godot]: https://www.reddit.com/r/godot/
[unity-problems]: /blog/time-to-make-that-indie-csharp-game-in-godot#unrest-in-the-indie-c-game-dev-world
[godot-discord]: https://discord.gg/4JBkykG
[reddit-asset-store-comment]: https://www.reddit.com/r/godot/comments/o5pam9/comment/h2o1u5w/?utm_source=share&utm_medium=web2x&context=3
[godot-foundation]: https://godotengine.org/article/godots-graduation-godot-moves-to-a-new-foundation
[unity-painful]: https://www.youtube.com/watch?v=7PpkAhVZMDc
[godot-docs]: https://docs.godotengine.org/en/stable/index.html
[paulloz]: https://twitter.com/pauljoannon
[csharp-godot-docs]: https://paulloz.github.io/godot-csharp-api/
[neikeq]: https://github.com/neikeq
[native-extension]: https://discord.com/channels/862108653488963604/1039016978528088074/1039212956438773843
[satirogue]: https://github.com/lewiji/SatiRogue
[tetrismckenna]: https://twitter.com/TetrisMcKenna
[chicken]: https://github.com/chickensoft-games/chicken
[home]: /
[godot-3-game]: https://github.com/chickensoft-games/godot_3_game

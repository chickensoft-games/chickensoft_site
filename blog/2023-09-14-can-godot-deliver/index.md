---
title: 'Can Godot Deliver?'
description: While Unity continues to break the trust of its users, Godot is promising to be the free and open "game engine you've been waiting for." But can it deliver?
image: ./header.jpg
slug: godot-delivers
keywords:
  - Godot
  - Unity
  - game engine
  - C#
  - GDScript
  - open source
  - foss
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

<FancyImage src={require("./header.jpg").default} alt="While Unity continues to break the trust of its users, Godot is promising to be the free and open 'game engine you've been waiting for.' But can it deliver?" />

The game engine company Unity has once again gained notoriety for offending its users. This time, they've announced [a $0.20 per install fee](https://www.forbes.com/sites/paultassi/2023/09/13/the-entire-gaming-industry-unites-against-unitys-baffling-pricing-change/?sh=3f403fa5679b) for games that surpass $200,000 in revenue. Of course, how they determine what constitutes a valid install is [not something they're willing to share](https://twitter.com/unity/status/1701689241456021607).

<!-- truncate -->

## 💔 Loved by all?

Unity's recent cash grab is not all that unexpected, either: this is just the latest transgression in a string of unpopular decisions. In case you missed it, here's what the world's most-popular game engine has been up to:

- [Lost 5 billion in market cap][marketwatch] after Apple's ad tracking changes.
- [Laid off a chunk of its workforce][techspot].
- Tried to [remove its own forums][forums], but ended up backpedaling after enraging the community.
- Merged with a [known adware company][adware].
- Canceled their own in-house game project, Gigaya, citing that it ["would have required a thorough cleanup and optimizations in its current stage."][gigaya].
- Charging $0.20 per installation after $200,000 in revenue.

And that's just what's happened in the last year and a half.

Personally, I have no idea why the company that dominates the vast majority of the game engine market wants to play the fiddle while they burn it all down. I guess we can't all have normal pastimes.

Some have speculated that the Unity leadership is playing 4D chess and will roll-back the changes, leaving in place royalties or higher prices which seem more palatable by comparison. Or maybe they only care about enterprise clients now, or want everyone to litter their games with ads. Either way, no one knows for sure. And honestly, it wouldn't matter — once the fence of trust is broken, developers will start meandering over into greener pastures.

## 😴 What's Godot Been Doing?

Godot, due to its size and popularity over the years, has become somewhat of the de-facto choice for a game engine outside Unity or Unreal. It doesn't matter though, because many studios haven't ever given it a serious thought. You'd be hard pressed to find a developer job using Godot.

I suspect that is changing. While everyone has been chugging along using proprietary tools, the Godot team have been hard at work. They've released a major new version, Godot 4, which drastically improved the codebase, paving the way for development of the missing features needed to make AAA games. Now that the foundation has been laid, it's just a matter of time before the work gets done.

C# support has improved drastically, too. Godot 4 shifted the runtime from Mono to the .NET SDK, opening the door for tighter integration and faster development cycles. In fact, the latest releases of Godot 4 are testing Android platform support for C#, with iOS and Web support planned to follow when [.NET ships the correct infrastructure needed][dotnet-mobile-web].

## 💖 Godot's Promise

Godot promises to be the "free, open source engine that you've been waiting for." And if you look at what the creator, Juan Linietsky, has been saying over the years, you'll find an idealistic promise of a game engine that's [fully free and open][free-and-open] — a world where you don't have to worry who's going to try and take your game's profits from you.

He's also promising [to take care of Unity users who defect to Godot][unity-users] while [continuing improvements to the 3D system][3d].

Meanwhile, when I reached out, the executive director of the Godot team told me they are hoping to hire someone full-time to work just on the Godot C# integration. The only thing holding them back is [funding].

I can't speak for anyone else, but I believe in the Godot team. With C# alone, they've fixed countless integration bugs, including at least one or two that I've personally filed. And that's just the part of the engine that I've been paying attention to. Godot has had contributions from over 2,000 people, and the team manages to triage countless fixes and pull requests on a shoestring budget compared to the competition.

The Godot team continually performs feats that are nothing short of magical at a fraction of the expense.

## ✅ Challenge Accepted

Whether or not Unity intended to, I think they've awoken a sleeping giant. Godot almost seemed ambivalent to Unity before — but now they're promising to take care of the users that Unity has left behind.

So, if I was a big studio with millions of dollars to toss around, I'd put it into Godot. Free software can't be stopped.

<!-- truncate -->

<!-- Sources -->

[marketwatch]: https://www.marketwatch.com/story/unity-software-loses-5-billion-in-market-cap-after-apples-changes-lead-to-self-inflicted-wound-11652291876
[gigaya]: https://forum.unity.com/threads/introducing-gigaya-unitys-upcoming-sample-game.1257135/page-2#post-8278305
[techspot]: https://www.techspot.com/news/95143-unity-laying-off-hundreds-employees-shares-continue-slide.html
[forums]: https://forum.unity.com/threads/unity-answers-shutdown-canceled.1293360/
[adware]: https://news.ycombinator.com/item?id=32081051
[dotnet-mobile-web]: https://github.com/godotengine/godot/issues/70796#issuecomment-1618006609
[free-and-open]: https://x.com/reduzio/status/1701712402687934957?s=20
[3d]: https://x.com/reduzio/status/1701700832830587116?s=20
[unity-users]: https://x.com/reduzio/status/1701872429016949135?s=20
[funding]: https://fund.godotengine.org/

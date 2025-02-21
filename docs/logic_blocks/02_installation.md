---
title: 📦 Installation
image: ./header.jpg
---

## 📥 Installing LogicBlocks

LogicBlocks and its diagram generator are available as C# packages on [nuget].

You'll also want to install the Chickensoft Introspection generator. While optional, it allows LogicBlocks to identify and preallocate states for you so that you don't have to add each state manually.

Find the latest version number of LogicBlocks, its diagram generator, and the introspection generator on nuget: [Chickensoft.LogicBlocks], [Chickensoft.LogicBlocks.DiagramGenerator], [Chickensoft.Introspection.Generator].

```xml
<PackageReference Include="Chickensoft.LogicBlocks" Version="#.#.#" />
<PackageReference Include="Chickensoft.LogicBlocks.DiagramGenerator" Version="#.#.#" PrivateAssets="all" OutputItemType="analyzer" />
<PackageReference Include="Chickensoft.Introspection.Generator" Version="#.#.#" PrivateAssets="all" OutputItemType="analyzer" />
```

:::caution
Don't forget to include the `PrivateAssets="all"` and `OutputItemType="analyzer"` attributes on generator package references.
:::

:::caution
We strongly recommend treating warning `CS9057` as an error to catch possible compiler-mismatch issues with the Introspection generator. (See the [Introspection] README for more details.) To do so, add a `WarningsAsErrors` line to your `.csproj` file's `PropertyGroup`:

```xml
<PropertyGroup>
  <TargetFramework>net8.0</TargetFramework>
  ...
  <!-- Catch compiler-mismatch issues with the Introspection generator -->
  <WarningsAsErrors>CS9057</WarningsAsErrors>
  ...
</PropertyGroup>
```

:::

:::tip
Always use the same version of the LogicBlocks diagram generator that you use for LogicBlocks, since they are updated together.
:::

[nuget]: https://www.nuget.org/packages?q=logicblocks
[Chickensoft.LogicBlocks.DiagramGenerator]: https://www.nuget.org/packages/Chickensoft.LogicBlocks.DiagramGenerator#versions-body-tab
[Chickensoft.Introspection.Generator]: https://www.nuget.org/packages/Chickensoft.Introspection.Generator
[Chickensoft.LogicBlocks]: https://www.nuget.org/packages/Chickensoft.LogicBlocks
[Introspection]: https://github.com/chickensoft-games/Introspection

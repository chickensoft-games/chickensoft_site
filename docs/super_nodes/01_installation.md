---
title: 📦 Installation
image: ./header.jpg
---

Simply add the following package references to your project's `.csproj` file (you can find the latest version on [Nuget][nuget]). Don't forget to include the `PrivateAssets="all"` and `OutputItemType="analyzer"` attributes on the SuperNodes package reference!

```xml
<ItemGroup>
  <!-- Include SuperNodes as a Source Generator -->
  <PackageReference Include="Chickensoft.SuperNodes" Version="1.0.0" PrivateAssets="all" OutputItemType="analyzer" />

  <!-- Type definitions and attributes used by SuperNodes. -->
  <!-- By convention, version will be the same as the generator itself. -->
  <PackageReference Include="Chickensoft.SuperNodes.Types" Version="1.0.0" />
</ItemGroup>
```

:::info
Because SuperNodes is a source generator, you have to include the `PrivateAssets="all" OutputItemType="analyzer"` to tell the build system how to use it.
:::

Your node scripts are now ready to be supercharged! In the next section, we'll begin explaining how to take advantage of the features SuperNodes provides.

[nuget]: https://www.nuget.org/packages/Chickensoft.SuperNodes/

---
title: 📦 Installation
---

Find the latest version on [Nuget][nuget]! Note the version number and add the following to your project's `.csproj` file, replacing `{VERSION}` with whatever compatible version you need from Nuget.

```xml
<ItemGroup>
  <!-- Include SuperNodes as a Source Generator -->
  <PackageReference Include="Chickensoft.SuperNodes" Version="{VERSION}" PrivateAssets="all" OutputItemType="analyzer" />

  <!-- Type definitions and attributes used by SuperNodes. -->
  <!-- By convention, version will be the same as the generator itself. -->
  <PackageReference Include="Chickensoft.SuperNodes.Types" Version="{VERSION}" />
</ItemGroup>
```

:::info
Because SuperNodes is a source generator, you have to include the `PrivateAssets="all" OutputItemType="analyzer"` to tell the build system how to use it.
:::

Your node scripts are now ready to be supercharged! In the next section, we'll begin explaining how to take advantage of the features SuperNodes provides.

[nuget]: https://www.nuget.org/packages/Chickensoft.SuperNodes/

---
title: ♻️ Sharing PowerUps
image: ../header.jpg
---

To share a PowerUp, we need to be able to share the code for it, not a compiled `.dll` of its contents. If we aren't able to share the source code for a PowerUp, the SuperNodes generator can't apply it to a SuperNode.

Fortunately for us, Nuget can be used to make [source-only nuget packages][source-only-packages].

### 📑 Source-Only Nuget Packages

When a project references a source only package, any source generators in the project will be able to see the contents of the source-only package and generate code from it. That's exactly what we want!

SuperNodes contains an [example of a source-only package][example-package] that you can copy and customize to your liking. Just copy it and configure the fields in the `.csproj` file to match your project.

Any source code that the project contains will automatically get copied into the nuget package's content files for distribution, so add as many as you source files as you want!

### 📄 Using a Source-Only Package

Using source-only packages is a little bit different than using a normal package.

#### 🖥 Locally

Importing source-only packages locally via `<ProjectReference>` doesn't work, as the imported source is not fed to the consuming project's source generators.

To use a source-only PowerUp package locally, first build the project.

```sh
cd SharedPowerUps # or wherever your source-only PowerUp project is
dotnet build
```

Add a `nuget.config` alongside your solution file for the project in which you want to import your source-only PowerUp package.

In the `nuget.config` file, add a key (any name will work) with the value containing the path to your source-only PowerUp package:

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <config>
  </config>
  <settings>
  </settings>
  <packageSources>
    <add key="Local Packages" value="/Somewhere/LocalPackages" />
  </packageSources>
</configuration>
```

The path in the `nuget.config` to the local package should be the same as the `<OutputPath>` in the source-only PowerUp package's `*.csproj` file (or you can manually move your source-only package `.nupkg` to your local package storage path specified in your `nuget.config`).

Finally, in your project that wants to use the source-only package, add a `<PackageReference>` to the source-only package as shown below (make sure to replace the name with your source-only package's name).

```xml
<ItemGroup>
  <PackageReference Include="SharedPowerUps" Version="1.0.0" PrivateAssets="all" />
</ItemGroup>
```

:::caution
You must include `PrivateAssets="all"`.
:::

The `nuget.config` file will instruct the `dotnet` or `nuget` tool to resolve your package from the local path correctly.

:::caution
If you make changes to your source-only PowerUp package, `dotnet restore` will not always pick up on the changes. To force your project to clear its package cache, run the following:

```sh
cd your_project_using_a_source_only_package
dotnet nuget locals --clear all
dotnet build
```

:::

#### 📦 From Nuget

If you've successfully published your source-only package, using it should be as simple as adding the following to your project:

```csproj
<ItemGroup>
  <PackageReference Include="MySharedPowerUps" Version="1.0.0" PrivateAssets="all" />
</ItemGroup>
```

[example-package]: https://github.com/chickensoft-games/SuperNodes/tree/main/SharedPowerUps
[source-only-packages]: https://medium.com/@attilah/source-code-only-nuget-packages-8f34a8fb4738

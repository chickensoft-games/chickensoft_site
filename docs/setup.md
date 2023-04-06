---
title: 🏁 Getting Started
sidebar_position: 1
image: ./header.jpg
---

Ready to make games with Godot and C#? Let's start by making sure your development environment is ready to go!

## 📦 Installing the .NET SDK

To use C# with Godot, you'll need .NET 6. The .NET 6 SDK works great for both Godot 3 and Godot 4.

:::info
We often write file paths like `~/folder`. The `~` is a shortcut for your home folder. On Windows, `~` expands to something like `C:\Users\you`. On macOS, `~` expands to `/Users/you`. On Linux, `~` expands to `/home/you`. For example, `~/Documents` expands to `C:\Users\you\Documents` on Windows, `/Users/you/Documents` on macOS, and `/home/you/Documents` on Linux.
:::

<Tabs groupId="os">
  <TabItem value="macOS">

Use the [Microsoft provided
installer](https://dotnet.microsoft.com/en-us/download/dotnet/6.0) to
install .NET 6 on macOS. For more information about installing the .NET 6
SDK on Mac, see [Microsoft's article for
Mac](https://learn.microsoft.com/en-us/dotnet/core/install/macos).

  </TabItem>
  <TabItem value="Linux">

There's a few gotchas to be aware of when installing the .NET SDK on
Linux, so please see [Microsoft's article for
Linux](https://learn.microsoft.com/en-us/dotnet/core/install/linux).

  </TabItem>
  <TabItem value="Windows">

Open PowerShell as an administrator and use `winget` to install the .NET 6
SDK: `winget install Microsoft.DotNet.SDK.6`. For more information about
installing the .NET 6 SDK on Windows, see [Microsoft's article for
Windows](https://learn.microsoft.com/en-us/dotnet/core/install/windows)

You can also install the .NET 6 SDK using [Visual Studio 2022 Community Edition][vs-2022].

  </TabItem>
</Tabs>

If you want to install the .NET 6 SDK manually, you can find [all available downloads here][dotnet-6-sdk].

Make sure you keep track of where the .NET 6 SDK was installed. We'll need that path later.

## 🚉 Installing Mono

For Godot 3, you need to install [Mono][mono]. Instructions and installers are available for each platform on the Mono website.

:::info
You can skip this step if you're only using Godot 4. Godot 4 integrates directly with .NET 6 instead of Mono.
:::

## 🤖 Installing Godot

You'll need to [download Godot][download-godot], if you haven't already.

:::info
Godot currently comes in 2 flavors: **regular**, and **mono**. For C# development, you must get the mono version!

Godot 4 eventually intends to combine both versions into one, but that hasn't happened just yet.
:::

### ❓ Where to Put Godot

Since Godot doesn't have an installer, you get to decide where to put it on your computer. Here's some recommendations for where to install it on each platform.

<Tabs groupId="os">
  <TabItem value="macOS">

Move Godot to `/Applications/Godot_mono.app`. This is where all your other
Mac apps are, anyways!

  </TabItem>
  <TabItem value="Linux">

If you're using Linux, you probably have your own opinion on where to put
it. If you're not sure, you can place the Godot executable (and its
supporting files) in its own folder inside your user folder: `~/Godot`.

  </TabItem>
  <TabItem value="Windows">

On Windows, you can place Godot at `C:\Godot\Godot_mono.exe` or in its own
folder in your user folder: `~/Godot`.

  </TabItem>
</Tabs>

## 🖥 Shell Environment

Let's modify the shell environment to contain environment variables that point to Godot and the .NET SDK.

Once we do this, we'll be able to run Godot from a terminal and create the proper launch configurations for Visual Studio Code.

<Tabs groupId="os">
  <TabItem value="macOS">

If `~/.zshrc` doesn't exist, you'll need to create it.

:::tip
To toggle visibility of hidden files in the macOS Finder, press `Cmd + Shift + .` — it also works in file dialogs!
:::

Add the following to your `~/.zshrc` file:

```sh
# .NET SDK Configuration
export DOTNET_CLI_TELEMETRY_OPTOUT=1 # Disable analytics
export DOTNET_ROOT="/usr/local/share/dotnet/dotnet"

# Add the .NET SDK to the system paths so we can use the `dotnet` tool.
export PATH="/usr/local/share/dotnet:$PATH"
export PATH="/usr/local/share/dotnet/sdk:$PATH"
export PATH="$HOME/.dotnet/tools:$PATH"

# Run this if you ever run into errors while doing a `dotnet restore`
alias nugetclean="dotnet nuget locals --clear all"

# For Godot 3, add mono to the path.
export PATH="/Library/Frameworks/Mono.framework/Versions/Current/Commands/mono:$PATH"

# Environment variables for Godot
export GODOT="/Applications/Godot.app/Contents/MacOS/Godot"
export GODOT4="/Applications/Godot4.app/Contents/MacOS/Godot"

# Add Godot to the system paths (so that you can execute it from anywhere)
export PATH="/Applications/Godot.app/Contents/MacOS:$PATH"
export PATH="/Applications/Godot4.app/Contents/MacOS:$PATH"

# Prevents the occasional "can't create res://.mono" error
# Issue: https://godotengine.org/qa/21875/cant-generate-mono-glue-on-osx
export PKG_CONFIG_PATH="/Library/Frameworks/Mono.framework/Versions/6.12.0/lib/pkgconfig"
```

  </TabItem>
  <TabItem value="Linux">

If `~/.bashrc` doesn't exist, you'll need to create it. Add the following to the file:

```sh
# .NET SDK Configuration
export DOTNET_CLI_TELEMETRY_OPTOUT=1 # Disable analytics
export DOTNET_ROOT="/usr/bin/dotnet/dotnet"

# Add the .NET SDK to the system paths so we can use the `dotnet` tool.
export PATH="/usr/bin/dotnet:$PATH"
export PATH="/usr/bin/dotnet/sdk:$PATH"
export PATH="$HOME/.dotnet/tools:$PATH"

# Run this if you ever run into errors while doing a `dotnet restore`
alias nugetclean="dotnet nuget locals --clear all"

# For Godot 3, add mono to the path.
export PATH="/usr/bin/mono:$PATH"

# Environment variables for Godot
export GODOT="$HOME/Godot/Godot_mono"
export GODOT4="$HOME/Godot4/Godot_mono"

# Add Godot to the system paths (so that you can execute it from anywhere)
export PATH="$HOME/Godot:$PATH"
export PATH="$HOME/Godot4:$PATH"
```

  </TabItem>
  <TabItem value="Windows">

In Windows, when using the bash shell that comes with Git (Git Bash), you can place your shell configuration in `~/.bash_profile`. In the file, add the following:

```sh
# .NET SDK Configuration
export DOTNET_CLI_TELEMETRY_OPTOUT=1 # Disable analytics
export DOTNET_ROOT="C:\\Program Files\\dotnet\\dotnet.exe"

# Add the .NET SDK to the system paths so we can use the `dotnet` tool.
export PATH="C:\\Program Files\\dotnet:$PATH"
export PATH="C:\\Program Files\\dotnet\\sdk:$PATH"
export PATH="$HOME\\.dotnet\\tools:$PATH"

# Run this if you ever run into errors while doing a `dotnet restore`
alias nugetclean="dotnet nuget locals --clear all"

# For Godot 3, add mono to the path.
export PATH="C:\\Program Files/Mono/bin/mono:$PATH"

# Environment variables for Godot
export GODOT="C:\\Godot\\Godot_mono.exe"
export GODOT4="C:\\Godot4\\Godot_mono.exe"

# Add Godot to the system paths (so that you can execute it from anywhere)
export PATH="C:\\Godot:$PATH"
export PATH="C:\\Godot4:$PATH"
```

:::caution
You'll also need to make system-wide environment variables for Godot 3 and 4. Chickensoft tools rely on an environment variable named `GODOT` for Godot 3, and `GODOT4` for Godot 4. The value of these variables should be the path to the Godot executable.

To learn how to set an environment variable in Windows, see [this article][win-env-vars].
:::

  </TabItem>
</Tabs>

:::info
Depending on how you install the .NET SDK and Mono, you may or may not need to add them to your path in `~/.bashrc`. You can run `which dotnet` and `which mono` in a bash shell to see if they're already in your path. If they are, remove the `export PATH` lines for them.

Make sure the paths to the .NET 6 SDK, Mono, and Godot match where those tools were installed on your particular system, as it can vary depending on how they were installed.

If you're not installing both Godot 3 and 4, remove the lines you don't need.
:::

## ⌨️ Visual Studio Code

All of Chickensoft's packages and templates are designed to work well with Visual Studio Code (VSCode).

You can download [Visual Studio Code][vscode] here.

## ✨ Creating Godot Projects

Chickensoft provides a `dotnet new` template to help you quickly create a C# nuget package for use with Godot 4 projects. Using the GodotPackage template allows you to setup a package with continuous integration, auto-formatting, debugger profiles for VSCode, and a pre-configured unit test project.

<Spacer><GithubCard profile='chickensoft-games' repo='GodotPackage' logo='/img/chickensoft/package.svg'/></Spacer>

:::info
The GodotPackage is great for making nuget packages that can be used from your game project, but it is not intended to create a game project itself. Because the project is configured as a nuget package, it is not suitable to generate game projects with unless you customize it heavily. Additionally, tests are not run in a simulated graphical environment (which would be required for testing Godot game projects).

We are currently working on a GodotGame template that is suited for quickly spinning up C# Godot 4 games that follows Chickensoft's best practices for testing, code coverage, CI/CD, and dependency management that is specific to a game project. Check back soon!
:::

Once you've generated a project, you can run the following from the project directory to make Godot generate the C# glue for your project.

```sh
godot --headless --quit --build-solutions
```

Open the new project in VSCode and use the provided launch configurations to debug your application.

:::caution
If you're using Godot 3, make sure Godot is open (or else nothing will happen).
:::

[dotnet-6-sdk]: https://dotnet.microsoft.com/en-us/download/dotnet/6.0
[download-godot]: https://downloads.tuxfamily.org/godotengine/
[vscode]: https://code.visualstudio.com
[mono]: https://www.mono-project.com/download/stable/
[vs-2022]: https://visualstudio.microsoft.com/downloads/
[win-env-vars]: https://github.com/sindresorhus/guides/blob/main/set-environment-variables.md#windows-7-and-8
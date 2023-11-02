---
title: 🏁 Godot C# Setup Guide
sidebar_position: 1
image: ./header.jpg
---

If you have the .NET SDK installed, Godot 4 provides a pretty good out-of-the-box development experience — but you'll need to follow some additional steps if you want to configure your environment to simplify IDE integration and command-line usage.

Ready to make games with Godot and C#? Let's start by making sure your development environment is ready to go!

> If you get stuck on a step or want to inform us about incorrect or outdated documentation, please [join us on Discord][discord].

:::tip
This guide is specific to **Godot 4** — all Chickensoft packages have officially migrated to Godot 4.
:::

## 📦 Installing the .NET SDK

If you're wanting to use Godot 4, we recommend installing the [.NET 8 SDK][net8]. You will also need the [.NET 6 SDK][net6] to use GodotEnv, Chickensoft's CLI tool for managing Godot versions and addons. While you're at it, you should install the [.NET 7 SDK][net7], too — having the .NET SDK 6, 7, and 8 will allow you to run a variety of C# projects with Godot.

:::tip
You can install multiple versions of the .NET SDK. C# tooling is (generally) intelligent enough to pick the correct version based on the target framework of the project, the `global.json` file, and other settings in Godot. If you're running into issues with SDK resolution, feel free to reach out in [Discord].
:::

:::info
We often write file paths like `~/folder`. The `~` is a shortcut for your home folder. On Windows, `~` expands to something like `C:\Users\you`. On macOS, `~` expands to `/Users/you`. On Linux, `~` expands to `/home/you`. For example, `~/Documents` expands to `C:\Users\you\Documents` on Windows, `/Users/you/Documents` on macOS, and `/home/you/Documents` on Linux.
:::

<Tabs groupId="os">
  <TabItem value="macOS">

Use the [Microsoft provided
installer][net8] to
install the .NET SDK on macOS. For more information about installing the .NET SDK on Mac, see [Microsoft's article for
Mac](https://learn.microsoft.com/en-us/dotnet/core/install/macos).

  </TabItem>
  <TabItem value="Linux">

There's a few gotchas to be aware of when installing the .NET SDK on
Linux, so please see [Microsoft's article for
Linux](https://learn.microsoft.com/en-us/dotnet/core/install/linux).

  </TabItem>
  <TabItem value="Windows">

Open PowerShell as an administrator and use `winget` to install the .NET 8
SDK: `winget install dotnet-sdk-8` (or `winget upgrade` to upgrade an existing installation). For more information about
installing the .NET SDK on Windows, see [Microsoft's article for
Windows](https://learn.microsoft.com/en-us/dotnet/core/install/windows) or the [release notes][net8-release-notes].

You can also install the .NET SDK using the [Microsoft provided installer][net8], or through [Visual Studio 2022 Community Edition][vs-2022].

  </TabItem>
</Tabs>

If you want to install the .NET SDK manually, you can find [all available downloads here][dotnet-sdk].

The .NET SDK installers and package managers tend to place it in a standard location on each platform — if you install it manually, make sure you make a note of where you installed it to. We'll need that later.

## ⏳ Version Control with Git

You should **absolutely** be using a version control system to track your game's code and assets: specifically, [git].

:::danger

🔥🔥🔥 Mistakes get made, tools can accidentally clear out files, scene references can get broken — bad stuff happens during the chaos of development.

**Git allows you to go back in time and undo unwanted changes**, which is invaluable if you'd prefer development not be nightmare-inducing 😱. It also lets you collaborate with others easily and store your code in [GitHub], [GitLab], and other such git-related services.

While learning git can seem daunting, it is absolutely your responsibility as a game developer to protect your valuable time and work, and using git is a mandatory part of the experience that enables you to do just that. **Game development is extremely hard, so don't make it harder on yourself by leaving your work unprotected**. 🔥🔥🔥

Be sure to bookmark the [Undoing Changes in Git][git-undo] section to prevent panic during your next crisis. Messing up is not a matter of **if**, it's a matter of **when** — so be prepared.

:::

Properly learning and using git is a skill that gradually accrues over a lifetime of development, but [the basics aren't too hard][git-started], and using [Visual Studio Code][vscode] can allow you to do it without ever really having to touch a command-line, for the most part.

:::info

Even if you're already using git, but you're not entirely comfortable with it, take a look at the aforementioned [git beginner guide][git-started] — this is the best guide, in my opinion, and the one I recommend to junior engineers all the time. You can jump straight into the [advanced tips][git-advanced] for anything you might be unsure about.

:::

## 🖥 Shell Environment

Let's setup the shell environment to contain environment variables that point to Godot and the .NET SDK. This will allow you to run Godot and the `dotnet` command line tool from anywhere, making Godot game development easier than ever.

:::info

### 👩‍💻 Which shell should I use?

For the sake of consistency, Chickensoft officially recommends using a bash shell on every OS, _especially_ if you are developing your game to be cross-platform on macOS, Windows, and Linux — which is pretty easy to do with Godot, once your environments are setup correctly.

Since a bash shell is not available on Windows by default, you can access one by installing [git], which includes the Git Bash for Windows application. You can also configure the Windows Terminal (there's an option to add a Windows Terminal profile in the git installer) and [VSCode to use bash][vscode-bash] by default.

Bash is a bit esoteric, but you can [easily learn the basics of bash that you'll need][bash-beginners] pretty quickly. Or you can dive in and [read the whole book on bash][bash-thorough].

:::

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
export DOTNET_ROOT="/usr/local/share/dotnet"
export DOTNET_ROLL_FORWARD_TO_PRERELEASE=1

# Add the .NET SDK to the system paths so we can use the `dotnet` tool.
export PATH="/usr/local/share/dotnet:$PATH"
export PATH="/usr/local/share/dotnet/sdk:$PATH"
export PATH="$HOME/.dotnet/tools:$PATH"
# For .net 6:
export PATH="/usr/local/share/dotnet:/usr/local/share/dotnet/sdk:$PATH"

# Run this if you ever run into errors while doing a `dotnet restore`
alias nugetclean="dotnet nuget locals --clear all"
```

  </TabItem>
  <TabItem value="Linux">

If `~/.bashrc` doesn't exist, you'll need to create it. Add the following to the file:

```sh
# .NET SDK Configuration
export DOTNET_CLI_TELEMETRY_OPTOUT=1 # Disable analytics
export DOTNET_ROOT="/usr/bin/dotnet"
export DOTNET_ROLL_FORWARD_TO_PRERELEASE=1

# Add the .NET SDK to the system paths so we can use the `dotnet` tool.
export PATH="/usr/bin/dotnet:$PATH"
export PATH="/usr/bin/dotnet/sdk:$PATH"
export PATH="$HOME/.dotnet/tools:$PATH"

# Run this if you ever run into errors while doing a `dotnet restore`
alias nugetclean="dotnet nuget locals --clear all"
```

  </TabItem>
  <TabItem value="Windows">

In Windows, when using the bash shell that comes with Git (Git Bash), you can place your shell configuration in `~/.bash_profile`. In the file, add the following:

```sh
# .NET SDK Configuration
export DOTNET_CLI_TELEMETRY_OPTOUT=1 # Disable analytics
export DOTNET_ROOT="C:\\Program Files\\dotnet\\"
export DOTNET_ROLL_FORWARD_TO_PRERELEASE=1

# Add the .NET SDK to the system paths so we can use the `dotnet` tool.
export PATH="C:\\Program Files\\dotnet:$PATH"
export PATH="C:\\Program Files\\dotnet\\sdk:$PATH"
export PATH="$HOME\\.dotnet\\tools:$PATH"

# Run this if you ever run into errors while doing a `dotnet restore`
alias nugetclean="dotnet nuget locals --clear all"
```

  </TabItem>
</Tabs>

:::info
Depending on how you install the .NET SDK, you may or may not need to add them to your path in `~/.bashrc` (linux) or `~/.zshrc` (macOS). You can run `which dotnet` in a bash shell to see if they're already in your path. If they are, remove the `export PATH` lines for them.

Make sure the paths to the .NET SDK and Godot match where those tools were installed on your particular system, since it might be different if you installed them manually.
:::

## 🤖 Installing Godot

You can use Chickensoft's command-line tool, [GodotEnv], to manage Godot versions locally on your machine (as well as manage Godot asset library addons in your project).

<Spacer><GithubCard profile='chickensoft-games' repo='GodotEnv' logo='/img/chickensoft/godot_env.png'/></Spacer>

:::info
Using GodotEnv to install and manage Godot on your system provides a number of advantages:

- ✅ Automatically download, extract, and install any requested Godot 4.x+ version (with or without .NET support) from the Godot [TuxFamily] downloads mirror.

- ✅ Automatically manage symlink on your system that point to the version of Godot you'd like to use. The symlink path never changes — just the version it points to.

  On Windows, maintaining symlinks requires administrator privileges, making it a hassle to manage by hand. GodotEnv integrates with Windows' User Access Control (UAC) to automatically request admin privileges when needed.

- ✅ Adds a system `GODOT` environment variable that points to the symlink location, ensuring you can run Godot from anywhere on your system, in any shell.

- ✅ Standardizes installation locations across platforms and machines, making it easier to collaborate with other teammates.

- ✅ Quickly change the system Godot version to any installed version, as well as listing all the installed versions.

:::

To install GodotEnv, run the following:

```sh
dotnet tool install --global Chickensoft.GodotEnv
```

### 🦾 Installing with GodotEnv

You can install Godot automatically by specifying a Godot version the way it appears [here][godot-sharp-version].

```sh
godotenv godot install 4.0.1
```

:::caution
GodotEnv targets the [.NET 6 SDK][net6] for maximum compatibility, so you'll need to make sure you have it installed or you won't be able to run it.
:::

### 😓 Installing Manually

If you're not convinced, you can always [download Godot][download-godot] manually and install it wherever you'd like.

### 📍 Godot Installation Path

If you're using GodotEnv, Godot versions will automatically be installed in the following locations:

<Tabs groupId="os">
  <TabItem value="macOS">

| Location    | Path                                                                                                      |
| ----------- | --------------------------------------------------------------------------------------------------------- |
| Symlink     | `/Users/{you}/.config/godotenv/godot/bin`                                                                 |
| Actual Path | `/Users/{you}/.config/godotenv/godot/versions/godot_dotnet_{version}/Godot_mono.app/Contents/MacOS/Godot` |

  </TabItem>
  <TabItem value="Linux">

| Location    | Path                                                                                                                                                     |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Symlink     | `/home/{you}/.config/godotenv/godot/bin`                                                                                                                 |
| Actual Path | `/home/{you}/.config/godotenv/godot/versions/godot_dotnet_{version}/Godot_v{version}-stable_mono_linux_x86_64/Godot_v{version}-stable_mono_linux.x86_64` |

  </TabItem>
  <TabItem value="Windows">

| Location    | Path                                                                                                                                                      |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Symlink     | `C:\Users\{you}\AppData\Roaming\godotenv\godot\bin`                                                                                                       |
| Actual Path | `C:\Users\{you}\AppData\Roaming\godotenv\godot\versions\godot_dotnet_{version}\Godot_v{version}-stable_mono_win64\Godot_v{version}-stable_mono_win64.exe` |

  </TabItem>
</Tabs>

:::caution
All Chickensoft templates and [VSCode launch configurations][vscode-launch] rely on an environment variable named `GODOT` that contains the path to the version of Godot you'd like to use.

**GodotEnv will automatically update your environment variables** by updating the `~/.zshrc` file on macOS or the `~/.bashrc` file on Linux to point to its symlink which in turn points to the active version of Godot. On Windows, GodotEnv will automatically attempt to update the environment variable with the relevant command prompt commands with requested admin privileges.

❗️ **You will have to logout and login again after environment variables have been updated for all applications to see the updated values.**

If you're not using GodotEnv or want to double check that the variable exists, please make sure you've setup the environment variables as follows:
<Tabs groupId="os">
<TabItem value="macOS">

In your `~/.zshrc` file, make sure something like the following exists.

```sh
# This should be added to your ~/.zshrc file by GodotEnv automatically, but
# you can also add it manually and change the path of Godot to match
# your system.
export GODOT="/Users/{you}/.config/godotenv/godot/bin"
```

  </TabItem>
  <TabItem value="Linux">

In your `~/.bashrc` file, make sure something like the following exists.

```sh
# This should be added to your ~/.zshrc file by GodotEnv automatically, but
# you can also add it manually and change the path of Godot to match
# your system.
export GODOT="/home/{you}/.config/godotenv/godot/bin"
```

  </TabItem>
  <TabItem value="Windows">

Windows has a visual editor for updating environment variables. See [this article][win-env-vars].

  </TabItem>
</Tabs>
:::

If you're installing manually, consider placing it in one of the following locations:

<Tabs groupId="os">
  <TabItem value="macOS">

Move Godot to `/Applications/Godot_mono.app`. This is where all your other
Mac apps are, anyways!

  </TabItem>
  <TabItem value="Linux">

If you're using Linux, you probably have your own opinion on where to put
it. If you're not sure, you can place the Godot executable (and its
supporting files) in its own folder inside your user folder: `/home/Godot`.

  </TabItem>
  <TabItem value="Windows">

On Windows, you can place Godot and any supporting files at `C:\Godot\Godot_mono.exe` or in its own
folder in your user folder: `C:\Users\{you}\Godot`.

  </TabItem>
</Tabs>

## ⌨️ Visual Studio Code

All of Chickensoft's packages and templates are designed to work well with Visual Studio Code (VSCode).

You can download [Visual Studio Code][vscode] here.

### 🔌 VSCode Extensions

At the very least, you'll need the [`ms-dotnettools.csharp`][vscode-csharp] extension. Chickensoft also [recommends a handful of other extensions][vscode-recommended] that make development easier.

The VSCode C# extension contains a set of open source tools, editor integrations, and libraries collectively known as [OmniSharp] that enable a pleasant C# development experience in VSCode.

:::danger
Unfortunately, because Microsoft is trying to be evil, [they've turned off OmniSharp by default][bad-csharp-dev-kit] and started adding in their own closed-source tools to claw back control from the open source community. Shame on them!

We actually need Omnisharp for Godot projects to work — I'm not sure why, but Microsoft's new, evil C# Development Kit doesn't even work as well. 😇
:::

### 💾 VSCode Settings for Godot and C\#

We need to turn OmniSharp back on — it should have never been turned off by default.

Open your [VSCode Settings as a JSON file][vscode-settings] and add the following settings:

```javascript
// Omnisharp is required for using C# with Godot and VSCode.
"dotnet.server.useOmnisharp": true,
// This allows you to click into external code.
"omnisharp.enableDecompilationSupport": true,
// Respect .editorconfig files.
"omnisharp.enableEditorConfigSupport": true,
// Scan the entire project.
"omnisharp.enableMsBuildLoadProjectsOnDemand": false,
// Find all the symbols — or as many/few as your computer can handle.
"omnisharp.maxFindSymbolsItems": 10000,
// Keeps using statements nicely organized.
"omnisharp.organizeImportsOnFormat": true,
// Required for Godot C# development.
"omnisharp.useModernNet": true,
// ------------------------------------------------------------------- //
// Uncomment these and adjust as necessary if you get OmniSharp output
// errors in VSCode. It'll usually say if it needs a specific
// version of the .NET SDK or something.
//
// "omnisharp.sdkPath": "/usr/local/share/dotnet/sdk/6.0.410",
// "omnisharp.sdkVersion": "6.0.410",
```

Chickensoft also recommends the following additional settings for a pleasant C# development experience:

```javascript
"csharp.inlayHints.enableInlayHintsForTypes": true,
"csharp.maxProjectFileCountForDiagnosticAnalysis": 20000,
"csharp.suppressDotnetRestoreNotification": true,
"csharp.suppressHiddenDiagnostics": false,
"csharp.semanticHighlighting.enabled": true,
"dotnet.completion.showCompletionItemsFromUnimportedNamespaces": true,
"editor.semanticHighlighting.enabled": true,

// Draw a line between selected brackets so you can see blocks of code easier.
"editor.guides.bracketPairs": "active",
// Disable this since it conflicts with other C# formatters.
"razor.format.enable": false,

"[csharp]": {
  "editor.codeActionsOnSave": {
    "source.addMissingImports": true,
    "source.fixAll": true,
    "source.organizeImports": true
  },
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.formatOnType": true
},

// To make bash the default terminal on Windows, add these:
"terminal.integrated.defaultProfile.windows": "Git Bash",
"terminal.integrated.profiles.windows": {
  "Command Prompt": {
    "icon": "terminal-cmd",
    "path": [
      "${env:windir}\\Sysnative\\cmd.exe",
      "${env:windir}\\System32\\cmd.exe"
    ]
  },
  "Git Bash": {
    "icon": "terminal",
    "source": "Git Bash"
  },
  "PowerShell": {
    "icon": "terminal-powershell",
    "source": "PowerShell"
  }
}
```

Finally, C#'s semantic highlighting is a bit funky, so you can fix that by adding these color adjustments:

<details>
<summary>C# Semantic Syntax Highlighting Color Correction Settings</summary>

```csharp
"editor.tokenColorCustomizations": {
  "[*Dark*]": {
    // Themes that include the word "Dark" in them.
    "textMateRules": [
      {
        "scope": "comment.documentation",
        "settings": {
          "foreground": "#608B4E"
        }
      },
      {
        "scope": "comment.documentation.attribute",
        "settings": {
          "foreground": "#C8C8C8"
        }
      },
      {
        "scope": "comment.documentation.cdata",
        "settings": {
          "foreground": "#E9D585"
        }
      },
      {
        "scope": "comment.documentation.delimiter",
        "settings": {
          "foreground": "#808080"
        }
      },
      {
        "scope": "comment.documentation.name",
        "settings": {
          "foreground": "#569CD6"
        }
      }
    ]
  },
  "[*Light*]": {
    // Themes that include the word "Light" in them.
    "textMateRules": [
      {
        "scope": "comment.documentation",
        "settings": {
          "foreground": "#008000"
        }
      },
      {
        "scope": "comment.documentation.attribute",
        "settings": {
          "foreground": "#282828"
        }
      },
      {
        "scope": "comment.documentation.cdata",
        "settings": {
          "foreground": "#808080"
        }
      },
      {
        "scope": "comment.documentation.delimiter",
        "settings": {
          "foreground": "#808080"
        }
      },
      {
        "scope": "comment.documentation.name",
        "settings": {
          "foreground": "#808080"
        }
      }
    ]
  },
  "[*]": {
    // Themes that don't include the word "Dark" or "Light" in them.
    // These are some bold colors that show up well against most dark and
    // light themes.
    //
    // Change them to something that goes well with your preferred theme :)
    "textMateRules": [
      {
        "scope": "comment.documentation",
        "settings": {
          "foreground": "#0091ff"
        }
      },
      {
        "scope": "comment.documentation.attribute",
        "settings": {
          "foreground": "#8480ff"
        }
      },
      {
        "scope": "comment.documentation.cdata",
        "settings": {
          "foreground": "#0091ff"
        }
      },
      {
        "scope": "comment.documentation.delimiter",
        "settings": {
          "foreground": "#aa00ff"
        }
      },
      {
        "scope": "comment.documentation.name",
        "settings": {
          "foreground": "#ef0074"
        }
      }
    ]
  }
},
```

</details>

## ✨ Creating Godot Projects

Chickensoft provides a few `dotnet new` templates to help you quickly create a C# projects for use with Godot 4.

Now that you've configured your environment (and hopefully rebooted since then), you should be able to use the `dotnet` tool from your terminal to be able to install Chickensoft's development templates.

```sh
dotnet new install Chickensoft.GodotGame
dotnet new install Chickensoft.GodotPackage
```

### 🎮 Creating a Godot Game

The GodotGame template allows you to quickly generate a game with debug launch configurations for VSCode, testing (locally and on CI/CD), code coverage, dependency update checks, and spell checking!

<Spacer><GithubCard profile='chickensoft-games' repo='GodotGame' logo='/img/chickensoft/godot_game.svg'/></Spacer>

To create a new game, simply run the following commands and open the resulting directory in Godot and VSCode.

```sh
dotnet new chickengame --name "MyGameName" --param:author "My Name"

cd MyGameName
dotnet restore
```

🥳 At last — you're finally ready to make a game!

### 📦 Creating a Reusable Nuget Package

If you want to share compiled source code between projects or allow others to use your code in their projects, you can release a Nuget package.

Using the GodotPackage template allows you to setup a package with continuous integration, auto-formatting, debugger profiles for VSCode, and a pre-configured unit test project.

<Spacer><GithubCard profile='chickensoft-games' repo='GodotPackage' logo='/img/chickensoft/package.svg'/></Spacer>

```sh
dotnet new --install Chickensoft.GodotPackage

dotnet new chickenpackage --name "MyPackageName" --param:author "My Name"

cd MyPackageName
/path/to/godot4 --headless --build-solutions --quit
dotnet build
```

Open the new project in VSCode and use the provided launch configurations to debug your application.

:::tip
If you need to share code **and** other resource files like scenes, textures, music, and anything else that isn't a C# source file, you should use a Godot Asset Library package instead. Chickensoft's [GodotEnv] CLI tool allows you to easily install and manage addons in your project.

<Spacer><GithubCard profile='chickensoft-games' repo='GodotEnv' logo='/img/chickensoft/godot_env.png'/></Spacer>
:::

[download-godot]: https://downloads.tuxfamily.org/godotengine/
[vscode]: https://code.visualstudio.com
[vs-2022]: https://visualstudio.microsoft.com/downloads/
[win-env-vars]: https://github.com/sindresorhus/guides/blob/main/set-environment-variables.md#windows-7-and-8
[GodotEnv]: https://github.com/chickensoft-games/GodotEnv
[dotnet-sdk]: https://dotnet.microsoft.com/en-us/download/dotnet
[net8-release-notes]: https://github.com/dotnet/core/blob/main/release-notes/8.0/install-windows.md
[TuxFamily]: https://downloads.tuxfamily.org/godotengine/
[git]: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
[git-started]: https://www.atlassian.com/git/tutorials/what-is-version-control
[GitHub]: https://github.com
[GitLab]: https://gitlab.com
[git-undo]: https://www.atlassian.com/git/tutorials/undoing-changes
[git-advanced]: https://www.atlassian.com/git/tutorials/advanced-overview
[bash-beginners]: https://linuxconfig.org/bash-scripting-tutorial-for-beginners
[bash-thorough]: https://tldp.org/LDP/Bash-Beginners-Guide/html/index.html
[vscode-bash]: https://stackoverflow.com/a/70407051
[discord]: https://discord.gg/MjA6HUzzAE
[vscode-launch]: https://code.visualstudio.com/Docs/editor/debugging#_launch-configurations
[vscode-csharp]: https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp
[vscode-recommended]: https://github.com/chickensoft-games/GodotGame/blob/main/.vscode/extensions.json
[bad-csharp-dev-kit]: https://devblogs.microsoft.com/visualstudio/announcing-csharp-dev-kit-for-visual-studio-code/#getting-started-with-c-dev-kit
[vscode-settings]: https://stackoverflow.com/a/65909052
[OmniSharp]: http://www.omnisharp.net/
[godot-sharp-version]: https://www.nuget.org/packages/GodotSharp/
[net6]: https://dotnet.microsoft.com/en-us/download/dotnet/6.0
[net7]: https://dotnet.microsoft.com/en-us/download/dotnet/7.0
[net8]: https://dotnet.microsoft.com/en-us/download/dotnet/8.0

"use strict";(self.webpackChunkchickensoft_site=self.webpackChunkchickensoft_site||[]).push([[581],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),c=a,h=u["".concat(l,".").concat(c)]||u[c]||m[c]||i;return n?o.createElement(h,r(r({ref:t},p),{},{components:n})):o.createElement(h,r({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=n(7462),a=(n(7294),n(3905));const i={title:"\ud83c\udfc1 Godot C# Setup Guide",sidebar_position:1,image:"./header.jpg"},r=void 0,s={unversionedId:"setup",id:"setup",title:"\ud83c\udfc1 Godot C# Setup Guide",description:"If you have the .NET SDK installed, Godot 4 provides a pretty good out-of-the-box development experience \u2014 but you'll need to follow some additional steps if you want to configure your environment to simplify IDE integration and command-line usage.",source:"@site/docs/setup.md",sourceDirName:".",slug:"/setup",permalink:"/docs/setup",draft:!1,editUrl:"https://github.com/chickensoft-games/chickensoft_site/tree/main/docs/setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\ud83c\udfc1 Godot C# Setup Guide",sidebar_position:1,image:"./header.jpg"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc23 Chickensoft",permalink:"/docs/"},next:{title:"\ud83d\udd2e SuperNodes",permalink:"/docs/super_nodes/"}},l={image:n(1772).Z},d=[{value:"\ud83d\udce6 Installing the .NET SDK",id:"-installing-the-net-sdk",level:2},{value:"\u23f3 Version Control with Git",id:"-version-control-with-git",level:2},{value:"\ud83d\udda5 Shell Environment",id:"-shell-environment",level:2},{value:"\ud83e\udd16 Installing Godot",id:"-installing-godot",level:2},{value:"\ud83e\uddbe Installing with GodotEnv",id:"-installing-with-godotenv",level:3},{value:"\ud83d\ude13 Installing Manually",id:"-installing-manually",level:3},{value:"\ud83d\udccd Godot Installation Path",id:"-godot-installation-path",level:3},{value:"\u2328\ufe0f Visual Studio Code",id:"\ufe0f-visual-studio-code",level:2},{value:"\ud83d\udd0c VSCode Extensions",id:"-vscode-extensions",level:3},{value:"\ud83d\udcbe VSCode Settings for Godot and C#",id:"-vscode-settings-for-godot-and-c",level:3},{value:"\u2728 Creating Godot Projects",id:"-creating-godot-projects",level:2},{value:"\ud83c\udfae Creating a Godot Game",id:"-creating-a-godot-game",level:3},{value:"\ud83d\udce6 Creating a Reusable Nuget Package",id:"-creating-a-reusable-nuget-package",level:3}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},m=p("Tabs"),u=p("TabItem"),c=p("Spacer"),h=p("GithubCard"),g={toc:d};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you have the .NET SDK installed, Godot 4 provides a pretty good out-of-the-box development experience \u2014 but you'll need to follow some additional steps if you want to configure your environment to simplify IDE integration and command-line usage."),(0,a.kt)("p",null,"Ready to make games with Godot and C#? Let's start by making sure your development environment is ready to go!"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you get stuck on a step or want to inform us about incorrect or outdated documentation, please ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/MjA6HUzzAE"},"join us on Discord"),".")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This guide is specific to ",(0,a.kt)("strong",{parentName:"p"},"Godot 4")," \u2014 all Chickensoft packages have officially migrated to Godot 4.")),(0,a.kt)("h2",{id:"-installing-the-net-sdk"},"\ud83d\udce6 Installing the .NET SDK"),(0,a.kt)("p",null,"To use Godot 4, we recommend installing the ",(0,a.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/en-us/download/dotnet/8.0"},".NET 8 SDK"),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can install multiple versions of the .NET SDK. C# tooling is (generally) intelligent enough to pick the correct version based on the target framework of the project, the ",(0,a.kt)("inlineCode",{parentName:"p"},"global.json")," file, and other settings in Godot. If you're running into issues with SDK resolution, feel free to reach out in ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/MjA6HUzzAE"},"Discord"),"."),(0,a.kt)("p",{parentName:"admonition"},"It probably won't hurt to install the ",(0,a.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/en-us/download/dotnet/6.0"},".NET 6 SDK")," and/or ",(0,a.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/en-us/download/dotnet/7.0"},".NET 7 SDK"),", too \u2014 having .NET 6, 7, and 8 will allow you to run a variety of C# projects and tools.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"We often write file paths like ",(0,a.kt)("inlineCode",{parentName:"p"},"~/folder"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"~")," is a shortcut for your home folder. On Windows, ",(0,a.kt)("inlineCode",{parentName:"p"},"~")," expands to something like ",(0,a.kt)("inlineCode",{parentName:"p"},"C:\\Users\\you"),". On macOS, ",(0,a.kt)("inlineCode",{parentName:"p"},"~")," expands to ",(0,a.kt)("inlineCode",{parentName:"p"},"/Users/you"),". On Linux, ",(0,a.kt)("inlineCode",{parentName:"p"},"~")," expands to ",(0,a.kt)("inlineCode",{parentName:"p"},"/home/you"),". For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"~/Documents")," expands to ",(0,a.kt)("inlineCode",{parentName:"p"},"C:\\Users\\you\\Documents")," on Windows, ",(0,a.kt)("inlineCode",{parentName:"p"},"/Users/you/Documents")," on macOS, and ",(0,a.kt)("inlineCode",{parentName:"p"},"/home/you/Documents")," on Linux.")),(0,a.kt)(m,{groupId:"os",mdxType:"Tabs"},(0,a.kt)(u,{value:"macOS",mdxType:"TabItem"},(0,a.kt)("p",null,"Use the ",(0,a.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/en-us/download/dotnet/8.0"},"Microsoft provided\ninstaller")," to\ninstall the .NET SDK on macOS. For more information about installing the .NET SDK on Mac, see ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/core/install/macos"},"Microsoft's article for\nMac"),".")),(0,a.kt)(u,{value:"Linux",mdxType:"TabItem"},(0,a.kt)("p",null,"There's a few gotchas to be aware of when installing the .NET SDK on\nLinux, so please see ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/core/install/linux"},"Microsoft's article for\nLinux"),".")),(0,a.kt)(u,{value:"Windows",mdxType:"TabItem"},(0,a.kt)("p",null,"Open PowerShell as an administrator and use ",(0,a.kt)("inlineCode",{parentName:"p"},"winget")," to install the .NET 8\nSDK: ",(0,a.kt)("inlineCode",{parentName:"p"},"winget install dotnet-sdk-8")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"winget upgrade")," to upgrade an existing installation). For more information about\ninstalling the .NET SDK on Windows, see ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/core/install/windows"},"Microsoft's article for\nWindows")," or the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dotnet/core/blob/main/release-notes/8.0/install-windows.md"},"release notes"),"."),(0,a.kt)("p",null,"You can also install the .NET SDK using the ",(0,a.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/en-us/download/dotnet/8.0"},"Microsoft provided installer"),", or through ",(0,a.kt)("a",{parentName:"p",href:"https://visualstudio.microsoft.com/downloads/"},"Visual Studio 2022 Community Edition"),"."))),(0,a.kt)("p",null,"If you want to install the .NET SDK manually, you can find ",(0,a.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/en-us/download/dotnet"},"all available downloads here"),"."),(0,a.kt)("p",null,"The .NET SDK installers and package managers tend to place it in a standard location on each platform \u2014 if you install it manually, make sure you make a note of where you installed it to. We'll need that later."),(0,a.kt)("h2",{id:"-version-control-with-git"},"\u23f3 Version Control with Git"),(0,a.kt)("p",null,"You should ",(0,a.kt)("strong",{parentName:"p"},"absolutely")," be using a version control system to track your game's code and assets: specifically, ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},"git"),"."),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"\ud83d\udd25\ud83d\udd25\ud83d\udd25 Mistakes get made, tools can accidentally clear out files, scene references can get broken \u2014 bad stuff happens during the chaos of development."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Git allows you to go back in time and undo unwanted changes"),", which is invaluable if you'd prefer development not be nightmare-inducing \ud83d\ude31. It also lets you collaborate with others easily and store your code in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com"},"GitHub"),", ",(0,a.kt)("a",{parentName:"p",href:"https://gitlab.com"},"GitLab"),", and other such git-related services."),(0,a.kt)("p",{parentName:"admonition"},"While learning git can seem daunting, it is absolutely your responsibility as a game developer to protect your valuable time and work, and using git is a mandatory part of the experience that enables you to do just that. ",(0,a.kt)("strong",{parentName:"p"},"Game development is extremely hard, so don't make it harder on yourself by leaving your work unprotected"),". \ud83d\udd25\ud83d\udd25\ud83d\udd25"),(0,a.kt)("p",{parentName:"admonition"},"Be sure to bookmark the ",(0,a.kt)("a",{parentName:"p",href:"https://www.atlassian.com/git/tutorials/undoing-changes"},"Undoing Changes in Git")," section to prevent panic during your next crisis. Messing up is not a matter of ",(0,a.kt)("strong",{parentName:"p"},"if"),", it's a matter of ",(0,a.kt)("strong",{parentName:"p"},"when")," \u2014 so be prepared.")),(0,a.kt)("p",null,"Properly learning and using git is a skill that gradually accrues over a lifetime of development, but ",(0,a.kt)("a",{parentName:"p",href:"https://www.atlassian.com/git/tutorials/what-is-version-control"},"the basics aren't too hard"),", and using ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com"},"Visual Studio Code")," can allow you to do it without ever really having to touch a command-line, for the most part."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Even if you're already using git, but you're not entirely comfortable with it, take a look at the aforementioned ",(0,a.kt)("a",{parentName:"p",href:"https://www.atlassian.com/git/tutorials/what-is-version-control"},"git beginner guide")," \u2014 this is the best guide, in my opinion, and the one I recommend to junior engineers all the time. You can jump straight into the ",(0,a.kt)("a",{parentName:"p",href:"https://www.atlassian.com/git/tutorials/advanced-overview"},"advanced tips")," for anything you might be unsure about.")),(0,a.kt)("h2",{id:"-shell-environment"},"\ud83d\udda5 Shell Environment"),(0,a.kt)("p",null,"Let's setup the shell environment to contain environment variables that point to Godot and the .NET SDK. This will allow you to run Godot and the ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet")," command line tool from anywhere, making Godot game development easier than ever."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("h3",{parentName:"admonition",id:"-which-shell-should-i-use"},"\ud83d\udc69\u200d\ud83d\udcbb Which shell should I use?"),(0,a.kt)("p",{parentName:"admonition"},"For the sake of consistency, Chickensoft officially recommends using a bash shell on every OS, ",(0,a.kt)("em",{parentName:"p"},"especially")," if you are developing your game to be cross-platform on macOS, Windows, and Linux \u2014 which is pretty easy to do with Godot, once your environments are setup correctly."),(0,a.kt)("p",{parentName:"admonition"},"Since a bash shell is not available on Windows by default, you can access one by installing ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},"git"),", which includes the Git Bash for Windows application. You can also configure the Windows Terminal (there's an option to add a Windows Terminal profile in the git installer) and ",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/70407051"},"VSCode to use bash")," by default."),(0,a.kt)("p",{parentName:"admonition"},"Bash is a bit esoteric, but you can ",(0,a.kt)("a",{parentName:"p",href:"https://linuxconfig.org/bash-scripting-tutorial-for-beginners"},"easily learn the basics of bash that you'll need")," pretty quickly. Or you can dive in and ",(0,a.kt)("a",{parentName:"p",href:"https://tldp.org/LDP/Bash-Beginners-Guide/html/index.html"},"read the whole book on bash"),".")),(0,a.kt)("p",null,"Once we do this, we'll be able to run Godot from a terminal and create the proper launch configurations for Visual Studio Code."),(0,a.kt)(m,{groupId:"os",mdxType:"Tabs"},(0,a.kt)(u,{value:"macOS",mdxType:"TabItem"},(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.zshrc")," doesn't exist, you'll need to create it."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To toggle visibility of hidden files in the macOS Finder, press ",(0,a.kt)("inlineCode",{parentName:"p"},"Cmd + Shift + .")," \u2014 it also works in file dialogs!")),(0,a.kt)("p",null,"Add the following to your ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.zshrc")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'# .NET SDK Configuration\nexport DOTNET_CLI_TELEMETRY_OPTOUT=1 # Disable analytics\nexport DOTNET_ROOT="/usr/local/share/dotnet"\nexport DOTNET_ROLL_FORWARD_TO_PRERELEASE=1\n\n# Add the .NET SDK to the system paths so we can use the `dotnet` tool.\nexport PATH="/usr/local/share/dotnet:$PATH"\nexport PATH="/usr/local/share/dotnet/sdk:$PATH"\nexport PATH="$HOME/.dotnet/tools:$PATH"\n# For .net 6:\nexport PATH="/usr/local/share/dotnet:/usr/local/share/dotnet/sdk:$PATH"\n\n# Run this if you ever run into errors while doing a `dotnet restore`\nalias nugetclean="dotnet nuget locals --clear all"\n'))),(0,a.kt)(u,{value:"Linux",mdxType:"TabItem"},(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.bashrc")," doesn't exist, you'll need to create it. Add the following to the file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'# .NET SDK Configuration\nexport DOTNET_CLI_TELEMETRY_OPTOUT=1 # Disable analytics\nexport DOTNET_ROOT="/usr/bin/dotnet"\nexport DOTNET_ROLL_FORWARD_TO_PRERELEASE=1\n\n# Add the .NET SDK to the system paths so we can use the `dotnet` tool.\nexport PATH="/usr/bin/dotnet:$PATH"\nexport PATH="/usr/bin/dotnet/sdk:$PATH"\nexport PATH="$HOME/.dotnet/tools:$PATH"\n\n# Run this if you ever run into errors while doing a `dotnet restore`\nalias nugetclean="dotnet nuget locals --clear all"\n'))),(0,a.kt)(u,{value:"Windows",mdxType:"TabItem"},(0,a.kt)("p",null,"In Windows, when using the bash shell that comes with Git (Git Bash), you can place your shell configuration in ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.bash_profile"),". In the file, add the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'# .NET SDK Configuration\nexport DOTNET_CLI_TELEMETRY_OPTOUT=1 # Disable analytics\nexport DOTNET_ROOT="C:\\\\Program Files\\\\dotnet\\\\"\nexport DOTNET_ROLL_FORWARD_TO_PRERELEASE=1\n\n# Add the .NET SDK to the system paths so we can use the `dotnet` tool.\nexport PATH="C:\\\\Program Files\\\\dotnet:$PATH"\nexport PATH="C:\\\\Program Files\\\\dotnet\\\\sdk:$PATH"\nexport PATH="$HOME\\\\.dotnet\\\\tools:$PATH"\n\n# Run this if you ever run into errors while doing a `dotnet restore`\nalias nugetclean="dotnet nuget locals --clear all"\n')))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Depending on how you install the .NET SDK, you may or may not need to add them to your path in ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.bashrc")," (linux) or ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.zshrc")," (macOS). You can run ",(0,a.kt)("inlineCode",{parentName:"p"},"which dotnet")," in a bash shell to see if they're already in your path. If they are, remove the ",(0,a.kt)("inlineCode",{parentName:"p"},"export PATH")," lines for them."),(0,a.kt)("p",{parentName:"admonition"},"Make sure the paths to the .NET SDK and Godot match where those tools were installed on your particular system, since it might be different if you installed them manually.")),(0,a.kt)("h2",{id:"-installing-godot"},"\ud83e\udd16 Installing Godot"),(0,a.kt)("p",null,"You can use Chickensoft's command-line tool, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/chickensoft-games/GodotEnv"},"GodotEnv"),", to manage Godot versions locally on your machine (as well as manage Godot asset library addons in your project)."),(0,a.kt)(c,{mdxType:"Spacer"},(0,a.kt)(h,{profile:"chickensoft-games",repo:"GodotEnv",logo:"/img/chickensoft/godot_env.png",mdxType:"GithubCard"})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Using GodotEnv to install and manage Godot on your system provides a number of advantages:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u2705 Automatically download, extract, and install any requested Godot 4.x+ version (with or without .NET support) from the Godot ",(0,a.kt)("a",{parentName:"p",href:"https://downloads.tuxfamily.org/godotengine/"},"TuxFamily")," downloads mirror.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u2705 Automatically manage symlink on your system that point to the version of Godot you'd like to use. The symlink path never changes \u2014 just the version it points to."),(0,a.kt)("p",{parentName:"li"},"On Windows, maintaining symlinks requires administrator privileges, making it a hassle to manage by hand. GodotEnv integrates with Windows' User Access Control (UAC) to automatically request admin privileges when needed.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u2705 Adds a system ",(0,a.kt)("inlineCode",{parentName:"p"},"GODOT")," environment variable that points to the symlink location, ensuring you can run Godot from anywhere on your system, in any shell.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u2705 Standardizes installation locations across platforms and machines, making it easier to collaborate with other teammates.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u2705 Quickly change the system Godot version to any installed version, as well as listing all the installed versions.")))),(0,a.kt)("p",null,"To install GodotEnv, run the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"dotnet tool install --global Chickensoft.GodotEnv\n")),(0,a.kt)("h3",{id:"-installing-with-godotenv"},"\ud83e\uddbe Installing with GodotEnv"),(0,a.kt)("p",null,"You can install Godot automatically by specifying a Godot version the way it appears ",(0,a.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/GodotSharp/"},"here"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"godotenv godot install 4.0.1\n")),(0,a.kt)("h3",{id:"-installing-manually"},"\ud83d\ude13 Installing Manually"),(0,a.kt)("p",null,"If you're not convinced, you can always ",(0,a.kt)("a",{parentName:"p",href:"https://downloads.tuxfamily.org/godotengine/"},"download Godot")," manually and install it wherever you'd like."),(0,a.kt)("h3",{id:"-godot-installation-path"},"\ud83d\udccd Godot Installation Path"),(0,a.kt)("p",null,"If you're using GodotEnv, Godot versions will automatically be installed in the following locations:"),(0,a.kt)(m,{groupId:"os",mdxType:"Tabs"},(0,a.kt)(u,{value:"macOS",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Location"),(0,a.kt)("th",{parentName:"tr",align:null},"Path"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Symlink"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/Users/{you}/.config/godotenv/godot/bin"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Actual Path"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/Users/{you}/.config/godotenv/godot/versions/godot_dotnet_{version}/Godot_mono.app/Contents/MacOS/Godot")))))),(0,a.kt)(u,{value:"Linux",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Location"),(0,a.kt)("th",{parentName:"tr",align:null},"Path"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Symlink"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/home/{you}/.config/godotenv/godot/bin"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Actual Path"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/home/{you}/.config/godotenv/godot/versions/godot_dotnet_{version}/Godot_v{version}-stable_mono_linux_x86_64/Godot_v{version}-stable_mono_linux.x86_64")))))),(0,a.kt)(u,{value:"Windows",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Location"),(0,a.kt)("th",{parentName:"tr",align:null},"Path"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Symlink"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"C:\\Users\\{you}\\AppData\\Roaming\\godotenv\\godot\\bin"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Actual Path"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"C:\\Users\\{you}\\AppData\\Roaming\\godotenv\\godot\\versions\\godot_dotnet_{version}\\Godot_v{version}-stable_mono_win64\\Godot_v{version}-stable_mono_win64.exe"))))))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"All Chickensoft templates and ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/Docs/editor/debugging#_launch-configurations"},"VSCode launch configurations")," rely on an environment variable named ",(0,a.kt)("inlineCode",{parentName:"p"},"GODOT")," that contains the path to the version of Godot you'd like to use."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"GodotEnv will automatically update your environment variables")," by updating the ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.zshrc")," file on macOS or the ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.bashrc")," file on Linux to point to its symlink which in turn points to the active version of Godot. On Windows, GodotEnv will automatically attempt to update the environment variable with the relevant command prompt commands with requested admin privileges."),(0,a.kt)("p",{parentName:"admonition"},"\u2757\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"You will have to logout and login again after environment variables have been updated for all applications to see the updated values.")),(0,a.kt)("p",{parentName:"admonition"},"If you're not using GodotEnv or want to double check that the variable exists, please make sure you've setup the environment variables as follows:"),(0,a.kt)(m,{groupId:"os",mdxType:"Tabs"},(0,a.kt)(u,{value:"macOS",mdxType:"TabItem"},(0,a.kt)("p",{parentName:"admonition"},"In your ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.zshrc")," file, make sure something like the following exists."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'# This should be added to your ~/.zshrc file by GodotEnv automatically, but\n# you can also add it manually and change the path of Godot to match\n# your system.\nexport GODOT="/Users/{you}/.config/godotenv/godot/bin"\n')),"  "),(0,a.kt)(u,{value:"Linux",mdxType:"TabItem"},(0,a.kt)("p",{parentName:"admonition"},"In your ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.bashrc")," file, make sure something like the following exists."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'# This should be added to your ~/.zshrc file by GodotEnv automatically, but\n# you can also add it manually and change the path of Godot to match\n# your system.\nexport GODOT="/home/{you}/.config/godotenv/godot/bin"\n')),"  "),(0,a.kt)(u,{value:"Windows",mdxType:"TabItem"},(0,a.kt)("p",{parentName:"admonition"},"Windows has a visual editor for updating environment variables. See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sindresorhus/guides/blob/main/set-environment-variables.md#windows-7-and-8"},"this article"),"."),"  "))),(0,a.kt)("p",null,"If you're installing manually, consider placing it in one of the following locations:"),(0,a.kt)(m,{groupId:"os",mdxType:"Tabs"},(0,a.kt)(u,{value:"macOS",mdxType:"TabItem"},(0,a.kt)("p",null,"Move Godot to ",(0,a.kt)("inlineCode",{parentName:"p"},"/Applications/Godot_mono.app"),". This is where all your other\nMac apps are, anyways!")),(0,a.kt)(u,{value:"Linux",mdxType:"TabItem"},(0,a.kt)("p",null,"If you're using Linux, you probably have your own opinion on where to put\nit. If you're not sure, you can place the Godot executable (and its\nsupporting files) in its own folder inside your user folder: ",(0,a.kt)("inlineCode",{parentName:"p"},"/home/Godot"),".")),(0,a.kt)(u,{value:"Windows",mdxType:"TabItem"},(0,a.kt)("p",null,"On Windows, you can place Godot and any supporting files at ",(0,a.kt)("inlineCode",{parentName:"p"},"C:\\Godot\\Godot_mono.exe")," or in its own\nfolder in your user folder: ",(0,a.kt)("inlineCode",{parentName:"p"},"C:\\Users\\{you}\\Godot"),"."))),(0,a.kt)("h2",{id:"\ufe0f-visual-studio-code"},"\u2328\ufe0f Visual Studio Code"),(0,a.kt)("p",null,"All of Chickensoft's packages and templates are designed to work well with Visual Studio Code (VSCode)."),(0,a.kt)("p",null,"You can download ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com"},"Visual Studio Code")," here."),(0,a.kt)("h3",{id:"-vscode-extensions"},"\ud83d\udd0c VSCode Extensions"),(0,a.kt)("p",null,"At the very least, you'll need the ",(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp"},(0,a.kt)("inlineCode",{parentName:"a"},"ms-dotnettools.csharp"))," extension. Chickensoft also ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/chickensoft-games/GodotGame/blob/main/.vscode/extensions.json"},"recommends a handful of other extensions")," that make development easier."),(0,a.kt)("p",null,"The VSCode C# extension contains a set of open source tools, editor integrations, and libraries collectively known as ",(0,a.kt)("a",{parentName:"p",href:"http://www.omnisharp.net/"},"OmniSharp")," that enable a pleasant C# development experience in VSCode."),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Unfortunately, because Microsoft is trying to be evil, ",(0,a.kt)("a",{parentName:"p",href:"https://devblogs.microsoft.com/visualstudio/announcing-csharp-dev-kit-for-visual-studio-code/#getting-started-with-c-dev-kit"},"they've turned off OmniSharp by default")," and started adding in their own closed-source tools to claw back control from the open source community. Shame on them!"),(0,a.kt)("p",{parentName:"admonition"},"We actually need Omnisharp for Godot projects to work \u2014 I'm not sure why, but Microsoft's new, evil C# Development Kit doesn't even work as well. \ud83d\ude07")),(0,a.kt)("h3",{id:"-vscode-settings-for-godot-and-c"},"\ud83d\udcbe VSCode Settings for Godot and C","#"),(0,a.kt)("p",null,"We need to turn OmniSharp back on \u2014 it should have never been turned off by default."),(0,a.kt)("p",null,"Open your ",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/65909052"},"VSCode Settings as a JSON file")," and add the following settings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// Omnisharp is required for using C# with Godot and VSCode.\n"dotnet.server.useOmnisharp": true,\n// This allows you to click into external code.\n"omnisharp.enableDecompilationSupport": true,\n// Respect .editorconfig files.\n"omnisharp.enableEditorConfigSupport": true,\n// Scan the entire project.\n"omnisharp.enableMsBuildLoadProjectsOnDemand": false,\n// Find all the symbols \u2014 or as many/few as your computer can handle.\n"omnisharp.maxFindSymbolsItems": 10000,\n// Keeps using statements nicely organized.\n"omnisharp.organizeImportsOnFormat": true,\n// Required for Godot C# development.\n"omnisharp.useModernNet": true,\n// ------------------------------------------------------------------- //\n// Uncomment these and adjust as necessary if you get OmniSharp output\n// errors in VSCode. It\'ll usually say if it needs a specific\n// version of the .NET SDK or something.\n//\n// "omnisharp.sdkPath": "/usr/local/share/dotnet/sdk/6.0.410",\n// "omnisharp.sdkVersion": "6.0.410",\n')),(0,a.kt)("p",null,"Chickensoft also recommends the following additional settings for a pleasant C# development experience:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'"csharp.inlayHints.enableInlayHintsForTypes": true,\n"csharp.maxProjectFileCountForDiagnosticAnalysis": 20000,\n"csharp.suppressDotnetRestoreNotification": true,\n"csharp.suppressHiddenDiagnostics": false,\n"csharp.semanticHighlighting.enabled": true,\n"dotnet.completion.showCompletionItemsFromUnimportedNamespaces": true,\n"editor.semanticHighlighting.enabled": true,\n\n// Draw a line between selected brackets so you can see blocks of code easier.\n"editor.guides.bracketPairs": "active",\n// Disable this since it conflicts with other C# formatters.\n"razor.format.enable": false,\n\n"[csharp]": {\n  "editor.codeActionsOnSave": {\n    "source.addMissingImports": true,\n    "source.fixAll": true,\n    "source.organizeImports": true\n  },\n  "editor.formatOnPaste": true,\n  "editor.formatOnSave": true,\n  "editor.formatOnType": true\n},\n\n// To make bash the default terminal on Windows, add these:\n"terminal.integrated.defaultProfile.windows": "Git Bash",\n"terminal.integrated.profiles.windows": {\n  "Command Prompt": {\n    "icon": "terminal-cmd",\n    "path": [\n      "${env:windir}\\\\Sysnative\\\\cmd.exe",\n      "${env:windir}\\\\System32\\\\cmd.exe"\n    ]\n  },\n  "Git Bash": {\n    "icon": "terminal",\n    "source": "Git Bash"\n  },\n  "PowerShell": {\n    "icon": "terminal-powershell",\n    "source": "PowerShell"\n  }\n}\n')),(0,a.kt)("p",null,"Finally, C#'s semantic highlighting is a bit funky, so you can fix that by adding these color adjustments:"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"C# Semantic Syntax Highlighting Color Correction Settings"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'"editor.tokenColorCustomizations": {\n  "[*Dark*]": {\n    // Themes that include the word "Dark" in them.\n    "textMateRules": [\n      {\n        "scope": "comment.documentation",\n        "settings": {\n          "foreground": "#608B4E"\n        }\n      },\n      {\n        "scope": "comment.documentation.attribute",\n        "settings": {\n          "foreground": "#C8C8C8"\n        }\n      },\n      {\n        "scope": "comment.documentation.cdata",\n        "settings": {\n          "foreground": "#E9D585"\n        }\n      },\n      {\n        "scope": "comment.documentation.delimiter",\n        "settings": {\n          "foreground": "#808080"\n        }\n      },\n      {\n        "scope": "comment.documentation.name",\n        "settings": {\n          "foreground": "#569CD6"\n        }\n      }\n    ]\n  },\n  "[*Light*]": {\n    // Themes that include the word "Light" in them.\n    "textMateRules": [\n      {\n        "scope": "comment.documentation",\n        "settings": {\n          "foreground": "#008000"\n        }\n      },\n      {\n        "scope": "comment.documentation.attribute",\n        "settings": {\n          "foreground": "#282828"\n        }\n      },\n      {\n        "scope": "comment.documentation.cdata",\n        "settings": {\n          "foreground": "#808080"\n        }\n      },\n      {\n        "scope": "comment.documentation.delimiter",\n        "settings": {\n          "foreground": "#808080"\n        }\n      },\n      {\n        "scope": "comment.documentation.name",\n        "settings": {\n          "foreground": "#808080"\n        }\n      }\n    ]\n  },\n  "[*]": {\n    // Themes that don\'t include the word "Dark" or "Light" in them.\n    // These are some bold colors that show up well against most dark and\n    // light themes.\n    //\n    // Change them to something that goes well with your preferred theme :)\n    "textMateRules": [\n      {\n        "scope": "comment.documentation",\n        "settings": {\n          "foreground": "#0091ff"\n        }\n      },\n      {\n        "scope": "comment.documentation.attribute",\n        "settings": {\n          "foreground": "#8480ff"\n        }\n      },\n      {\n        "scope": "comment.documentation.cdata",\n        "settings": {\n          "foreground": "#0091ff"\n        }\n      },\n      {\n        "scope": "comment.documentation.delimiter",\n        "settings": {\n          "foreground": "#aa00ff"\n        }\n      },\n      {\n        "scope": "comment.documentation.name",\n        "settings": {\n          "foreground": "#ef0074"\n        }\n      }\n    ]\n  }\n},\n'))),(0,a.kt)("h2",{id:"-creating-godot-projects"},"\u2728 Creating Godot Projects"),(0,a.kt)("p",null,"Chickensoft provides a few ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet new")," templates to help you quickly create a C# projects for use with Godot 4."),(0,a.kt)("p",null,"Now that you've configured your environment (and hopefully rebooted since then), you should be able to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet")," tool from your terminal to be able to install Chickensoft's development templates."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"dotnet new install Chickensoft.GodotGame\ndotnet new install Chickensoft.GodotPackage\n")),(0,a.kt)("h3",{id:"-creating-a-godot-game"},"\ud83c\udfae Creating a Godot Game"),(0,a.kt)("p",null,"The GodotGame template allows you to quickly generate a game with debug launch configurations for VSCode, testing (locally and on CI/CD), code coverage, dependency update checks, and spell checking!"),(0,a.kt)(c,{mdxType:"Spacer"},(0,a.kt)(h,{profile:"chickensoft-games",repo:"GodotGame",logo:"/img/chickensoft/godot_game.svg",mdxType:"GithubCard"})),(0,a.kt)("p",null,"To create a new game, simply run the following commands and open the resulting directory in Godot and VSCode."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'dotnet new chickengame --name "MyGameName" --param:author "My Name"\n\ncd MyGameName\ndotnet restore\n')),(0,a.kt)("p",null,"\ud83e\udd73 At last \u2014 you're finally ready to make a game!"),(0,a.kt)("h3",{id:"-creating-a-reusable-nuget-package"},"\ud83d\udce6 Creating a Reusable Nuget Package"),(0,a.kt)("p",null,"If you want to share compiled source code between projects or allow others to use your code in their projects, you can release a Nuget package."),(0,a.kt)("p",null,"Using the GodotPackage template allows you to setup a package with continuous integration, auto-formatting, debugger profiles for VSCode, and a pre-configured unit test project."),(0,a.kt)(c,{mdxType:"Spacer"},(0,a.kt)(h,{profile:"chickensoft-games",repo:"GodotPackage",logo:"/img/chickensoft/package.svg",mdxType:"GithubCard"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'dotnet new --install Chickensoft.GodotPackage\n\ndotnet new chickenpackage --name "MyPackageName" --param:author "My Name"\n\ncd MyPackageName\n/path/to/godot4 --headless --build-solutions --quit\ndotnet build\n')),(0,a.kt)("p",null,"Open the new project in VSCode and use the provided launch configurations to debug your application."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you need to share code ",(0,a.kt)("strong",{parentName:"p"},"and")," other resource files like scenes, textures, music, and anything else that isn't a C# source file, you should use a Godot Asset Library package instead. Chickensoft's ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/chickensoft-games/GodotEnv"},"GodotEnv")," CLI tool allows you to easily install and manage addons in your project."),(0,a.kt)(c,{mdxType:"Spacer"},(0,a.kt)(h,{profile:"chickensoft-games",repo:"GodotEnv",logo:"/img/chickensoft/godot_env.png",mdxType:"GithubCard"}))))}k.isMDXComponent=!0},1772:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/header-0db616fbb83068af1e5bd203bdeabc6e.jpg"}}]);
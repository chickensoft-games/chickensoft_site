"use strict";(self.webpackChunkchickensoft_site=self.webpackChunkchickensoft_site||[]).push([[2948],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(o),m=a,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return o?n.createElement(h,i(i({ref:t},c),{},{components:o})):n.createElement(h,i({ref:t},c))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=o[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},3050:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(7294);function a(e){return n.createElement("figure",{style:{margin:"0px 0px var(--ifm-leading)",textAlign:"center"}},n.createElement("a",{href:e.src},n.createElement("img",{src:e.src,alt:e.alt,style:{width:e.widthOverride?e.widthOverride:"100%"}})),n.createElement("figcaption",{style:{fontSize:"0.8rem",fontStyle:"italic",textAlign:"center"}},e.children))}},5514:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=o(7462),a=(o(7294),o(3905)),r=o(3050);const i={title:"#\ufe0f\u20e3 How C# Works in Godot",sidebar_position:2,image:"../header.jpg"},s=void 0,l={unversionedId:"how_csharp_works_in_godot/how_csharp_works_in_godot",id:"how_csharp_works_in_godot/how_csharp_works_in_godot",title:"#\ufe0f\u20e3 How C# Works in Godot",description:"Understanding how C# is integrated into Godot can provide valuable context that makes it easier to design, understand, and debug games and applications built with Godot.",source:"@site/docs/how_csharp_works_in_godot/how_csharp_works_in_godot.md",sourceDirName:"how_csharp_works_in_godot",slug:"/how_csharp_works_in_godot/",permalink:"/docs/how_csharp_works_in_godot/",draft:!1,editUrl:"https://github.com/chickensoft-games/chickensoft_site/tree/main/docs/how_csharp_works_in_godot/how_csharp_works_in_godot.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"#\ufe0f\u20e3 How C# Works in Godot",sidebar_position:2,image:"../header.jpg"},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udfc1 Godot C# Setup Guide",permalink:"/docs/setup"},next:{title:"\ud83d\udca1 LogicBlocks",permalink:"/docs/logic_blocks/"}},d={},c=[{value:"\ud83d\udd8d\ufe0f The Basics",id:"\ufe0f-the-basics",level:2},{value:"\u270f\ufe0f Namespaces",id:"\ufe0f-namespaces",level:2},{value:"\ud83d\uddbc\ufe0f How Godot Hosts Managed Assemblies",id:"\ufe0f-how-godot-hosts-managed-assemblies",level:2},{value:"\ud83e\udd1d Engine Interop",id:"-engine-interop",level:3},{value:"\ud83c\udf0f Versioning",id:"-versioning",level:3},{value:"\ud83e\udde9 Packages, Assemblies and External Code",id:"-packages-assemblies-and-external-code",level:2},{value:"\ud83d\udce6 External Code",id:"-external-code",level:2},{value:"\ud83d\ude80 Script Assets and Code Files",id:"-script-assets-and-code-files",level:3},{value:"\ud83e\ude86 Modularizing Your Game",id:"-modularizing-your-game",level:3},{value:"\ud83d\udc69\u200d\ud83d\udcbb Development",id:"-development",level:2},{value:"\ud83d\udd70\ufe0f The Future",id:"\ufe0f-the-future",level:2}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Understanding how C# is integrated into Godot can provide valuable context that makes it easier to design, understand, and debug games and applications built with Godot."),(0,a.kt)("h2",{id:"\ufe0f-the-basics"},"\ud83d\udd8d\ufe0f The Basics"),(0,a.kt)("p",null,"When you first add a C# script to a node, Godot makes a few modifications to your project to support C# development."),(0,a.kt)(r.Z,{src:o(9517).Z,alt:"Adding a C# script to a project.",widthOverride:"576px",mdxType:"FancyImage"}),(0,a.kt)("p",null,"First, Godot edits the ",(0,a.kt)("inlineCode",{parentName:"p"},"project.godot")," file to include a reference to the GodotSharp module."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[application]\nconfig/features=PackedStringArray("4.3", "C#", "Mobile")\n')),(0,a.kt)("p",null,"Godot also creates a .NET solution file and C# project file alongside your ",(0,a.kt)("inlineCode",{parentName:"p"},"project.godot")," file in your project's root directory. If your project is called ",(0,a.kt)("inlineCode",{parentName:"p"},"MyGame"),", you will notice ",(0,a.kt)("inlineCode",{parentName:"p"},"MyGame.sln")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"MyGame.csproj")," files. The solution is already configured to point to the C# project file."),(0,a.kt)("p",null,"At this point, you are free to add as many C# scripts and code files as you like, and they will automatically be picked up and compiled whenever you build the project by running ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet build")," or clicking the build icon in Godot."),(0,a.kt)(r.Z,{src:o(4939).Z,alt:".NET project build button inside Godot",mdxType:"FancyImage"}),(0,a.kt)("h2",{id:"\ufe0f-namespaces"},"\u270f\ufe0f Namespaces"),(0,a.kt)("p",null,"Godot does not care what namespaces you use (if any) in your code files, even for scene scripts. You are free to nest namespaces as much as you like (or not use them at all)."),(0,a.kt)("h2",{id:"\ufe0f-how-godot-hosts-managed-assemblies"},"\ud83d\uddbc\ufe0f How Godot Hosts Managed Assemblies"),(0,a.kt)("p",null,"Godot is a native application written largely in C++. To run C# code, Godot leverages Microsoft's ",(0,a.kt)("inlineCode",{parentName:"p"},"nethost")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"hostfxr")," libraries which allow native applications to load and execute .NET assemblies. For more background on this, check out Microsoft's guide aptly titled ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/core/tutorials/netcore-hosting"},'"Write a custom .NET host to control the .NET runtime from your native code"')),(0,a.kt)("h3",{id:"-engine-interop"},"\ud83e\udd1d Engine Interop"),(0,a.kt)("p",null,"Godot uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/godotengine/godot/tree/master/modules/mono/editor/Godot.NET.Sdk/Godot.SourceGenerators"},"custom C# source generators")," to generate the interop bindings between your managed C# code and the engine's native code. When you write a Godot node script class, you can actually see what Godot is generating by adding settings to your ",(0,a.kt)("inlineCode",{parentName:"p"},".csproj")," file which instruct .NET to emit the generated code to a directory. This is generally recommended and allows you to dig into generated code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<Project Sdk="Godot.NET.Sdk/4.3.0">\n  <PropertyGroup>\n    \x3c!-- To show generated files --\x3e\n    <EmitCompilerGeneratedFiles>true</EmitCompilerGeneratedFiles>\n    <CompilerGeneratedFilesOutputPath>.generated</CompilerGeneratedFilesOutputPath>\n    \x3c!-- ... --\x3e\n')),(0,a.kt)("p",null,"If you go looking to see where these source generators are included, you won't find them. Instead, they're implicitly included with ",(0,a.kt)("inlineCode",{parentName:"p"},"Godot.NET.Sdk")," referenced at the top of your project's ",(0,a.kt)("inlineCode",{parentName:"p"},".csproj")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<Project Sdk="Godot.NET.Sdk/4.3.0">\n')),(0,a.kt)("p",null,"Note that sdk's like ",(0,a.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Godot.NET.Sdk"},(0,a.kt)("inlineCode",{parentName:"a"},"Godot.NET.Sdk"))," are just special nuget packages which declare MSBuild targets and properties, package references, etc. When your project is based off an sdk, it inherits the sdk's configuration."),(0,a.kt)("h3",{id:"-versioning"},"\ud83c\udf0f Versioning"),(0,a.kt)("p",null,"You can omit the version of the sdk from the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Project>")," tag and use a ",(0,a.kt)("inlineCode",{parentName:"p"},"global.json")," file in your project root instead (which is how the Chickensoft projects are structured)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<Project Sdk="Godot.NET.Sdk">\n')),(0,a.kt)("p",null,"This makes it easy to automate package updates. Godot will sometimes try to add the version back after opening the editor, but you can simply discard those changes in source control."),(0,a.kt)("p",null,"Here's an example of a ",(0,a.kt)("inlineCode",{parentName:"p"},"global.json")," file, taken from the Chickensoft ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/chickensoft-games/GameDemo"},"GameDemo"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "msbuild-sdks": {\n    "Godot.NET.Sdk": "4.3.0"\n  },\n  "sdk": {\n    "rollForward": "major",\n    "version": "8.0.401"\n  }\n}\n')),(0,a.kt)("h2",{id:"-packages-assemblies-and-external-code"},"\ud83e\udde9 Packages, Assemblies and External Code"),(0,a.kt)("p",null,"Because C# Godot projects use a standard solution and project file, you can reference external packages and assemblies in your project the same way you would in a vanilla C# project."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.nuget.org/"},"NuGet")," is Microsoft's package manager and package ecosystem hosting platform. Hundreds of thousands of packages exist for C# and can be easily added to most projects. For more on NuGet's background, you can read ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/nuget/what-is-nuget"},"Microsoft's overview of NuGet"),"."),(0,a.kt)("h2",{id:"-external-code"},"\ud83d\udce6 External Code"),(0,a.kt)("p",null,"Plain C# packages which target ",(0,a.kt)("inlineCode",{parentName:"p"},"netstandard")," or a compatible target framework can be easily added to your project with ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet add package <package-name>")," or by editing the ",(0,a.kt)("inlineCode",{parentName:"p"},".csproj")," file directly and running ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet restore"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'  <ItemGroup>\n    <PackageReference Include="Chickensoft.Serialization" Version="2.0.0" />\n    \x3c!-- ... --\x3e\n')),(0,a.kt)("p",null,"External nuget packages which use the Godot API and have the same (or compatible) ",(0,a.kt)("inlineCode",{parentName:"p"},"GodotSharp")," version as your game's ",(0,a.kt)("inlineCode",{parentName:"p"},"Godot.NET.Sdk")," can be added and referenced from your game's project in the same way."),(0,a.kt)("p",null,"You can also include source generator packages by including the additional tags needed for .NET to understand them as source generators. This allows you to benefit from powerful metaprogramming tools, like the ones Chickensoft provides."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<PackageReference Include="Chickensoft.Introspection.Generator" Version="2.0.0" PrivateAssets="all" OutputItemType="analyzer" />\n')),(0,a.kt)("h3",{id:"-script-assets-and-code-files"},"\ud83d\ude80 Script Assets and Code Files"),(0,a.kt)("p",null,'When creating a C# Godot project, it\'s helpful to devise terminology that allows us to classify the C# code in a game as falling into two potential "categories":'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C# script assets (scripts added to a Godot scene or resource)"),(0,a.kt)("li",{parentName:"ul"},"C# code files (plain C# code files not referenced directly by the engine)")),(0,a.kt)("p",null,"In general, a \"script\" is a code file which is referenced somewhere in the engine's other files (like Godot's ",(0,a.kt)("inlineCode",{parentName:"p"},".tscn")," scene files). When referenced from a scene or resource, the code file should be considered a script asset rather than just a loose C# file sitting somewhere in your project. Because Godot's references can be brittle at times, it's important to rename and move files in your project from within the Godot editor to avoid breaking references."),(0,a.kt)("p",null,"On the other hand, plain C# code files you add to your project that aren't referenced in the engine should not be considered assets. This distinction becomes important when you wish to modularize your project."),(0,a.kt)("h3",{id:"-modularizing-your-game"},"\ud83e\ude86 Modularizing Your Game"),(0,a.kt)("p",null,"If you've structured your code well, you can move C# code files (but not script files) out of your project and reference them as a separate package in your game's project. Doing so is completely optional, and should only be considered if build times are a major concern. To make a new module for your project, simply create a new C# class library project and move the relevant code files to it. Then, add a reference to it from your game's project and rebuild."),(0,a.kt)("p",null,"If your code files don't reference Godot at all, you can make a ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-new-sdk-templates#classlib"},"plain C# package")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet new classlib"),". More than likely, though, your code files will reference Godot engine API's. To enable this, you'll need to add ",(0,a.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/GodotSharp/4.4.0-dev.7"},"GodotSharp")," as a dependency to your package (make sure to reference the same version of GodotSharp as the ",(0,a.kt)("inlineCode",{parentName:"p"},"Godot.NET.Sdk")," your game is referencing in it's ",(0,a.kt)("inlineCode",{parentName:"p"},".csproj")," file)."),(0,a.kt)("p",null,"For packages which reference ",(0,a.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/GodotSharp/4.4.0-dev.7"},"GodotSharp"),", you'll almost certainly run into issues trying to run Godot code outside the engine with a test framework like XUnit, so you can leverage Chickensoft's ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/chickensoft-games/GodotPackage"},"GodotPackage")," template to spin up a new project that has a test Godot project already setup with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/chickensoft-games/GoDotTest"},"GoDotTest"),"."),(0,a.kt)("h2",{id:"-development"},"\ud83d\udc69\u200d\ud83d\udcbb Development"),(0,a.kt)("p",null,"Debugging Godot projects can be setup with VSCode, VSCodium, Rider, and Visual Studio, among others. Chickensoft projects and templates typically include launch profiles needed to work with ",(0,a.kt)("inlineCode",{parentName:"p"},"VSCode"),"."),(0,a.kt)("p",null,"Godot version management can be automated with ","[GodotEnv]",", our open source Godot installation and addon manager. GodotEnv runs from the command line and automatically sets up the relevant environment variables, paths, and symlinks on macOS, Windows, and Linux, making it easy for multiple team members to develop a project, stay in sync with engine updates, and use the same launch profiles in the project."),(0,a.kt)("p",null,"To run tests on game code, it can be difficult to use packages like XUnit or NUnit since Godot is a native application which manages the .NET runtime."),(0,a.kt)("p",null,"Chickensoft generally recommends a keep-it-simple approach by using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/chickensoft-games/GoDotTest"},"GoDotTest")," to execute tests from within the Godot game itself and having a preprocessor hook in development builds which runs the tests if it sees the right command-line flags. We automatically include this boilerplate out-of-the-box in the Chickensoft templates. GoDotTest executes tests synchronously and in-order. Tests have access to the test scene and are easily debugged. Additionally, it is compatible with code coverage and abides by GodotEnv's Godot installation path conventions."),(0,a.kt)("h2",{id:"\ufe0f-the-future"},"\ud83d\udd70\ufe0f The Future"),(0,a.kt)("p",null,"As C# continues to mature and expand its horizons, we are seeing more support for ahead-of-time compilation in each new release of .NET. This is likely due to limited support for runtime code generation on platforms like iOS."),(0,a.kt)("p",null,"In general, we recommend avoiding reflection that will not work well in ahead-of-time compilation scenarios, favoring compile-time code generation instead. This will allow your code to be truly cross-platform."),(0,a.kt)("p",null,"Many of the chickensoft packages are built on top of the Chickensoft ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/chickensoft-games/Introspection"},"Introspection")," generator, a compile-time metaprogramming tool that generates information about the types in a project."),(0,a.kt)("p",null,"The Chickensoft introspection generator also produces a type registry for the assembly, allowing types to be looked up and filtered in various fashions. The data generated by this tool enables convenient serialization of hierarchical state machines in Chickensoft's ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/chickensoft-games/LogicBlocks"},"LogicBlocks")," package, as well as simple, ergonomic serialization for general-purpose, versioned models in Chickensoft's ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/chickensoft-games/Serialization"},"Serialization")," package. Finally, our simple dependency injection tool and script utilities system, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/chickensoft-games/AutoInject"},"AutoInject"),", makes use of the generated data to automatically connect nodes to script properties without reflection."),(0,a.kt)("p",null,"While generated metadata can be clunky and sometimes opaque, we still prefer it over reflection to support platforms like iOS and future-proof our projects as .NET continues to evolve. Finally, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/raulsntos/godot-dotnet"},"a new approach to the C# integration")," is being developed for Godot based on ",(0,a.kt)("a",{parentName:"p",href:"https://docs.godotengine.org/en/stable/tutorials/scripting/gdextension/what_is_gdextension.html"},"GDExtension"),", which will require C# scripts to be ready for ahead-of-time compilation."),(0,a.kt)("p",null,"In general, Godot and C# is an excellent choice ",(0,a.kt)("em",{parentName:"p"},"today")," and is already powering a number of existing and upcoming games."))}u.isMDXComponent=!0},9517:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/add_script-c75073130be7c2fbc074e136ffa375d8.png"},4939:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/build_button-c26f2d5de2d4b12cce45f5c48e0ff2c3.png"}}]);
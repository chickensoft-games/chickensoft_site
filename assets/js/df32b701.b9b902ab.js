"use strict";(self.webpackChunkchickensoft_site=self.webpackChunkchickensoft_site||[]).push([[265],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8179:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={title:"\ud83d\udd2c Advanced Static Reflection",image:"https://chickensoft.games/assets/images/header-bbf251851f04eefa5fd63323124240f2.jpg"},o=void 0,p={unversionedId:"super_nodes/advanced_usage/advanced_static_reflection",id:"super_nodes/advanced_usage/advanced_static_reflection",title:"\ud83d\udd2c Advanced Static Reflection",description:"SuperNodes can do some cool coding tricks. If you want to learn how to use them, you've come to the right place!",source:"@site/docs/super_nodes/advanced_usage/04_advanced_static_reflection.md",sourceDirName:"super_nodes/advanced_usage",slug:"/super_nodes/advanced_usage/advanced_static_reflection",permalink:"/docs/super_nodes/advanced_usage/advanced_static_reflection",draft:!1,editUrl:"https://github.com/chickensoft-games/chickensoft_site/tree/main/docs/super_nodes/advanced_usage/04_advanced_static_reflection.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\ud83d\udd2c Advanced Static Reflection",image:"https://chickensoft.games/assets/images/header-bbf251851f04eefa5fd63323124240f2.jpg"},sidebar:"tutorialSidebar",previous:{title:"\u267b\ufe0f Sharing PowerUps",permalink:"/docs/super_nodes/advanced_usage/sharing_power_ups"}},l={},s=[{value:"\ud83d\uddc2 Accessing Type Information",id:"-accessing-type-information",level:2},{value:"PowerUp \u2194\ufe0f SuperNode Communication",id:"powerup-\ufe0f-supernode-communication",level:2},{value:"\ud83e\uddee Explicit Interface Implementations",id:"-explicit-interface-implementations",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"SuperNodes can do some cool coding tricks. If you want to learn how to use them, you've come to the right place!"),(0,a.kt)("h2",{id:"-accessing-type-information"},"\ud83d\uddc2 Accessing Type Information"),(0,a.kt)("p",null,"You can easily access the normal ",(0,a.kt)("inlineCode",{parentName:"p"},"Type")," information of a property or a field on a SuperNode by looking it up in the generated table."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// ...\npublic void OnReady() {\n  var myPropertyType = PropertiesAndFields("MyProperty").Type;\n}\n// ...\n')),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Unfortunately, converting from a ",(0,a.kt)("inlineCode",{parentName:"p"},"Type")," object to a generic type argument requires the use of reflection or code generation at runtime."),(0,a.kt)("p",{parentName:"admonition"},"You cannot use a variable as a type argument in C#, as ",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/2107864"},"types have to be resolved at compile-time"),"."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public void OnReady() {\n  var myPropertyType = PropertiesAndFields(\"MyProperty\").Type;\n\n  // doesn't work \u2014\xa0can't use a variable as a type argument.\n  myService.SomeMethod<myPropertyType>();\n}\n")),(0,a.kt)("p",{parentName:"admonition"},"For more information, feel free to read about ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Reification_(computer_science)"},"reification")," and ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Parametric_polymorphism"},"parametric polymorphism"),". It might sound like a religion, but it's not. Although, if you talk to a programming language theorist, you wouldn't be entirely mistaken if you got the impression it was a cult.")),(0,a.kt)("p",null,"SuperNodes provides a mechanism to access the type information of a property or field as a generic type argument."),(0,a.kt)("p",null,"Let's pretend we are trying to make a SuperNode that will serialize all the properties and fields it contains. For the sake of example, we'll define a dummy serializer that looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public interface ISerializer {\n  bool Serialize<T>(T value);\n  T Deserialize<T>(dynamic value);\n}\n\n// Stub implementation for example \u2014 build or use your own serializer!\npublic class MySerializer : ISerializer {\n  public bool Serialize<T>(T value) => true;\n  public T Deserialize<T>(dynamic value) => default!;\n}\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Accessing the type of a property or field as a generic type argument at runtime can help when writing code that interfaces with\xa0\u2014 well, serializers, for example. Perhaps you will find it other uses for it!")),(0,a.kt)("p",null,"Next, we'll create a type receiver that calls our serializer's ",(0,a.kt)("inlineCode",{parentName:"p"},"Serialize")," method. When we create it, we'll give it the serializer and the value to serialize."),(0,a.kt)("p",null,"The type receiver implements ",(0,a.kt)("inlineCode",{parentName:"p"},"ITypeReceiver.Receive<T>()"),", an interface provided by ",(0,a.kt)("inlineCode",{parentName:"p"},"SuperNodes.Types")," that allows us to receive the type of the property we're interested in as a type argument, rather than a ",(0,a.kt)("inlineCode",{parentName:"p"},"Type")," object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public class MySerializerHelper : ITypeReceiver<bool> {\n  public ISerializer Serializer { get; }\n  public dynamic Value { get; }\n\n  public MySerializerHelper(ISerializer serializer, dynamic value) {\n    Serializer = serializer;\n    Value = value;\n  }\n\n  public bool Receive<TSerialize>()\n    => Serializer.Serialize<TSerialize>(Value);\n}\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Why do we have to make a class that implements an interface?"),(0,a.kt)("p",{parentName:"admonition"},"Unfortunately, ",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/2405060"},"C# doesn't support anonymous functions (lambdas) with generic type parameters"),'. To work around this, we have to define a class that implements a generic method so that we can "receive" a type argument.')),(0,a.kt)("p",null,"Finally, we'll create a SuperNode that uses our type receiver when it calls the generated utility method ",(0,a.kt)("inlineCode",{parentName:"p"},"GetScriptPropertyOrFieldType"),". To get the type of a property as a type argument, we pass the name of the property we want and an instance of our type receiver to ",(0,a.kt)("inlineCode",{parentName:"p"},"GetScriptPropertyOrFieldType"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'namespace AccessingTypesExample;\n\nusing System;\nusing Godot;\nusing GoDotTest;\nusing SuperNodes.Types;\n\n[SuperNode]\npublic partial class MySuperNode : Node {\n  /// <summary>This property will be serialized!</summary>\n  public string MyName { get; } = nameof(MySuperNode);\n\n  public override partial void _Notification(int what);\n\n  private readonly ISerializer _serializer = new MySerializer();\n\n  public void OnReady() {\n    foreach (var memberName in PropertiesAndFields.Keys) {\n      var member = PropertiesAndFields[memberName];\n\n      if (!member.IsReadable || member.IsField) { continue; }\n\n      var value = GetScriptPropertyOrField(memberName);\n      var serializerHelper = new MySerializerHelper(_serializer, value);\n      var result = GetScriptPropertyOrFieldType(memberName, serializerHelper);\n      if (!result) {\n        throw new InvalidOperationException(\n          $"Failed to serialize {memberName}."\n        );\n      }\n    }\n  }\n}\n')),(0,a.kt)("p",null,"In our ",(0,a.kt)("inlineCode",{parentName:"p"},"OnReady")," method, we grab the names of all the properties and fields on ourselves and iterate over them."),(0,a.kt)("p",null,"Once we have a property name and value, we create an instance of our type receiver, the ",(0,a.kt)("inlineCode",{parentName:"p"},"MySerializerHelper")," and invoke the ",(0,a.kt)("inlineCode",{parentName:"p"},"GetScriptPropertyOrFieldType")," utility. The ",(0,a.kt)("inlineCode",{parentName:"p"},"GetScriptPropertyOrFieldType")," utility will then invoke our type receiver's ",(0,a.kt)("inlineCode",{parentName:"p"},"Receive<T>()")," method with the type of the property we've requested. In the type receiver, we use the property's generic type to invoke our serializer \u2014\xa0and that's it!"),(0,a.kt)("h2",{id:"powerup-\ufe0f-supernode-communication"},"PowerUp \u2194\ufe0f SuperNode Communication"),(0,a.kt)("p",null,"PowerUps should not be designed in such a way that they need their own properties or fields to be initialized by the SuperNode they are applied to. Doing so would require the SuperNode to configure the members it gained from the PowerUp in its constructor or in another lifecycle method, which would defeat the purpose of the PowerUp adding functionality to the SuperNode with zero-configuration or knowledge on the SuperNode's part."),(0,a.kt)("p",null,"If you find yourself wanting to configure PowerUps outside the PowerUp, you can probably use ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Composition_over_inheritance"},"composition")," instead."),(0,a.kt)("p",null,"It is perfectly acceptable, however, to expose static properties on a PowerUp that configures its usage for every application of the PowerUp. For example, when your main scene loads, it can configure static properties on each PowerUp class that needs to be configured."),(0,a.kt)("p",null,"To reference a PowerUp's own static property inside its code, you must specifically reference the name of the static property via the PowerUp's class name. Additionally, you should remember to add ",(0,a.kt)("inlineCode",{parentName:"p"},"[PowerUpIgnore]")," to the static property. If you don't, the static property will get copied over into any SuperNodes that applies the PowerUp."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'#pragma warning disable IDE0002\n[PowerUp]\npublic partial class MyPowerUp : Node {\n  [PowerUpIgnore]\n  public static string NameToGreet { get; set; } = default!;\n\n  public void OnMyPowerUp(int what) {\n    if (what == NotificationReady) {\n      GD.Print($"Hello, {MyPowerUp.NameToGreet}!");\n    }\n  }\n}\n#pragma warning restore IDE0002\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Disabling ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/fundamentals/code-analysis/style-rules/ide0002"},(0,a.kt)("inlineCode",{parentName:"a"},"IDE0002"))," above prevents .NET from suggesting that we simplify the reference ",(0,a.kt)("inlineCode",{parentName:"p"},"MyPowerUp.NameToGreet")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"NameToGreet"),". In this particular case, we must fully resolve the name or else the SuperNodes generator will think we are referring to a static property on the SuperNode the PowerUp is applied to.")),(0,a.kt)("h2",{id:"-explicit-interface-implementations"},"\ud83e\uddee Explicit Interface Implementations"),(0,a.kt)("p",null,"It's worth mentioning that static reflection supports ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/interfaces/explicit-interface-implementation"},"explicit interface implementation syntax"),"."),(0,a.kt)("p",null,"Just for fun, here's an example of a generic PowerUp that explicitly implements an interface."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"namespace ExplicitInterfaceImplementationExample;\n\nusing Godot;\nusing SuperNodes.Types;\n\n[SuperNode(typeof(MyPowerUp<int>))]\npublic partial class MySuperNode : Node {\n  public override partial void _Notification(int what);\n\n  public void OnReady() { }\n}\n\n[PowerUp]\npublic partial class MyPowerUp<T> : Node, IMyPowerUp<T> {\n  T IMyPowerUp<T>.Value { get; } = default!;\n}\n\npublic interface IMyPowerUp<T> {\n  T Value { get; }\n}\n")),(0,a.kt)("p",null,"//! TODO: show how to show generated code"),(0,a.kt)("p",null,"If we look at the generated code for MySuperNode, we'll see that the SuperNodes generator refers to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Value")," property as ",(0,a.kt)("inlineCode",{parentName:"p"},"IMyPowerUp<int>.Value"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'public static ImmutableDictionary<string, ScriptPropertyOrField> ScriptPropertiesAndFields { get; }\n  = new Dictionary<string, ScriptPropertyOrField>() {\n  ["IMyPowerUp<int>.Value"] = new ScriptPropertyOrField(\n    Name: "IMyPowerUp<int>.Value",\n    Type: typeof(int),\n    IsField: false,\n    IsMutable: false,\n    IsReadable: true,\n    ImmutableDictionary<string, ImmutableArray<ScriptAttributeDescription>>.Empty\n  )\n  }.ToImmutableDictionary();\n')))}u.isMDXComponent=!0}}]);
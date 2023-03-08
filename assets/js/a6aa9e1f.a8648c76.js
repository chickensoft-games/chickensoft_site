"use strict";(self.webpackChunkchickensoft_site=self.webpackChunkchickensoft_site||[]).push([[89,918],{3269:(t,l,r)=>{r.r(l),r.d(l,{default:()=>f});var e=r(7294),o=r(6010),n=r(2263),c=r(1944),i=r(5281),u=r(9058),g=r(5999),s=r(2244);function a(t){const{metadata:l}=t,{previousPage:r,nextPage:o}=l;return e.createElement("nav",{className:"pagination-nav","aria-label":(0,g.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r&&e.createElement(s.Z,{permalink:r,title:e.createElement(g.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),o&&e.createElement(s.Z,{permalink:o,title:e.createElement(g.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}var h=r(197),m=r(9460),d=r(857);function p(t){let{items:l,component:r=d.Z}=t;return e.createElement(e.Fragment,null,l.map((t=>{let{content:l}=t;return e.createElement(m.n,{key:l.metadata.permalink,content:l},e.createElement(r,null,e.createElement(l,null)))})))}function b(t){const{metadata:l}=t,{siteConfig:{title:r}}=(0,n.Z)(),{blogDescription:o,blogTitle:i,permalink:u}=l,g="/"===u?r:i;return e.createElement(e.Fragment,null,e.createElement(c.d,{title:g,description:o}),e.createElement(h.Z,{tag:"blog_posts_list"}))}function C(t){const{metadata:l,items:r,sidebar:o}=t;return e.createElement(u.Z,{sidebar:o},e.createElement(p,{items:r}),e.createElement(a,{metadata:l}))}function f(t){return e.createElement(c.FG,{className:(0,o.Z)(i.k.wrapper.blogPages,i.k.page.blogListPage)},e.createElement(b,t),e.createElement(C,t))}},6555:(t,l,r)=>{r.d(l,{Z:()=>c});var e=r(2599),o=r(6010),n=r(7294);function c(){return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,o.Z)("col col--12 padding-vert--sm")},n.createElement(e.Z,null)))}},2599:(t,l,r)=>{r.d(l,{Z:()=>A});var e=r(6809),o=r(7294);const n="discordServer_Be5H",c="discordInviteText_xFKC",i="discordInviteBody_jtVf",u="discordInviteDetails_UNwE",g="serverImage_snrK",s="discordInviteName_OuUx",a="discordInviteCounts_wTwU",h="discordInviteStatusIcon_ySkV",m="discordInviteOnlineIcon_e0ks",d="discordInviteOfflineIcon_R82S",p="discordButtonContainer_oTIm",b="discordInviteJoinButton_VJ9M",C="discordInviteCount_qEVM";function f(t){const[l,r]=(0,o.useState)(0),[e,f]=(0,o.useState)(0);return(0,o.useEffect)((()=>{var l=new XMLHttpRequest;l.onload=function(){const t=JSON.parse(this.response);var l=t.approximate_member_count.toLocaleString("en"),e=t.approximate_presence_count.toLocaleString("en");r(l),f(e)},l.open("GET",`https://discordapp.com/api/v6/invite/${t.discordInviteCode}?with_counts=true`,!0),l.send()}),[]),o.createElement("div",{className:n},o.createElement("h3",{className:c},"You have been invited to join a server"),o.createElement("div",{className:i},o.createElement("div",null,o.createElement("img",{src:t.logo,className:g})),o.createElement("div",{className:u},o.createElement("h3",{className:s},t.serverName),o.createElement("div",{className:a},o.createElement("i",{className:`${h} ${m}`}),o.createElement("strong",{className:C},o.createElement("span",{id:"discordNumOnline"},e&&0!=e?e:"#")," ","Online"),o.createElement("i",{className:`${h} ${d}`}),o.createElement("strong",{className:C},o.createElement("span",{id:"discordNumMembers"},l&&0!=l?l:"#")," ","Members")))),o.createElement("div",{className:p},o.createElement("a",{className:`button button--primary button--lg ${b}`,href:t.discord},"Join")))}var S=r(1022);const E=(0,S.P)(e.Z,"logo"),L=(0,S.P)(e.Z,"discord"),v=(0,S.P)(e.Z,"discordInviteCode");function A(){return o.createElement(f,{serverName:e.Z.title,logo:E,discordInviteCode:v,discord:L})}},3050:(t,l,r)=>{r.d(l,{Z:()=>o});var e=r(7294);function o(t){return e.createElement("figure",{style:{margin:"0px 0px var(--ifm-leading)",textAlign:"center"}},e.createElement("img",{src:t.src,alt:t.alt,style:{width:t.widthOverride?t.widthOverride:"100%"}}),e.createElement("figcaption",{style:{fontSize:"0.8rem",fontStyle:"italic",textAlign:"center"}},t.children))}},4429:(t,l,r)=>{r.d(l,{Z:()=>E});var e=r(8084);const o={"1CEnterprise":{color:"#814CCC",url:"https://github.com/trending?l=1C-Enterprise"},ABAP:{color:"#E8274B",url:"https://github.com/trending?l=ABAP"},ActionScript:{color:"#882B0F",url:"https://github.com/trending?l=ActionScript"},Ada:{color:"#02f88c",url:"https://github.com/trending?l=Ada"},Agda:{color:"#315665",url:"https://github.com/trending?l=Agda"},AGSScript:{color:"#B9D9FF",url:"https://github.com/trending?l=AGS-Script"},Alloy:{color:"#64C800",url:"https://github.com/trending?l=Alloy"},AlpineAbuild:{color:null,url:"https://github.com/trending?l=Alpine-Abuild"},AMPL:{color:"#E6EFBB",url:"https://github.com/trending?l=AMPL"},ANTLR:{color:"#9DC3FF",url:"https://github.com/trending?l=ANTLR"},Apex:{color:null,url:"https://github.com/trending?l=Apex"},APIBlueprint:{color:"#2ACCA8",url:"https://github.com/trending?l=API-Blueprint"},APL:{color:"#5A8164",url:"https://github.com/trending?l=APL"},ApolloGuidanceComputer:{color:null,url:"https://github.com/trending?l=Apollo-Guidance-Computer"},AppleScript:{color:"#101F1F",url:"https://github.com/trending?l=AppleScript"},Arc:{color:"#aa2afe",url:"https://github.com/trending?l=Arc"},Arduino:{color:"#bd79d1",url:"https://github.com/trending?l=Arduino"},ASP:{color:"#6a40fd",url:"https://github.com/trending?l=ASP"},AspectJ:{color:"#a957b0",url:"https://github.com/trending?l=AspectJ"},Assembly:{color:"#6E4C13",url:"https://github.com/trending?l=Assembly"},ATS:{color:"#1ac620",url:"https://github.com/trending?l=ATS"},Augeas:{color:null,url:"https://github.com/trending?l=Augeas"},AutoHotkey:{color:"#6594b9",url:"https://github.com/trending?l=AutoHotkey"},AutoIt:{color:"#1C3552",url:"https://github.com/trending?l=AutoIt"},Awk:{color:null,url:"https://github.com/trending?l=Awk"},Ballerina:{color:"#FF5000",url:"https://github.com/trending?l=Ballerina"},Batchfile:{color:"#C1F12E",url:"https://github.com/trending?l=Batchfile"},Befunge:{color:null,url:"https://github.com/trending?l=Befunge"},Bison:{color:null,url:"https://github.com/trending?l=Bison"},BitBake:{color:null,url:"https://github.com/trending?l=BitBake"},BlitzBasic:{color:null,url:"https://github.com/trending?l=BlitzBasic"},BlitzMax:{color:"#cd6400",url:"https://github.com/trending?l=BlitzMax"},Bluespec:{color:null,url:"https://github.com/trending?l=Bluespec"},Boo:{color:"#d4bec1",url:"https://github.com/trending?l=Boo"},Brainfuck:{color:"#2F2530",url:"https://github.com/trending?l=Brainfuck"},Brightscript:{color:null,url:"https://github.com/trending?l=Brightscript"},Bro:{color:null,url:"https://github.com/trending?l=Bro"},C:{color:"#555555",url:"https://github.com/trending?l=C"},"C#":{color:"#178600",url:"https://github.com/trending?l=Csharp"},"C++":{color:"#f34b7d",url:"https://github.com/trending?l=C++"},C2hsHaskell:{color:null,url:"https://github.com/trending?l=C2hs-Haskell"},"Cap'nProto":{color:null,url:"https://github.com/trending?l=Cap'n-Proto"},CartoCSS:{color:null,url:"https://github.com/trending?l=CartoCSS"},Ceylon:{color:"#dfa535",url:"https://github.com/trending?l=Ceylon"},Chapel:{color:"#8dc63f",url:"https://github.com/trending?l=Chapel"},Charity:{color:null,url:"https://github.com/trending?l=Charity"},ChucK:{color:null,url:"https://github.com/trending?l=ChucK"},Cirru:{color:"#ccccff",url:"https://github.com/trending?l=Cirru"},Clarion:{color:"#db901e",url:"https://github.com/trending?l=Clarion"},Clean:{color:"#3F85AF",url:"https://github.com/trending?l=Clean"},Click:{color:"#E4E6F3",url:"https://github.com/trending?l=Click"},CLIPS:{color:null,url:"https://github.com/trending?l=CLIPS"},Clojure:{color:"#db5855",url:"https://github.com/trending?l=Clojure"},CMake:{color:null,url:"https://github.com/trending?l=CMake"},COBOL:{color:null,url:"https://github.com/trending?l=COBOL"},CoffeeScript:{color:"#244776",url:"https://github.com/trending?l=CoffeeScript"},ColdFusion:{color:"#ed2cd6",url:"https://github.com/trending?l=ColdFusion"},ColdFusionCFC:{color:null,url:"https://github.com/trending?l=ColdFusion-CFC"},CommonLisp:{color:"#3fb68b",url:"https://github.com/trending?l=Common-Lisp"},ComponentPascal:{color:"#B0CE4E",url:"https://github.com/trending?l=Component-Pascal"},Cool:{color:null,url:"https://github.com/trending?l=Cool"},Coq:{color:null,url:"https://github.com/trending?l=Coq"},Crystal:{color:"#776791",url:"https://github.com/trending?l=Crystal"},Csound:{color:null,url:"https://github.com/trending?l=Csound"},CsoundDocument:{color:null,url:"https://github.com/trending?l=Csound-Document"},CsoundScore:{color:null,url:"https://github.com/trending?l=Csound-Score"},CSS:{color:"#563d7c",url:"https://github.com/trending?l=CSS"},Cuda:{color:"#3A4E3A",url:"https://github.com/trending?l=Cuda"},CWeb:{color:null,url:"https://github.com/trending?l=CWeb"},Cycript:{color:null,url:"https://github.com/trending?l=Cycript"},Cython:{color:null,url:"https://github.com/trending?l=Cython"},D:{color:"#ba595e",url:"https://github.com/trending?l=D"},Dart:{color:"#00B4AB",url:"https://github.com/trending?l=Dart"},DataWeave:{color:"#003a52",url:"https://github.com/trending?l=DataWeave"},DIGITALCommandLanguage:{color:null,url:"https://github.com/trending?l=DIGITAL-Command-Language"},DM:{color:"#447265",url:"https://github.com/trending?l=DM"},Dogescript:{color:"#cca760",url:"https://github.com/trending?l=Dogescript"},DTrace:{color:null,url:"https://github.com/trending?l=DTrace"},Dylan:{color:"#6c616e",url:"https://github.com/trending?l=Dylan"},E:{color:"#ccce35",url:"https://github.com/trending?l=E"},eC:{color:"#913960",url:"https://github.com/trending?l=eC"},ECL:{color:"#8a1267",url:"https://github.com/trending?l=ECL"},ECLiPSe:{color:null,url:"https://github.com/trending?l=ECLiPSe"},Eiffel:{color:"#946d57",url:"https://github.com/trending?l=Eiffel"},Elixir:{color:"#6e4a7e",url:"https://github.com/trending?l=Elixir"},Elm:{color:"#60B5CC",url:"https://github.com/trending?l=Elm"},EmacsLisp:{color:"#c065db",url:"https://github.com/trending?l=Emacs-Lisp"},EmberScript:{color:"#FFF4F3",url:"https://github.com/trending?l=EmberScript"},EQ:{color:"#a78649",url:"https://github.com/trending?l=EQ"},Erlang:{color:"#B83998",url:"https://github.com/trending?l=Erlang"},"F#":{color:"#b845fc",url:"https://github.com/trending?l=Fsharp"},Factor:{color:"#636746",url:"https://github.com/trending?l=Factor"},Fancy:{color:"#7b9db4",url:"https://github.com/trending?l=Fancy"},Fantom:{color:"#14253c",url:"https://github.com/trending?l=Fantom"},FilebenchWML:{color:null,url:"https://github.com/trending?l=Filebench-WML"},Filterscript:{color:null,url:"https://github.com/trending?l=Filterscript"},fish:{color:null,url:"https://github.com/trending?l=fish"},FLUX:{color:"#88ccff",url:"https://github.com/trending?l=FLUX"},Forth:{color:"#341708",url:"https://github.com/trending?l=Forth"},Fortran:{color:"#4d41b1",url:"https://github.com/trending?l=Fortran"},FreeMarker:{color:"#0050b2",url:"https://github.com/trending?l=FreeMarker"},Frege:{color:"#00cafe",url:"https://github.com/trending?l=Frege"},GameMakerLanguage:{color:"#8fb200",url:"https://github.com/trending?l=Game-Maker-Language"},GAMS:{color:null,url:"https://github.com/trending?l=GAMS"},GAP:{color:null,url:"https://github.com/trending?l=GAP"},GCCMachineDescription:{color:null,url:"https://github.com/trending?l=GCC-Machine-Description"},GDB:{color:null,url:"https://github.com/trending?l=GDB"},GDScript:{color:null,url:"https://github.com/trending?l=GDScript"},Genie:{color:"#fb855d",url:"https://github.com/trending?l=Genie"},Genshi:{color:null,url:"https://github.com/trending?l=Genshi"},GentooEbuild:{color:null,url:"https://github.com/trending?l=Gentoo-Ebuild"},GentooEclass:{color:null,url:"https://github.com/trending?l=Gentoo-Eclass"},Gherkin:{color:"#5B2063",url:"https://github.com/trending?l=Gherkin"},GLSL:{color:null,url:"https://github.com/trending?l=GLSL"},Glyph:{color:"#e4cc98",url:"https://github.com/trending?l=Glyph"},Gnuplot:{color:"#f0a9f0",url:"https://github.com/trending?l=Gnuplot"},Go:{color:"#375eab",url:"https://github.com/trending?l=Go"},Golo:{color:"#88562A",url:"https://github.com/trending?l=Golo"},Gosu:{color:"#82937f",url:"https://github.com/trending?l=Gosu"},Grace:{color:null,url:"https://github.com/trending?l=Grace"},GrammaticalFramework:{color:"#79aa7a",url:"https://github.com/trending?l=Grammatical-Framework"},Groovy:{color:"#e69f56",url:"https://github.com/trending?l=Groovy"},GroovyServerPages:{color:null,url:"https://github.com/trending?l=Groovy-Server-Pages"},Hack:{color:"#878787",url:"https://github.com/trending?l=Hack"},Harbour:{color:"#0e60e3",url:"https://github.com/trending?l=Harbour"},Haskell:{color:"#5e5086",url:"https://github.com/trending?l=Haskell"},Haxe:{color:"#df7900",url:"https://github.com/trending?l=Haxe"},HCL:{color:null,url:"https://github.com/trending?l=HCL"},HLSL:{color:null,url:"https://github.com/trending?l=HLSL"},HTML:{color:"#e34c26",url:"https://github.com/trending?l=HTML"},Hy:{color:"#7790B2",url:"https://github.com/trending?l=Hy"},HyPhy:{color:null,url:"https://github.com/trending?l=HyPhy"},IDL:{color:"#a3522f",url:"https://github.com/trending?l=IDL"},Idris:{color:null,url:"https://github.com/trending?l=Idris"},IGORPro:{color:null,url:"https://github.com/trending?l=IGOR-Pro"},Inform7:{color:null,url:"https://github.com/trending?l=Inform-7"},InnoSetup:{color:null,url:"https://github.com/trending?l=Inno-Setup"},Io:{color:"#a9188d",url:"https://github.com/trending?l=Io"},Ioke:{color:"#078193",url:"https://github.com/trending?l=Ioke"},Isabelle:{color:"#FEFE00",url:"https://github.com/trending?l=Isabelle"},IsabelleROOT:{color:null,url:"https://github.com/trending?l=Isabelle-ROOT"},J:{color:"#9EEDFF",url:"https://github.com/trending?l=J"},Jasmin:{color:null,url:"https://github.com/trending?l=Jasmin"},Java:{color:"#b07219",url:"https://github.com/trending?l=Java"},JavaServerPages:{color:null,url:"https://github.com/trending?l=Java-Server-Pages"},JavaScript:{color:"#f1e05a",url:"https://github.com/trending?l=JavaScript"},JFlex:{color:null,url:"https://github.com/trending?l=JFlex"},Jison:{color:null,url:"https://github.com/trending?l=Jison"},JisonLex:{color:null,url:"https://github.com/trending?l=Jison-Lex"},Jolie:{color:"#843179",url:"https://github.com/trending?l=Jolie"},JSONiq:{color:"#40d47e",url:"https://github.com/trending?l=JSONiq"},JSX:{color:null,url:"https://github.com/trending?l=JSX"},Julia:{color:"#a270ba",url:"https://github.com/trending?l=Julia"},"Jupyter Notebook":{color:"#DA5B0B",url:"https://github.com/trending?l=Jupyter-Notebook"},Kotlin:{color:"#F18E33",url:"https://github.com/trending?l=Kotlin"},KRL:{color:"#28431f",url:"https://github.com/trending?l=KRL"},LabVIEW:{color:null,url:"https://github.com/trending?l=LabVIEW"},Lasso:{color:"#999999",url:"https://github.com/trending?l=Lasso"},Lean:{color:null,url:"https://github.com/trending?l=Lean"},Lex:{color:"#DBCA00",url:"https://github.com/trending?l=Lex"},LFE:{color:null,url:"https://github.com/trending?l=LFE"},LilyPond:{color:null,url:"https://github.com/trending?l=LilyPond"},Limbo:{color:null,url:"https://github.com/trending?l=Limbo"},LiterateAgda:{color:null,url:"https://github.com/trending?l=Literate-Agda"},LiterateCoffeeScript:{color:null,url:"https://github.com/trending?l=Literate-CoffeeScript"},LiterateHaskell:{color:null,url:"https://github.com/trending?l=Literate-Haskell"},LiveScript:{color:"#499886",url:"https://github.com/trending?l=LiveScript"},LLVM:{color:"#185619",url:"https://github.com/trending?l=LLVM"},Logos:{color:null,url:"https://github.com/trending?l=Logos"},Logtalk:{color:null,url:"https://github.com/trending?l=Logtalk"},LOLCODE:{color:"#cc9900",url:"https://github.com/trending?l=LOLCODE"},LookML:{color:"#652B81",url:"https://github.com/trending?l=LookML"},LoomScript:{color:null,url:"https://github.com/trending?l=LoomScript"},LSL:{color:"#3d9970",url:"https://github.com/trending?l=LSL"},Lua:{color:"#000080",url:"https://github.com/trending?l=Lua"},M:{color:null,url:"https://github.com/trending?l=M"},M4:{color:null,url:"https://github.com/trending?l=M4"},M4Sugar:{color:null,url:"https://github.com/trending?l=M4Sugar"},Makefile:{color:"#427819",url:"https://github.com/trending?l=Makefile"},Mako:{color:null,url:"https://github.com/trending?l=Mako"},Mask:{color:"#f97732",url:"https://github.com/trending?l=Mask"},Mathematica:{color:null,url:"https://github.com/trending?l=Mathematica"},Matlab:{color:"#e16737",url:"https://github.com/trending?l=Matlab"},Max:{color:"#c4a79c",url:"https://github.com/trending?l=Max"},MAXScript:{color:"#00a6a6",url:"https://github.com/trending?l=MAXScript"},Mercury:{color:"#ff2b2b",url:"https://github.com/trending?l=Mercury"},Meson:{color:"#007800",url:"https://github.com/trending?l=Meson"},Metal:{color:"#8f14e9",url:"https://github.com/trending?l=Metal"},MiniD:{color:null,url:"https://github.com/trending?l=MiniD"},Mirah:{color:"#c7a938",url:"https://github.com/trending?l=Mirah"},Modelica:{color:null,url:"https://github.com/trending?l=Modelica"},"Modula-2":{color:null,url:"https://github.com/trending?l=Modula-2"},ModuleManagementSystem:{color:null,url:"https://github.com/trending?l=Module-Management-System"},Monkey:{color:null,url:"https://github.com/trending?l=Monkey"},Moocode:{color:null,url:"https://github.com/trending?l=Moocode"},MoonScript:{color:null,url:"https://github.com/trending?l=MoonScript"},MQL4:{color:"#62A8D6",url:"https://github.com/trending?l=MQL4"},MQL5:{color:"#4A76B8",url:"https://github.com/trending?l=MQL5"},MTML:{color:"#b7e1f4",url:"https://github.com/trending?l=MTML"},MUF:{color:null,url:"https://github.com/trending?l=MUF"},mupad:{color:null,url:"https://github.com/trending?l=mupad"},Myghty:{color:null,url:"https://github.com/trending?l=Myghty"},NCL:{color:"#28431f",url:"https://github.com/trending?l=NCL"},Nearley:{color:"#990000",url:"https://github.com/trending?l=Nearley"},Nemerle:{color:"#3d3c6e",url:"https://github.com/trending?l=Nemerle"},nesC:{color:"#94B0C7",url:"https://github.com/trending?l=nesC"},NetLinx:{color:"#0aa0ff",url:"https://github.com/trending?l=NetLinx"},"NetLinx+ERB":{color:"#747faa",url:"https://github.com/trending?l=NetLinx+ERB"},NetLogo:{color:"#ff6375",url:"https://github.com/trending?l=NetLogo"},NewLisp:{color:"#87AED7",url:"https://github.com/trending?l=NewLisp"},Nim:{color:"#37775b",url:"https://github.com/trending?l=Nim"},Nit:{color:"#009917",url:"https://github.com/trending?l=Nit"},Nix:{color:"#7e7eff",url:"https://github.com/trending?l=Nix"},NSIS:{color:null,url:"https://github.com/trending?l=NSIS"},Nu:{color:"#c9df40",url:"https://github.com/trending?l=Nu"},NumPy:{color:null,url:"https://github.com/trending?l=NumPy"},"Objective-C":{color:"#438eff",url:"https://github.com/trending?l=Objective-C"},"Objective-C++":{color:"#6866fb",url:"https://github.com/trending?l=Objective-C++"},"Objective-J":{color:"#ff0c5a",url:"https://github.com/trending?l=Objective-J"},OCaml:{color:"#3be133",url:"https://github.com/trending?l=OCaml"},Omgrofl:{color:"#cabbff",url:"https://github.com/trending?l=Omgrofl"},ooc:{color:"#b0b77e",url:"https://github.com/trending?l=ooc"},Opa:{color:null,url:"https://github.com/trending?l=Opa"},Opal:{color:"#f7ede0",url:"https://github.com/trending?l=Opal"},OpenCL:{color:null,url:"https://github.com/trending?l=OpenCL"},OpenEdgeABL:{color:null,url:"https://github.com/trending?l=OpenEdge-ABL"},OpenRCrunscript:{color:null,url:"https://github.com/trending?l=OpenRC-runscript"},OpenSCAD:{color:null,url:"https://github.com/trending?l=OpenSCAD"},Ox:{color:null,url:"https://github.com/trending?l=Ox"},Oxygene:{color:"#cdd0e3",url:"https://github.com/trending?l=Oxygene"},Oz:{color:"#fab738",url:"https://github.com/trending?l=Oz"},P4:{color:"#7055b5",url:"https://github.com/trending?l=P4"},Pan:{color:"#cc0000",url:"https://github.com/trending?l=Pan"},Papyrus:{color:"#6600cc",url:"https://github.com/trending?l=Papyrus"},Parrot:{color:"#f3ca0a",url:"https://github.com/trending?l=Parrot"},ParrotAssembly:{color:null,url:"https://github.com/trending?l=Parrot-Assembly"},ParrotInternalRepresentation:{color:null,url:"https://github.com/trending?l=Parrot-Internal-Representation"},Pascal:{color:"#E3F171",url:"https://github.com/trending?l=Pascal"},PAWN:{color:"#dbb284",url:"https://github.com/trending?l=PAWN"},Pep8:{color:"#C76F5B",url:"https://github.com/trending?l=Pep8"},Perl:{color:"#0298c3",url:"https://github.com/trending?l=Perl"},Perl6:{color:"#0000fb",url:"https://github.com/trending?l=Perl-6"},PHP:{color:"#4F5D95",url:"https://github.com/trending?l=PHP"},PicoLisp:{color:null,url:"https://github.com/trending?l=PicoLisp"},PigLatin:{color:"#fcd7de",url:"https://github.com/trending?l=PigLatin"},Pike:{color:"#005390",url:"https://github.com/trending?l=Pike"},PLpgSQL:{color:null,url:"https://github.com/trending?l=PLpgSQL"},PLSQL:{color:"#dad8d8",url:"https://github.com/trending?l=PLSQL"},PogoScript:{color:"#d80074",url:"https://github.com/trending?l=PogoScript"},Pony:{color:null,url:"https://github.com/trending?l=Pony"},PostScript:{color:"#da291c",url:"https://github.com/trending?l=PostScript"},"POV-RaySDL":{color:null,url:"https://github.com/trending?l=POV-Ray-SDL"},PowerBuilder:{color:"#8f0f8d",url:"https://github.com/trending?l=PowerBuilder"},PowerShell:{color:"#012456",url:"https://github.com/trending?l=PowerShell"},Processing:{color:"#0096D8",url:"https://github.com/trending?l=Processing"},Prolog:{color:"#74283c",url:"https://github.com/trending?l=Prolog"},PropellerSpin:{color:"#7fa2a7",url:"https://github.com/trending?l=Propeller-Spin"},Puppet:{color:"#302B6D",url:"https://github.com/trending?l=Puppet"},PureBasic:{color:"#5a6986",url:"https://github.com/trending?l=PureBasic"},PureScript:{color:"#1D222D",url:"https://github.com/trending?l=PureScript"},Python:{color:"#3572A5",url:"https://github.com/trending?l=Python"},Pythonconsole:{color:null,url:"https://github.com/trending?l=Python-console"},QMake:{color:null,url:"https://github.com/trending?l=QMake"},QML:{color:"#44a51c",url:"https://github.com/trending?l=QML"},R:{color:"#198CE7",url:"https://github.com/trending?l=R"},Racket:{color:"#22228f",url:"https://github.com/trending?l=Racket"},Ragel:{color:"#9d5200",url:"https://github.com/trending?l=Ragel"},RAML:{color:"#77d9fb",url:"https://github.com/trending?l=RAML"},Rascal:{color:"#fffaa0",url:"https://github.com/trending?l=Rascal"},REALbasic:{color:null,url:"https://github.com/trending?l=REALbasic"},Reason:{color:null,url:"https://github.com/trending?l=Reason"},Rebol:{color:"#358a5b",url:"https://github.com/trending?l=Rebol"},Red:{color:"#f50000",url:"https://github.com/trending?l=Red"},Redcode:{color:null,url:"https://github.com/trending?l=Redcode"},"Ren'Py":{color:"#ff7f7f",url:"https://github.com/trending?l=Ren'Py"},RenderScript:{color:null,url:"https://github.com/trending?l=RenderScript"},REXX:{color:null,url:"https://github.com/trending?l=REXX"},Ring:{color:"#0e60e3",url:"https://github.com/trending?l=Ring"},RobotFramework:{color:null,url:"https://github.com/trending?l=RobotFramework"},Roff:{color:"#ecdebe",url:"https://github.com/trending?l=Roff"},Rouge:{color:"#cc0088",url:"https://github.com/trending?l=Rouge"},Ruby:{color:"#701516",url:"https://github.com/trending?l=Ruby"},RUNOFF:{color:"#665a4e",url:"https://github.com/trending?l=RUNOFF"},Rust:{color:"#dea584",url:"https://github.com/trending?l=Rust"},Sage:{color:null,url:"https://github.com/trending?l=Sage"},SaltStack:{color:"#646464",url:"https://github.com/trending?l=SaltStack"},SAS:{color:"#B34936",url:"https://github.com/trending?l=SAS"},Scala:{color:"#c22d40",url:"https://github.com/trending?l=Scala"},Scheme:{color:"#1e4aec",url:"https://github.com/trending?l=Scheme"},Scilab:{color:null,url:"https://github.com/trending?l=Scilab"},Self:{color:"#0579aa",url:"https://github.com/trending?l=Self"},ShaderLab:{color:null,url:"https://github.com/trending?l=ShaderLab"},Shell:{color:"#89e051",url:"https://github.com/trending?l=Shell"},ShellSession:{color:null,url:"https://github.com/trending?l=ShellSession"},Shen:{color:"#120F14",url:"https://github.com/trending?l=Shen"},Slash:{color:"#007eff",url:"https://github.com/trending?l=Slash"},Smali:{color:null,url:"https://github.com/trending?l=Smali"},Smalltalk:{color:"#596706",url:"https://github.com/trending?l=Smalltalk"},Smarty:{color:null,url:"https://github.com/trending?l=Smarty"},SMT:{color:null,url:"https://github.com/trending?l=SMT"},SourcePawn:{color:"#5c7611",url:"https://github.com/trending?l=SourcePawn"},SQF:{color:"#3F3F3F",url:"https://github.com/trending?l=SQF"},SQLPL:{color:null,url:"https://github.com/trending?l=SQLPL"},Squirrel:{color:"#800000",url:"https://github.com/trending?l=Squirrel"},SRecodeTemplate:{color:"#348a34",url:"https://github.com/trending?l=SRecode-Template"},Stan:{color:"#b2011d",url:"https://github.com/trending?l=Stan"},StandardML:{color:"#dc566d",url:"https://github.com/trending?l=Standard-ML"},Stata:{color:null,url:"https://github.com/trending?l=Stata"},SuperCollider:{color:"#46390b",url:"https://github.com/trending?l=SuperCollider"},Swift:{color:"#ffac45",url:"https://github.com/trending?l=Swift"},SystemVerilog:{color:"#DAE1C2",url:"https://github.com/trending?l=SystemVerilog"},Tcl:{color:"#e4cc98",url:"https://github.com/trending?l=Tcl"},Tcsh:{color:null,url:"https://github.com/trending?l=Tcsh"},Terra:{color:"#00004c",url:"https://github.com/trending?l=Terra"},TeX:{color:"#3D6117",url:"https://github.com/trending?l=TeX"},Thrift:{color:null,url:"https://github.com/trending?l=Thrift"},TIProgram:{color:"#A0AA87",url:"https://github.com/trending?l=TI-Program"},TLA:{color:null,url:"https://github.com/trending?l=TLA"},Turing:{color:"#cf142b",url:"https://github.com/trending?l=Turing"},TXL:{color:null,url:"https://github.com/trending?l=TXL"},TypeScript:{color:"#2b7489",url:"https://github.com/trending?l=TypeScript"},UnifiedParallelC:{color:null,url:"https://github.com/trending?l=Unified-Parallel-C"},UnixAssembly:{color:null,url:"https://github.com/trending?l=Unix-Assembly"},Uno:{color:null,url:"https://github.com/trending?l=Uno"},UnrealScript:{color:"#a54c4d",url:"https://github.com/trending?l=UnrealScript"},UrWeb:{color:null,url:"https://github.com/trending?l=UrWeb"},Vala:{color:"#fbe5cd",url:"https://github.com/trending?l=Vala"},VCL:{color:null,url:"https://github.com/trending?l=VCL"},Verilog:{color:"#b2b7f8",url:"https://github.com/trending?l=Verilog"},VHDL:{color:"#adb2cb",url:"https://github.com/trending?l=VHDL"},Vimscript:{color:"#199f4b",url:"https://github.com/trending?l=Vim-script"},VisualBasic:{color:"#945db7",url:"https://github.com/trending?l=Visual-Basic"},Volt:{color:"#1F1F1F",url:"https://github.com/trending?l=Volt"},Vue:{color:"#2c3e50",url:"https://github.com/trending?l=Vue"},WebAssembly:{color:"#04133b",url:"https://github.com/trending?l=WebAssembly"},WebIDL:{color:null,url:"https://github.com/trending?l=WebIDL"},wisp:{color:"#7582D1",url:"https://github.com/trending?l=wisp"},X10:{color:"#4B6BEF",url:"https://github.com/trending?l=X10"},xBase:{color:"#403a40",url:"https://github.com/trending?l=xBase"},XC:{color:"#99DA07",url:"https://github.com/trending?l=XC"},Xojo:{color:null,url:"https://github.com/trending?l=Xojo"},XProc:{color:null,url:"https://github.com/trending?l=XProc"},XQuery:{color:"#5232e7",url:"https://github.com/trending?l=XQuery"},XS:{color:null,url:"https://github.com/trending?l=XS"},XSLT:{color:"#EB8CEB",url:"https://github.com/trending?l=XSLT"},Xtend:{color:null,url:"https://github.com/trending?l=Xtend"},Yacc:{color:"#4B6C4B",url:"https://github.com/trending?l=Yacc"},Zephir:{color:"#118f9e",url:"https://github.com/trending?l=Zephir"},Zimpl:{color:null,url:"https://github.com/trending?l=Zimpl"}};var n=r(1511),c=r(7294);const i="ghCard_SADR",u="headerTitle__RVn",g="ghLogo_Dvj7",s="header_EL4w",a="headerLogo_j3df",h="description_nH2g",m="footer_DLm1",d="footerItem_ahyA",p="footerItemLanguages_BkNk",b="symbolAndLabel_ZGFn",C="symbol_q0_X",f="label_phh9",S="langColor_kTSd";function E(t){const l=(0,e.ZP)()["docusaurus-plugin-content-blog"].blog.repos[`${t.profile}/${t.repo}`],r=(null==l?void 0:l.description)??"",E=(null==l?void 0:l.stargazers_count)??0,L=(null==l?void 0:l.forks)??0,v=(null==l?void 0:l.language)??"",[A,P]=(0,c.useState)(r),[N,y]=(0,c.useState)(E),[M,B]=(0,c.useState)(L),[F,k]=(0,c.useState)(v);var R=`https://github.com/${t.profile}/${t.repo}`;let w=`https://api.github.com/repos/${t.profile}/${t.repo}`;return l||(0,c.useEffect)((()=>{let t=new XMLHttpRequest;t.onload=function(){let l=JSON.parse(this.response);if(200!=t.status)return;let r=l.description;void 0!==r&&P(r);let e=l.language;void 0!==e&&void 0!==o[e]&&k(e);let n=l.stargazers_count;void 0!==n&&y(n);let c=l.forks;void 0!==c&&B(c)},t.open("GET",w,!0),t.send()}),[]),c.createElement("a",{href:R,className:i},c.createElement("header",{className:s},c.createElement("div",{className:g},c.createElement(n.Z,{size:24})),c.createElement("div",{className:u},c.createElement("h2",null,t.profile,"/"),c.createElement("h1",null,t.repo)),c.createElement("div",{className:a},c.createElement("img",{src:t.logo,width:"auto",height:"100%"}))),c.createElement("summary",{className:h},A),c.createElement("footer",{className:m},c.createElement("div",{className:d},c.createElement("svg",{width:"21",height:"24",role:"img",version:"1.1",viewBox:"0 0 14 16"},c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"})),c.createElement("div",{className:b},c.createElement("span",{className:C},N),c.createElement("span",{className:f},"Stars"))),c.createElement("div",{className:d},c.createElement("svg",{width:"15",height:"24",role:"img",version:"1.1",viewBox:"0 0 10 16"},c.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"})),c.createElement("div",{className:b},c.createElement("span",{className:C},M),c.createElement("span",{className:f},"Forks"))),c.createElement("div",{className:p},c.createElement("span",{className:S,style:{backgroundColor:F?o[F].color:"gray"}}),c.createElement("div",{className:b},c.createElement("span",{className:C},F)))))}},857:(t,l,r)=>{r.d(l,{Z:()=>g});var e=r(5289),o=r(9714),n=r(2046),c=r(7071),i=r(6010),u=r(7294);function g(t){let{children:l,className:r}=t;return u.createElement(e.Z,{className:(0,i.Z)(undefined,r)},u.createElement(c.Z,null),u.createElement(o.Z,null,l),u.createElement(n.Z,null))}},7492:(t,l,r)=>{r.d(l,{Z:()=>V});var e=r(4996),o=r(6555),n=r(3050),c=r(4429),i=r(7856),u=r.n(i),g=r(7294),s=r(2949);function a(t){return g.createElement("svg",{className:t.className,width:t.width,viewBox:"0 0 74 79",xmlns:"http://www.w3.org/2000/svg"},g.createElement("path",{d:"M73.7014 17.9592C72.5616 9.62034 65.1774 3.04876 56.424 1.77536C54.9472 1.56019 49.3517 0.7771 36.3901 0.7771H36.2933C23.3281 0.7771 20.5465 1.56019 19.0697 1.77536C10.56 3.01348 2.78877 8.91838 0.903306 17.356C-0.00357857 21.5113 -0.100361 26.1181 0.068112 30.3439C0.308275 36.404 0.354874 42.4535 0.91406 48.489C1.30064 52.498 1.97502 56.4751 2.93215 60.3905C4.72441 67.6217 11.9795 73.6395 19.0876 76.0945C26.6979 78.6548 34.8821 79.0799 42.724 77.3221C43.5866 77.1245 44.4398 76.8953 45.2833 76.6342C47.1867 76.0381 49.4199 75.3714 51.0616 74.2003C51.0841 74.1839 51.1026 74.1627 51.1156 74.1382C51.1286 74.1138 51.1359 74.0868 51.1368 74.0592V68.2108C51.1364 68.185 51.1302 68.1596 51.1185 68.1365C51.1069 68.1134 51.0902 68.0932 51.0695 68.0773C51.0489 68.0614 51.0249 68.0503 50.9994 68.0447C50.9738 68.0391 50.9473 68.0392 50.9218 68.045C45.8976 69.226 40.7491 69.818 35.5836 69.8087C26.694 69.8087 24.3031 65.6569 23.6184 63.9285C23.0681 62.4347 22.7186 60.8764 22.5789 59.2934C22.5775 59.2669 22.5825 59.2403 22.5934 59.216C22.6043 59.1916 22.621 59.1702 22.6419 59.1533C22.6629 59.1365 22.6876 59.1248 22.714 59.1191C22.7404 59.1134 22.7678 59.1139 22.794 59.1206C27.7345 60.2936 32.799 60.8856 37.8813 60.8843C39.1036 60.8843 40.3223 60.8843 41.5447 60.8526C46.6562 60.7115 52.0437 60.454 57.0728 59.4874C57.1983 59.4628 57.3237 59.4416 57.4313 59.4098C65.3638 57.9107 72.9128 53.2051 73.6799 41.2895C73.7086 40.8204 73.7803 36.3758 73.7803 35.889C73.7839 34.2347 74.3216 24.1533 73.7014 17.9592ZM61.4925 47.6918H53.1514V27.5855C53.1514 23.3526 51.3591 21.1938 47.7136 21.1938C43.7061 21.1938 41.6988 23.7476 41.6988 28.7919V39.7974H33.4078V28.7919C33.4078 23.7476 31.3969 21.1938 27.3894 21.1938C23.7654 21.1938 21.9552 23.3526 21.9516 27.5855V47.6918H13.6176V26.9752C13.6176 22.7423 14.7157 19.3795 16.9118 16.8868C19.1772 14.4 22.1488 13.1231 25.8373 13.1231C30.1064 13.1231 33.3325 14.7386 35.4832 17.9662L37.5587 21.3949L39.6377 17.9662C41.7884 14.7386 45.0145 13.1231 49.2765 13.1231C52.9614 13.1231 55.9329 14.4 58.2055 16.8868C60.4017 19.3772 61.4997 22.74 61.4997 26.9752L61.4925 47.6918Z",fill:"currentColor"}))}function h(t){return g.createElement("svg",{viewBox:"0 0 24 24",className:t.className,width:t.width,xmlns:"http://www.w3.org/2000/svg"},g.createElement("path",{d:"M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z",fill:"currentColor"}))}var m=r(6010);const d="post_OH9c",p="dark_Lat8",b="light_rZSm",C="postWrapper_XtBt",f="postHeader_ydRB",S="postLogoMastodon_DpVa",E="postLogoTwitter_W4eX",L="postHeaderLink_r5Jp",v="postDisplayName_xin6",A="postAvatarText_vPE3",P="postHeaderAvatar_eJLl",N="postUsername_uT8m",y="postContent_srqa",M="postAttachment_fmSs",B="postFooter_Kn1y",F="postFooterContent_xtsb",k="postFooterContentGroup_GR01",R="postFooterSection_yaU7",w="postReblogsIcon_xciN",I="date_vggk";function D(t){var l,r,e,o;const n=t.data,[c,i]=(0,g.useState)((0,s.I)().colorMode);(0,g.useLayoutEffect)((()=>{i(c)}),[]);var u="mastodon"==t.provider?g.createElement(a,{className:S,width:24}):g.createElement(h,{className:E,width:24});return g.createElement("article",{className:(0,m.Z)(d,"dark"==c?p:b)},g.createElement("section",{className:C},g.createElement("a",{href:(null==(l=n.account)?void 0:l.url)??"",className:L},g.createElement("header",{className:f},g.createElement("img",{className:P,src:(null==(r=n.account)?void 0:r.avatarUrl)??""}),g.createElement("section",{className:A},g.createElement("span",{className:v},(null==(e=n.account)?void 0:e.displayName)??""),g.createElement("span",{className:N},(null==(o=n.account)?void 0:o.username)??"")),u)),g.createElement("section",{className:y,dangerouslySetInnerHTML:{__html:n.content??""}}),(n.attachments??[]).map((t=>g.createElement("section",{key:t.url,className:M},g.createElement("a",{href:n.url??""},g.createElement("img",{src:t.url??""})))))),g.createElement("a",{href:n.url??"",style:{textDecoration:"none"}},g.createElement("footer",{className:B},g.createElement("div",{className:F},g.createElement("span",{className:I},new Date(n.createdAt??"").toLocaleString()),g.createElement("div",{className:k},g.createElement("section",{className:R},g.createElement("span",{className:w},g.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"19"},g.createElement("path",{fill:"currentColor",d:"M4.97 3.16c-.1.03-.17.1-.22.18L.8 8.24c-.2.3.03.78.4.8H3.6v2.68c0 4.26-.55 3.62 3.66 3.62h7.66l-2.3-2.84c-.03-.02-.03-.04-.05-.06H7.27c-.44 0-.72-.3-.72-.72v-2.7h2.5c.37.03.63-.48.4-.77L5.5 3.35c-.12-.17-.34-.25-.53-.2zm12.16.43c-.55-.02-1.32.02-2.4.02H7.1l2.32 2.85.03.06h5.25c.42 0 .72.28.72.72v2.7h-2.5c-.36.02-.56.54-.3.8l3.92 4.9c.18.25.6.25.78 0l3.94-4.9c.26-.28 0-.83-.37-.8H18.4v-2.7c0-3.15.4-3.62-1.25-3.66z"}))),g.createElement("span",null,n.reblogsCount)),g.createElement("section",{className:R},g.createElement("svg",{width:"18",role:"img",version:"1.1",viewBox:"0 0 14 16",style:{marginRight:"8px",marginTop:"-1px"}},g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"})),g.createElement("span",null,n.favoritesCount)))))))}var _=r(8084);var T=r(7252),O=r(3612),G=r(814),x=r(4673),Z=r(5162),H=r(4866);const V={...T.Z,BlogDiscordInvite:o.Z,FancyImage:n.Z,Toot:function(t){const[l,r]=(0,g.useState)({});var e=`https://${t.server}/api/v1/statuses/${t.tootId}`;return(0,g.useEffect)((()=>{var l=u()(window);let o=new XMLHttpRequest;o.onload=function(){var e,n,c,i,u;let g=JSON.parse(this.response);if(200==o.status){var s={url:g.url,createdAt:g.created_at,content:l.sanitize(g.content??""),favoritesCount:g.favourites_count,reblogsCount:g.reblogs_count,account:{username:null!=(e=g.account)&&e.username?"@"+(null==(n=g.account)?void 0:n.username)+"@"+t.server:"",displayName:null==(c=g.account)?void 0:c.display_name,url:null==(i=g.account)?void 0:i.url,avatarUrl:null==(u=g.account)?void 0:u.avatar},attachments:g.media_attachments.map((t=>({type:t.type,url:t.url})))};r(s)}},o.open("GET",e,!0),o.send()}),[]),g.createElement(D,{data:l,provider:"mastodon"})},Tweet:function(t){var l=(0,_.ZP)()["docusaurus-plugin-content-blog"].blog.twitterData[t.id];return g.createElement(D,{data:l,provider:"twitter"})},GithubCard:c.Z,Spacer:function(t){return g.createElement("section",{style:{marginBottom:"var(--ifm-leading)"}},t.children)},useBaseUrl:e.Z,Tabs:H.Z,TabItem:Z.Z,Admonition:O.Z,Details:x.Z,CodeBlock:G.Z}}}]);
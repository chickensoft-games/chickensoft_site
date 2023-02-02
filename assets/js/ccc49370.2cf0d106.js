"use strict";(self.webpackChunkchickensoft_docs=self.webpackChunkchickensoft_docs||[]).push([[103],{9058:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7294),l=n(6010),r=n(3408),o=n(7524),s=n(9960),i=n(5999);const c="sidebar_re4s",m="sidebarItemTitle_pO2u",u="sidebarItemList_Yudw",d="sidebarItem__DBe",g="sidebarItemLink_mo7H",p="sidebarItemLinkActive_I1ZP";function f(e){let{sidebar:t}=e;return a.createElement("aside",{className:"col col--3"},a.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),a.createElement("ul",{className:(0,l.Z)(u,"clean-list")},t.items.map((e=>a.createElement("li",{key:e.permalink,className:d},a.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:p},e.title)))))))}var h=n(3102);function v(e){let{sidebar:t}=e;return a.createElement("ul",{className:"menu__list"},t.items.map((e=>a.createElement("li",{key:e.permalink,className:"menu__list-item"},a.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function b(e){return a.createElement(h.Zo,{component:v,props:e})}function E(e){let{sidebar:t}=e;const n=(0,o.i)();return null!=t&&t.items.length?"mobile"===n?a.createElement(b,{sidebar:t}):a.createElement(f,{sidebar:t}):null}function N(e){const{sidebar:t,toc:n,children:o,...s}=e,i=t&&t.items.length>0;return a.createElement(r.Z,s,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},a.createElement(E,{sidebar:t}),a.createElement("main",{className:(0,l.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},o),n&&a.createElement("div",{className:"col col--2"},n))))}},5203:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var a=n(7294),l=n(6010),r=n(1944),o=n(5281),s=n(9460),i=n(9058),c=n(2358),m=n(7462),u=n(5999),d=n(2244);function g(e){const{nextItem:t,prevItem:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(d.Z,(0,m.Z)({},n,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(d.Z,(0,m.Z)({},t,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function p(){const{assets:e,metadata:t}=(0,s.C)(),{title:n,description:l,date:o,tags:i,authors:c,frontMatter:m}=t,{keywords:u}=m,d=e.image??m.image;return a.createElement(r.d,{title:n,description:l,keywords:u,image:d},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:o}),c.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:c.map((e=>e.url)).filter(Boolean).join(",")}),i.length>0&&a.createElement("meta",{property:"article:tag",content:i.map((e=>e.label)).join(",")}))}var f=n(9407);function h(e){let{sidebar:t,children:n}=e;const{metadata:l,toc:r}=(0,s.C)(),{nextItem:o,prevItem:m,frontMatter:u}=l,{hide_table_of_contents:d,toc_min_heading_level:p,toc_max_heading_level:h}=u;return a.createElement(i.Z,{sidebar:t,toc:!d&&r.length>0?a.createElement(f.Z,{toc:r,minHeadingLevel:p,maxHeadingLevel:h}):void 0},a.createElement(c.Z,null,n),(o||m)&&a.createElement(g,{nextItem:o,prevItem:m}))}function v(e){const t=e.content;return a.createElement(s.n,{content:e.content,isBlogPostPage:!0},a.createElement(r.FG,{className:(0,l.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage)},a.createElement(p,null),a.createElement(h,{sidebar:e.sidebar},a.createElement(t,null))))}},2244:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),l=n(6010),r=n(9960);function o(e){const{permalink:t,title:n,subLabel:o,isNext:s}=e;return a.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},o&&a.createElement("div",{className:"pagination-nav__sublabel"},o),a.createElement("div",{className:"pagination-nav__label"},n))}},9407:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7462),l=n(7294),r=n(6010),o=n(3743);const s="tableOfContents_bqdL";function i(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,r.Z)(s,"thin-scrollbar",t)},l.createElement(o.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(7462),l=n(7294),r=n(6668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function s(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=s({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function i(e){const t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function c(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>i(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function m(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function u(e){const t=(0,l.useRef)(void 0),n=m();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:o}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),i=c(s,{anchorTopOffset:n.current}),m=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===m)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,n])}function d(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(d,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const g=l.memo(d);function p(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:m,maxHeadingLevel:d,...p}=e;const f=(0,r.L)(),h=m??f.tableOfContents.minHeadingLevel,v=d??f.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>s({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:h,maxHeadingLevel:v});return u((0,l.useMemo)((()=>{if(i&&c)return{linkClassName:i,linkActiveClassName:c,minHeadingLevel:h,maxHeadingLevel:v}}),[i,c,h,v])),l.createElement(g,(0,a.Z)({toc:b,className:n,linkClassName:i},p))}},9460:(e,t,n)=>{n.d(t,{C:()=>s,n:()=>o});var a=n(7294),l=n(902);const r=a.createContext(null);function o(e){let{children:t,content:n,isBlogPostPage:l=!1}=e;const o=function(e){let{content:t,isBlogPostPage:n}=e;return(0,a.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:n})),[t,n])}({content:n,isBlogPostPage:l});return a.createElement(r.Provider,{value:o},t)}function s(){const e=(0,a.useContext)(r);if(null===e)throw new l.i6("BlogPostProvider");return e}},2358:(e,t,n)=>{n.d(t,{Z:()=>$});var a=n(7294),l=n(4996),r=n(9460);function o(e){let{children:t,className:n}=e;const{frontMatter:o,assets:s}=(0,r.C)(),{withBaseUrl:i}=(0,l.C)(),c=s.image??o.image;return a.createElement("article",{className:n,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},c&&a.createElement("meta",{itemProp:"image",content:i(c,{absolute:!0})}),t)}var s=n(6010),i=n(8780),c=n(737);function m(e){let{children:t,className:n}=e;const{isBlogPostPage:l}=(0,r.C)();return a.createElement("div",{id:l?i.blogPostContainerID:void 0,className:(0,s.Z)("markdown",n),itemProp:"articleBody"},a.createElement(c.Z,null,t))}var u=n(4881),d=n(6233),g=n(7462),p=n(5999),f=n(9960);function h(){return a.createElement("b",null,a.createElement(p.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function v(e){const{blogPostTitle:t,...n}=e;return a.createElement(f.Z,(0,g.Z)({"aria-label":(0,p.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},n),a.createElement(h,null))}const b="blogPostFooterDetailsFull_mRVl";function E(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:n,title:l,editUrl:o,hasTruncateMarker:i}=e,c=!t&&i,m=n.length>0;return m||c||o?a.createElement("footer",{className:(0,s.Z)("row docusaurus-mt-lg",t&&b)},m&&a.createElement("div",{className:(0,s.Z)("col",{"col--9":c})},a.createElement(d.Z,{tags:n})),t&&o&&a.createElement("div",{className:"col margin-top--sm"},a.createElement(u.Z,{editUrl:o})),c&&a.createElement("div",{className:(0,s.Z)("col text--right",{"col--3":m})},a.createElement(v,{blogPostTitle:l,to:e.permalink}))):null}const N="title_f1Hy";function _(e){let{className:t}=e;const{metadata:n,isBlogPostPage:l}=(0,r.C)(),{permalink:o,title:i}=n,c=l?"h1":"h2";return a.createElement(c,{className:(0,s.Z)(N,t),itemProp:"headline"},l?i:a.createElement(f.Z,{itemProp:"url",to:o},i))}var k=n(2263);const L=["zero","one","two","few","many","other"];function Z(e){return L.filter((t=>e.includes(t)))}const P={locale:"en",pluralForms:Z(["one","other"]),select:e=>1===e?"one":"other"};function C(){const{i18n:{currentLocale:e}}=(0,k.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:Z(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),P}}),[e])}function x(){const e=C();return{selectMessage:(t,n)=>function(e,t,n){const a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const l=n.select(t),r=n.pluralForms.indexOf(l);return a[Math.min(r,a.length-1)]}(n,t,e)}}const H="container_mt6G";function y(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=x();return t=>{const n=Math.ceil(t);return e(n,(0,p.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return a.createElement(a.Fragment,null,n(t))}function I(e){let{date:t,formattedDate:n}=e;return a.createElement("time",{dateTime:t,itemProp:"datePublished"},n)}function w(){return a.createElement(a.Fragment,null," \xb7 ")}function T(e){let{className:t}=e;const{metadata:n}=(0,r.C)(),{date:l,formattedDate:o,readingTime:i}=n;return a.createElement("div",{className:(0,s.Z)(H,"margin-vert--md",t)},a.createElement(I,{date:l,formattedDate:o}),void 0!==i&&a.createElement(a.Fragment,null,a.createElement(w,null),a.createElement(y,{readingTime:i})))}var M=n(356);const A="authorCol_Hf19",B="imageOnlyAuthorRow_pa_O",O="imageOnlyAuthorCol_G86a";function R(e){let{className:t}=e;const{metadata:{authors:n},assets:l}=(0,r.C)();if(0===n.length)return null;const o=n.every((e=>{let{name:t}=e;return!t}));return a.createElement("div",{className:(0,s.Z)("margin-top--md margin-bottom--sm",o?B:"row",t)},n.map(((e,t)=>a.createElement("div",{className:(0,s.Z)(!o&&"col col--6",o?O:A),key:t},a.createElement(M.Z,{author:{...e,imageURL:l.authorsImageUrls[t]??e.imageURL}})))))}function F(){return a.createElement("header",null,a.createElement(_,null),a.createElement(T,null),a.createElement(R,null))}function $(e){let{children:t,className:n}=e;return a.createElement(o,{className:(0,s.Z)(undefined,n)},a.createElement(F,null),a.createElement(m,null,t),a.createElement(E,null))}}}]);
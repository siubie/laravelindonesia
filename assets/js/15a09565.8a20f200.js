(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{108:function(a,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return m}));var t=n(0),l=n.n(t);function i(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function r(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function o(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function p(a,e){if(null==a)return{};var n,t,l=function(a,e){if(null==a)return{};var n,t,l={},i=Object.keys(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(l[n]=a[n]);return l}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(l[n]=a[n])}return l}var u=l.a.createContext({}),s=function(a){var e=l.a.useContext(u),n=e;return a&&(n="function"==typeof a?a(e):o(o({},e),a)),n},c=function(a){var e=s(a.components);return l.a.createElement(u.Provider,{value:e},a.children)},d={inlineCode:"code",wrapper:function(a){var e=a.children;return l.a.createElement(l.a.Fragment,{},e)}},b=l.a.forwardRef((function(a,e){var n=a.components,t=a.mdxType,i=a.originalType,r=a.parentName,u=p(a,["components","mdxType","originalType","parentName"]),c=s(n),b=t,m=c["".concat(r,".").concat(b)]||c[b]||d[b]||i;return n?l.a.createElement(m,o(o({ref:e},u),{},{components:n})):l.a.createElement(m,o({ref:e},u))}));function m(a,e){var n=arguments,t=e&&e.mdxType;if("string"==typeof a||t){var i=n.length,r=new Array(i);r[0]=b;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=a,o.mdxType="string"==typeof a?a:t,r[1]=o;for(var u=2;u<i;u++)r[u]=n[u];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},158:function(a,e,n){"use strict";n.r(e),e.default=n.p+"assets/images/ninja-1356bb3df95d5ccd7f94804bfd9632bf.png"},76:function(a,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return i})),n.d(e,"metadata",(function(){return r})),n.d(e,"toc",(function(){return o})),n.d(e,"default",(function(){return u}));var t=n(3),l=(n(0),n(108));const i={title:"Cara Install Laravel"},r={unversionedId:"cara-install",id:"cara-install",isDocsHomePage:!1,title:"Cara Install Laravel",description:"Apa Sih Yang Dibutuhkan Untuk Develop Laravel",source:"@site/docs/cara-install.md",slug:"/cara-install",permalink:"/laravelindonesia/docs/cara-install",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/cara-install.md",version:"current",sidebar:"docs",previous:{title:"Selamat Datang Para Pejuang",permalink:"/laravelindonesia/docs/"},next:{title:"Content Cooming Soon",permalink:"/laravelindonesia/docs/cooming-soon"}},o=[{value:"Apa Sih Yang Dibutuhkan Untuk Develop Laravel",id:"apa-sih-yang-dibutuhkan-untuk-develop-laravel",children:[{value:"Gimana dengan Xampp",id:"gimana-dengan-xampp",children:[]},{value:"Jangan gunakan Xampp untuk production",id:"jangan-gunakan-xampp-untuk-production",children:[]}]},{value:"Permudah Install Dengan Chocolatey",id:"permudah-install-dengan-chocolatey",children:[]},{value:"Install Php",id:"install-php",children:[]},{value:"Install Mysql",id:"install-mysql",children:[]},{value:"Install Composer",id:"install-composer",children:[]},{value:"Install Nodejs",id:"install-nodejs",children:[]},{value:"Install Git",id:"install-git",children:[]},{value:"Pilihan Mode Install Laravel 8",id:"pilihan-mode-install-laravel-8",children:[]},{value:"Setup Setelah Install",id:"setup-setelah-install",children:[]}],p={toc:o};function u({components:a,...e}){return Object(l.b)("wrapper",Object(t.a)({},p,e,{components:a,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"apa-sih-yang-dibutuhkan-untuk-develop-laravel"},"Apa Sih Yang Dibutuhkan Untuk Develop Laravel"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Php : minimal php 7.4"),Object(l.b)("li",{parentName:"ol"},"Mysql : mysql 8"),Object(l.b)("li",{parentName:"ol"},"Composer : ambil yang stable  "),Object(l.b)("li",{parentName:"ol"},"Nodejs : ambil yang stable"),Object(l.b)("li",{parentName:"ol"},"Git : ikut versi yang ada")),Object(l.b)("h3",{id:"gimana-dengan-xampp"},"Gimana dengan Xampp"),Object(l.b)("p",null,Object(l.b)("img",{alt:"ninja meme",src:n(158).default})),Object(l.b)("p",null,'Untuk development laravel saya lebih memilih setup manual masing masing stack php, mysql, composer, nodejs dan git. Kenapa ? karena dengan menggunakan stack yang diinstall sendiri anda akan lebih "dekat" dengan "console", nantinya ketika ngoding laravel bakalan banyak berinteraksi dengan console / terminal.'),Object(l.b)("p",null,"Bukan tidak bisa tapi ini pilihan saja, jika anda masih belum siap untuk lompat ke console silahkan tetap menggunakan xampp ga masalah sama aja :D "),Object(l.b)("h3",{id:"jangan-gunakan-xampp-untuk-production"},"Jangan gunakan Xampp untuk production"),Object(l.b)("p",null,"Nah ini juga merupakan salah satu alasan kenapa saya tidak merekomendasikan Xampp untuk laravel, kalo belajar basic masi oke gpp pake xampp karena saya pun dulu memulai belajar dari sana. Tapi ketika kita nggarap project dan terbiasa dengan xampp perlu kita pahami xampp tidak di setup untuk production cuma di set up untuk development. Demikian juga dengan stack yang kita install sendiri untuk development di atas tidak bisa serta merta di pake untuk production karena ada proses tersendiri untuk membuat server yang production ready."),Object(l.b)("h2",{id:"permudah-install-dengan-chocolatey"},"Permudah Install Dengan Chocolatey"),Object(l.b)("h2",{id:"install-php"},"Install Php"),Object(l.b)("h2",{id:"install-mysql"},"Install Mysql"),Object(l.b)("h2",{id:"install-composer"},"Install Composer"),Object(l.b)("h2",{id:"install-nodejs"},"Install Nodejs"),Object(l.b)("h2",{id:"install-git"},"Install Git"),Object(l.b)("h2",{id:"pilihan-mode-install-laravel-8"},"Pilihan Mode Install Laravel 8"),Object(l.b)("p",null,"Ada dua pilihan untuk nginstall laravel yaitu"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"laravel installer"),Object(l.b)("li",{parentName:"ol"},"composer create-project")),Object(l.b)("h2",{id:"setup-setelah-install"},"Setup Setelah Install"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Setup .env"),Object(l.b)("li",{parentName:"ol"},"Setup Database"),Object(l.b)("li",{parentName:"ol"},"Setup Application key")))}u.isMDXComponent=!0}}]);
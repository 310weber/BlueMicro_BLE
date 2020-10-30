(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{111:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,f=u["".concat(i,".").concat(b)]||u[b]||p[b]||o;return n?a.a.createElement(f,c(c({ref:t},s),{},{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),o=(n(0),n(111)),i={id:"tut_base",title:"Setting up",sidebar_label:"Basic setup",slug:"/tut_base"},c={unversionedId:"tutorials/tut_base",id:"tutorials/tut_base",isDocsHomePage:!1,title:"Setting up",description:"### hardware_config.h",source:"@site/docs/tutorials/base.md",slug:"/tut_base",permalink:"/docs/tut_base",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tutorials/base.md",version:"current",sidebar_label:"Basic setup",sidebar:"someSidebar",previous:{title:"Hardware-specific Keycodes",permalink:"/docs/keycodes_hardware"},next:{title:"Finding Keycodes",permalink:"/docs/tut_keycodes"}},l=[{value:"hardware_config.h",id:"hardware_configh",children:[]},{value:"keyboard_config.h",id:"keyboard_configh",children:[]},{value:"keymap.h",id:"keymaph",children:[]},{value:"keymap.cpp",id:"keymapcpp",children:[]}],s={rightToc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("figure",{class:"video-container"},Object(o.b)("iframe",{src:"//www.youtube.com/embed/TD9BAB1R4jg",frameborder:"0",allowfullscreen:!0,width:"100%"})),Object(o.b)("h3",{id:"hardware_configh"},"hardware_config.h"),Object(o.b)("p",null,"This file contains the basic hardware configuration of your keyboard.\nIt will contain at the minimum these 5 lines:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c++"}),"#define MATRIX_ROWS 4\n#define MATRIX_COLS 4\n#define MATRIX_ROW_PINS {43, 3, 28, 45}\n#define MATRIX_COL_PINS {2, 29, 30,  26}\n#define DIODE_DIRECTION COL2ROW\n")),Object(o.b)("p",null,"Other lines can be added for other features like battery monitoring, RGB Underglow, Backlight LEDs and other hardware features that are connected to the microcontroller. For more information on the options available to add in ",Object(o.b)("strong",{parentName:"p"},"hardware_config.h")," refer ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/configure"}),"here")),Object(o.b)("h3",{id:"keyboard_configh"},"keyboard_config.h"),Object(o.b)("p",null,"This file contains the basic firmware configuration of your keyboard. It will contain at the minimum these 4 lines and a KEYMAP macro definition:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c++"}),'#define KEYBOARD_SIDE SINGLE\n#define DEVICE_NAME                         "4x4Backpack"                          \n#define DEVICE_MODEL                        "4x4Backpack_V1"                      \n#define MANUFACTURER_NAME                   "keyboards.jpconstantineau.com"      \n\n\n#define KEYMAP( \\\n     K00,   K01,   K02,   K03,      \\\n     K10,   K11,   K12,   K13,     \\\n     K20,   K21,   K22,   K23,     \\\n     K30,   K31,   K32,   K33 \\\n) { \\\n    { K00,   K01,   K02,   K03,   }, \\\n    { K10,   K11,   K12,   K13,   }, \\\n    { K20,   K21,   K22,   K23,   }, \\\n    { K30,   K31,   K32,   K33    } \\\n}\n')),Object(o.b)("p",null,"If you have a split keyboard, you will also need to define the name of the left and right halves."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c++"}),'#define DEVICE_NAME_R                         "ErgoTravel_R"  \n#define DEVICE_NAME_L                         "ErgoTravel_L"  \n')),Object(o.b)("h3",{id:"keymaph"},"keymap.h"),Object(o.b)("p",null,"The most basic keymap.h file will need the following two lines to declare the matrix of keys and a function to map keycodes to the keys."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c++"}),"void setupKeymap();\nextern std::array<std::array<Key, MATRIX_COLS>, MATRIX_ROWS> matrix; \n")),Object(o.b)("h3",{id:"keymapcpp"},"keymap.cpp"),Object(o.b)("p",null," The most basic keymap.cpp file will define what we declared above."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-c++"}),"std::array<std::array<Key, MATRIX_COLS>, MATRIX_ROWS> matrix =\n      KEYMAP2ARRAY(KEYMAP(\n      KC_7,    KC_8,    KC_9,    KC_KP_SLASH,\n      KC_4,    KC_5,    KC_6,    KC_KP_ASTERISK,\n      KC_1,    KC_2,    KC_3,    KC_KP_MINUS,\n      KC_0,    KC_0,    KC_DOT,  KC_KP_PLUS \n      ));\n\nvoid setupKeymap() {\n  ;  // this function does nothing in this case.\n}\n")))}d.isMDXComponent=!0}}]);
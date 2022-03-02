exports.id = 695;
exports.ids = [695];
exports.modules = {

/***/ 1349:
/***/ ((module) => {

module.exports={siteTitle:'Kiara Barias',// <title>
manifestName:'SolidState',manifestShortName:'Landing',// max 12 characters
manifestStartUrl:'/',manifestBackgroundColor:'#663399',manifestThemeColor:'#663399',manifestDisplay:'standalone',manifestIcon:'src/assets/images/white-no_circle.png',pathPrefix:`/kiara-barias/`,// This path is subpath of your hosting https://domain/portfolio
heading:'Kiara Barias',subHeading:'Software Engineer and Web Devloper.  ',// social
socialLinks:[{icon:'fa-github',name:'Github',url:'https://github.com/Kbarias'},{icon:'fa-envelope-o',name:'Email',url:'mailto:kiara.barias@gmail.com'}],address:'Brooklyn, New York'};

/***/ }),

/***/ 3656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "/Users/kiarabarias/Desktop/Development/gatsby-kiara-website/node_modules/react/index.js"
var index_js_ = __webpack_require__(6770);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-helmet/lib/Helmet.js
var Helmet = __webpack_require__(5482);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 4 modules
var gatsby_browser_entry = __webpack_require__(7533);
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(1349);
var config_default = /*#__PURE__*/__webpack_require__.n(config);
;// CONCATENATED MODULE: ./src/components/Footer.js
function Footer(){return/*#__PURE__*/index_js_default().createElement("section",{id:"footer"},/*#__PURE__*/index_js_default().createElement("div",{className:"inner"},/*#__PURE__*/index_js_default().createElement("h2",{className:"major"},"Get in touch"),/*#__PURE__*/index_js_default().createElement("p",null,"If you would like to work together or have any questions, please reach out to me below."),/*#__PURE__*/index_js_default().createElement("form",{method:"post",action:"/#"},/*#__PURE__*/index_js_default().createElement("div",{className:"fields"},/*#__PURE__*/index_js_default().createElement("div",{className:"field"},/*#__PURE__*/index_js_default().createElement("label",{htmlFor:"name"},"Name"),/*#__PURE__*/index_js_default().createElement("input",{type:"text",name:"name",id:"name"})),/*#__PURE__*/index_js_default().createElement("div",{className:"field"},/*#__PURE__*/index_js_default().createElement("label",{htmlFor:"email"},"Email"),/*#__PURE__*/index_js_default().createElement("input",{type:"email",name:"email",id:"email"})),/*#__PURE__*/index_js_default().createElement("div",{className:"field"},/*#__PURE__*/index_js_default().createElement("label",{htmlFor:"message"},"Message"),/*#__PURE__*/index_js_default().createElement("textarea",{name:"message",id:"message",rows:"4"}))),/*#__PURE__*/index_js_default().createElement("ul",{className:"actions"},/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("input",{type:"submit",value:"Send Message"})))),/*#__PURE__*/index_js_default().createElement("ul",{className:"contact"},/*#__PURE__*/index_js_default().createElement("li",{className:"fa-home"},(config_default()).address),/*#__PURE__*/index_js_default().createElement("li",{className:"fa-phone"},(config_default()).phone),config_default().socialLinks.map(social=>{const{icon,url}=social;return/*#__PURE__*/index_js_default().createElement("li",{className:`${icon}`,key:url},/*#__PURE__*/index_js_default().createElement("a",{href:url},url));})),/*#__PURE__*/index_js_default().createElement("ul",{className:"copyright"},/*#__PURE__*/index_js_default().createElement("li",null,"\xA9 Kiara Barias. All rights reserved."),/*#__PURE__*/index_js_default().createElement("li",null,"Design: ",/*#__PURE__*/index_js_default().createElement("a",{href:"https://anubhavsrivastava.github.io/gatsby-starter-solidstate/"},"Anubhav Srivastava")))));}
;// CONCATENATED MODULE: ./src/components/Nav.js
function Nav({onMenuToggle=()=>{}}){return/*#__PURE__*/index_js_default().createElement("nav",{id:"menu"},/*#__PURE__*/index_js_default().createElement("div",{className:"inner"},/*#__PURE__*/index_js_default().createElement("h2",null,"Menu"),/*#__PURE__*/index_js_default().createElement("ul",{className:"links"},/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{onClick:e=>{onMenuToggle();},to:"/"},"Home")),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{onClick:e=>{onMenuToggle();},to:"/Generic"},"Generic Page")),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{onClick:e=>{onMenuToggle();},to:"/Elements"},"Elements"))),/*#__PURE__*/index_js_default().createElement("a",{className:"close",onClick:e=>{e.preventDefault();onMenuToggle();},href:"#menu"},'')));}
;// CONCATENATED MODULE: ./src/components/Sidebar.js
function SideBar({fullMenu}){const{0:headerOpen,1:toggleHeader}=(0,index_js_.useState)(false);return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement("header",{id:"header",className:`${fullMenu?'':'alt'}`},/*#__PURE__*/index_js_default().createElement("h1",null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/"},"Solid State"))),/*#__PURE__*/index_js_default().createElement("div",{className:`${headerOpen?'is-menu-visible':' '}`},/*#__PURE__*/index_js_default().createElement(Nav,{onMenuToggle:()=>toggleHeader(!headerOpen)})));}
;// CONCATENATED MODULE: ./src/components/Layout.js
class Layout extends index_js_.Component{constructor(props){super(props);this.state={isPreloaded:true};}componentDidMount(){this.timeoutId=setTimeout(()=>{this.setState({isPreloaded:false});},100);}componentWillUnmount(){if(this.timeoutId){clearTimeout(this.timeoutId);}}render(){const{children,fullMenu}=this.props;const{isPreloaded}=this.state;return/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.StaticQuery,{query:"3649515864",render:data=>/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(Helmet["default"],{title:data.site.siteMetadata.title,meta:[{name:'description',content:'Kiara Barias'},{name:'keywords',content:'site, web'}]},/*#__PURE__*/index_js_default().createElement("html",{lang:"en"})),/*#__PURE__*/index_js_default().createElement("div",{className:isPreloaded?' main-body  is-preload':' main-body'},/*#__PURE__*/index_js_default().createElement("div",{id:"page-wrapper"},/*#__PURE__*/index_js_default().createElement(SideBar,{fullMenu:fullMenu}),children,/*#__PURE__*/index_js_default().createElement(Footer,null))))});}}Layout.propTypes={children:(prop_types_default()).node.isRequired};/* harmony default export */ const components_Layout = (Layout);

/***/ }),

/***/ 7369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Generic)
});

// EXTERNAL MODULE: external "/Users/kiarabarias/Desktop/Development/gatsby-kiara-website/node_modules/react/index.js"
var index_js_ = __webpack_require__(6770);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./src/components/Layout.js + 3 modules
var Layout = __webpack_require__(3656);
;// CONCATENATED MODULE: ./src/assets/images/pic04.jpg
/* harmony default export */ const pic04 = (__webpack_require__.p + "static/pic04-0cce5fdd30f4a250087c1cb3fbc9929a.jpg");
// EXTERNAL MODULE: ./src/assets/images/pic05.jpg
var pic05 = __webpack_require__(518);
;// CONCATENATED MODULE: ./src/pages/Generic.js
const IndexPage=()=>/*#__PURE__*/index_js_default().createElement(Layout/* default */.Z,{fullMenu:true},/*#__PURE__*/index_js_default().createElement("section",{id:"wrapper"},/*#__PURE__*/index_js_default().createElement("header",null,/*#__PURE__*/index_js_default().createElement("div",{className:"inner"},/*#__PURE__*/index_js_default().createElement("h2",null,"Generic"),/*#__PURE__*/index_js_default().createElement("p",null,"Phasellus non pulvinar erat. Fusce tincidunt nisl eget ipsum."))),/*#__PURE__*/index_js_default().createElement("div",{className:"wrapper"},/*#__PURE__*/index_js_default().createElement("div",{className:"inner"},/*#__PURE__*/index_js_default().createElement("h3",{className:"major"},"Lorem ipsum dolor"),/*#__PURE__*/index_js_default().createElement("p",null,"Morbi mattis mi consectetur tortor elementum, varius pellentesque velit convallis. Aenean tincidunt lectus auctor mauris maximus, ac scelerisque ipsum tempor. Duis vulputate ex et ex tincidunt, quis lacinia velit aliquet. Duis non efficitur nisi, id malesuada justo. Maecenas sagittis felis ac sagittis semper. Curabitur purus leo donec vel dolor at arcu tincidunt bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce ut aliquet justo. Donec id neque ipsum. Integer eget ultricies odio. Nam vel ex a orci fringilla tincidunt. Aliquam eleifend ligula non velit accumsan cursus. Etiam ut gravida sapien."),/*#__PURE__*/index_js_default().createElement("p",null,"Vestibulum ultrices risus velit, sit amet blandit massa auctor sit amet. Sed eu lectus sem. Phasellus in odio at ipsum porttitor mollis id vel diam. Praesent sit amet posuere risus, eu faucibus lectus. Vivamus ex ligula, tempus pulvinar ipsum in, auctor porta quam. Proin nec commodo, vel scelerisque nisi scelerisque. Suspendisse id quam vel tortor tincidunt suscipit. Nullam auctor orci eu dolor consectetur, interdum ullamcorper ante tincidunt. Mauris felis nec felis elementum varius."),/*#__PURE__*/index_js_default().createElement("h3",{className:"major"},"Vitae phasellus"),/*#__PURE__*/index_js_default().createElement("p",null,"Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet."),/*#__PURE__*/index_js_default().createElement("section",{className:"features"},/*#__PURE__*/index_js_default().createElement("article",null,/*#__PURE__*/index_js_default().createElement("a",{href:"/#",className:"image"},/*#__PURE__*/index_js_default().createElement("img",{src:pic04,alt:""})),/*#__PURE__*/index_js_default().createElement("h3",{className:"major"},"Sed feugiat lorem"),/*#__PURE__*/index_js_default().createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices."),/*#__PURE__*/index_js_default().createElement("a",{href:"/#",className:"special"},"Learn more")),/*#__PURE__*/index_js_default().createElement("article",null,/*#__PURE__*/index_js_default().createElement("a",{href:"/#",className:"image"},/*#__PURE__*/index_js_default().createElement("img",{src:pic05/* default */.Z,alt:""})),/*#__PURE__*/index_js_default().createElement("h3",{className:"major"},"Nisl placerat"),/*#__PURE__*/index_js_default().createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices."),/*#__PURE__*/index_js_default().createElement("a",{href:"/#",className:"special"},"Learn more")))))));/* harmony default export */ const Generic = (IndexPage);

/***/ }),

/***/ 518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/pic05-ef6f7c8d45b1a0773c82db69ef9c5132.jpg");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-generic-js.js.map
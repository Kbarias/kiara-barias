exports.id = 678;
exports.ids = [678];
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

/***/ 3173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "/Users/kiarabarias/Desktop/Development/gatsby-kiara-website/node_modules/react/index.js"
var index_js_ = __webpack_require__(6770);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./src/components/Layout.js + 3 modules
var Layout = __webpack_require__(3656);
// EXTERNAL MODULE: ./src/assets/images/pic02.jpg
var pic02 = __webpack_require__(5793);
;// CONCATENATED MODULE: ./src/assets/images/new-york.jpg
/* harmony default export */ const new_york = (__webpack_require__.p + "static/new-york-9045bd4e3370e94d915f72e73694d6cf.jpg");
;// CONCATENATED MODULE: ./src/assets/images/agora-landingpage.png
/* harmony default export */ const agora_landingpage = (__webpack_require__.p + "static/agora-landingpage-0191502ab922fbb66611e0f7e54729e0.png");
;// CONCATENATED MODULE: ./src/assets/images/real-estate.png
/* harmony default export */ const real_estate = (__webpack_require__.p + "static/real-estate-8eb772db3569e1e7e89da467390c32d1.png");
;// CONCATENATED MODULE: ./src/assets/images/white-no_circle.png
/* harmony default export */ const white_no_circle = (__webpack_require__.p + "static/white-no_circle-b8bc3de53a2bf53ceecaf58d88f3b136.png");
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(1349);
var config_default = /*#__PURE__*/__webpack_require__.n(config);
;// CONCATENATED MODULE: ./src/pages/index.js
const IndexPage=()=>/*#__PURE__*/index_js_default().createElement(Layout/* default */.Z,null,/*#__PURE__*/index_js_default().createElement("section",{id:"banner"},/*#__PURE__*/index_js_default().createElement("div",{className:"inner"},/*#__PURE__*/index_js_default().createElement("div",{className:"logo"},/*#__PURE__*/index_js_default().createElement("img",{className:"icon",src:white_no_circle})),/*#__PURE__*/index_js_default().createElement("h2",null,(config_default()).heading),/*#__PURE__*/index_js_default().createElement("p",null,(config_default()).subHeading))),/*#__PURE__*/index_js_default().createElement("section",{id:"wrapper"},/*#__PURE__*/index_js_default().createElement("section",{id:"one",className:"wrapper spotlight style1"},/*#__PURE__*/index_js_default().createElement("div",{className:"inner"},/*#__PURE__*/index_js_default().createElement("a",{href:"/#",className:"image"},/*#__PURE__*/index_js_default().createElement("img",{src:new_york,alt:""})),/*#__PURE__*/index_js_default().createElement("div",{className:"content"},/*#__PURE__*/index_js_default().createElement("h2",{className:"major"},"About Me"),/*#__PURE__*/index_js_default().createElement("p",null,"I am a Software Engineer from Brooklyn, New York. I studied Computer Science at CUNY Hunter College. I enjoy working on web development projects that include websites and web applications as a full stack engineer.")))),/*#__PURE__*/index_js_default().createElement("section",{id:"two",className:"wrapper alt spotlight style2"},/*#__PURE__*/index_js_default().createElement("div",{className:"inner"},/*#__PURE__*/index_js_default().createElement("a",{href:"/#",className:"image"},/*#__PURE__*/index_js_default().createElement("img",{src:"https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",alt:""})),/*#__PURE__*/index_js_default().createElement("div",{className:"content"},/*#__PURE__*/index_js_default().createElement("h2",{className:"major"},"My Skills"),/*#__PURE__*/index_js_default().createElement("p",null,"I have used various programming languages for my personal and work projects. These are some of my skills that I am able to use to bring products to life."),/*#__PURE__*/index_js_default().createElement("div",{className:"row"},/*#__PURE__*/index_js_default().createElement("div",{className:"col-6 col-12-medium"},/*#__PURE__*/index_js_default().createElement("ul",null,/*#__PURE__*/index_js_default().createElement("li",null,"JAVASCRIPT"),/*#__PURE__*/index_js_default().createElement("li",null,"REACT"),/*#__PURE__*/index_js_default().createElement("li",null,"HTML"),/*#__PURE__*/index_js_default().createElement("li",null,"CSS"))),/*#__PURE__*/index_js_default().createElement("div",{className:"col-6 col-12-medium"},/*#__PURE__*/index_js_default().createElement("ul",null,/*#__PURE__*/index_js_default().createElement("li",null,"C++"),/*#__PURE__*/index_js_default().createElement("li",null,"PYTHON"),/*#__PURE__*/index_js_default().createElement("li",null,"NODE"),/*#__PURE__*/index_js_default().createElement("li",null,"MONGODB"))))))),/*#__PURE__*/index_js_default().createElement("section",{id:"three",className:"wrapper alt style3"},/*#__PURE__*/index_js_default().createElement("div",{className:"inner"},/*#__PURE__*/index_js_default().createElement("div",{className:"content"},/*#__PURE__*/index_js_default().createElement("h2",{className:"major"},"Experience"),/*#__PURE__*/index_js_default().createElement("p",null,"Before becomming a Software Engineer, I had earned my Redcross Lifeguarding and Water Safety Instructor certifications as I enjoy staying active on top of my love for coding."),/*#__PURE__*/index_js_default().createElement("div",{className:"table-wrapper"},/*#__PURE__*/index_js_default().createElement("table",null,/*#__PURE__*/index_js_default().createElement("tbody",null,/*#__PURE__*/index_js_default().createElement("tr",null,/*#__PURE__*/index_js_default().createElement("td",null,/*#__PURE__*/index_js_default().createElement("b",null,"Junior Engineer")," | Nanov Display Inc."),/*#__PURE__*/index_js_default().createElement("td",null),/*#__PURE__*/index_js_default().createElement("td",null,"Present")),/*#__PURE__*/index_js_default().createElement("tr",null,/*#__PURE__*/index_js_default().createElement("td",null,/*#__PURE__*/index_js_default().createElement("b",null,"Technology Intern")," | JP Morgan Chase and Co."),/*#__PURE__*/index_js_default().createElement("td",null),/*#__PURE__*/index_js_default().createElement("td",null,"2019")),/*#__PURE__*/index_js_default().createElement("tr",null,/*#__PURE__*/index_js_default().createElement("td",null,/*#__PURE__*/index_js_default().createElement("b",null,"Water Safety Instructor and Lifeguard")," | 14th Street Y"),/*#__PURE__*/index_js_default().createElement("td",null),/*#__PURE__*/index_js_default().createElement("td",null,"2014 - 2019")))))))),/*#__PURE__*/index_js_default().createElement("section",{id:"four",className:"wrapper alt style1"},/*#__PURE__*/index_js_default().createElement("div",{className:"inner"},/*#__PURE__*/index_js_default().createElement("h2",{className:"major"},"Some of My Projects"),/*#__PURE__*/index_js_default().createElement("p",null,"You can view some of my projects that I have created below."),/*#__PURE__*/index_js_default().createElement("section",{className:"features"},/*#__PURE__*/index_js_default().createElement("article",null,/*#__PURE__*/index_js_default().createElement("a",{href:"/#",className:"image"},/*#__PURE__*/index_js_default().createElement("img",{src:agora_landingpage,alt:""})),/*#__PURE__*/index_js_default().createElement("h3",{className:"major"},"Agora"),/*#__PURE__*/index_js_default().createElement("p",null,"A web application for college students looking to utilize their old education resources and to create study groups."),/*#__PURE__*/index_js_default().createElement("a",{href:"/https://the-agora-project.herokuapp.com/",className:"special"},"Learn more")),/*#__PURE__*/index_js_default().createElement("article",null,/*#__PURE__*/index_js_default().createElement("a",{href:"/#",className:"image"},/*#__PURE__*/index_js_default().createElement("img",{src:real_estate,alt:""})),/*#__PURE__*/index_js_default().createElement("h3",{className:"major"},"Real Estate Website"),/*#__PURE__*/index_js_default().createElement("p",null,"A website for real estate company looking to assist in purchasing the perfect property."),/*#__PURE__*/index_js_default().createElement("a",{href:"/#",className:"special"},"Learn more"))),/*#__PURE__*/index_js_default().createElement("ul",{className:"actions"},/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("a",{href:"/https://github.com/Kbarias?tab=repositories",className:"button"},"Browse All")))))));/* harmony default export */ const pages = (IndexPage);

/***/ }),

/***/ 5793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/pic02-c2942470215c2fca232bdf3d35636fed.jpg");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map
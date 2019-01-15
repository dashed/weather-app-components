define(["exports","./node_modules/@polymer/lit-element/lit-element.js"],function(_exports,_litElement){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.DsgHeading=void 0;function _templateObject_d54a4910190f11e987199bc53f6ca7a3(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host { \n  display: block;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: bold;\n  line-height: normal;\n  font-size: 64px;\n  color: #000000; \n  margin: 0px;\n}\n:host([hidden]) { display: none; }\nh3 {\n  margin: 0;\n}</style>\n<slot></slot>\n<div>","</div>"]);_templateObject_d54a4910190f11e987199bc53f6ca7a3=function _templateObject_d54a4910190f11e987199bc53f6ca7a3(){return data};return data}var DsgHeading=function(_LitElement){babelHelpers.inherits(DsgHeading,_LitElement);babelHelpers.createClass(DsgHeading,[{key:"render",value:function render(){return(0,_litElement.html)(_templateObject_d54a4910190f11e987199bc53f6ca7a3(),this.content)}},{key:"tag",value:function tag(){return"dsg-heading"}}],[{key:"properties",get:function get(){return{content:{name:"content",type:"String",value:"",reflectToAttribute:!1,observer:!1}}}}]);function DsgHeading(){var _this;babelHelpers.classCallCheck(this,DsgHeading);_this=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(DsgHeading).call(this));_this.content="";return _this}babelHelpers.createClass(DsgHeading,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(DsgHeading.prototype),"connectedCallback",this).call(this)}}]);return DsgHeading}(_litElement.LitElement);_exports.DsgHeading=DsgHeading;customElements.define("dsg-heading",DsgHeading)});
define(["exports","./node_modules/@polymer/lit-element/lit-element.js"],function(_exports,_litElement){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.DsgTest=void 0;function _templateObject_901475b019d111e9859e196ca62a4928(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"]);_templateObject_901475b019d111e9859e196ca62a4928=function _templateObject_901475b019d111e9859e196ca62a4928(){return data};return data}var DsgTest=function(_LitElement){babelHelpers.inherits(DsgTest,_LitElement);babelHelpers.createClass(DsgTest,[{key:"render",value:function render(){return(0,_litElement.html)(_templateObject_901475b019d111e9859e196ca62a4928())}},{key:"tag",value:function tag(){return"dsg-test"}}],[{key:"properties",get:function get(){return{}}}]);function DsgTest(){babelHelpers.classCallCheck(this,DsgTest);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(DsgTest).call(this))}babelHelpers.createClass(DsgTest,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(DsgTest.prototype),"connectedCallback",this).call(this)}}]);return DsgTest}(_litElement.LitElement);_exports.DsgTest=DsgTest;customElements.define("dsg-test",DsgTest)});
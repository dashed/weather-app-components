define(["exports","./node_modules/@polymer/lit-element/lit-element.js"],function(_exports,_litElement){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.DsgInputButton=void 0;function _templateObject_050d6140183f11e9a3070fed801a54c6(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\nbutton {\n  width: 23px;\n  height: 23px;\n  border-radius: 50%;\n  background-color: #DF5555;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  padding: 0px;\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: bold;\n  line-height: normal;\n  font-size: 14px;\n}</style>\n<button id="," @click=\"","\">+</button>"]);_templateObject_050d6140183f11e9a3070fed801a54c6=function _templateObject_050d6140183f11e9a3070fed801a54c6(){return data};return data}var DsgInputButton=function(_LitElement){babelHelpers.inherits(DsgInputButton,_LitElement);babelHelpers.createClass(DsgInputButton,[{key:"render",value:function render(){return(0,_litElement.html)(_templateObject_050d6140183f11e9a3070fed801a54c6(),this.id,this.onClick)}},{key:"tag",value:function tag(){return"dsg-input-button"}}],[{key:"properties",get:function get(){return{onClick:{name:"onClick",type:"String",value:"",reflectToAttribute:!1,observer:!1},id:{name:"id",type:"String",value:"",reflectToAttribute:!1,observer:!1}}}}]);function DsgInputButton(){var _this;babelHelpers.classCallCheck(this,DsgInputButton);_this=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(DsgInputButton).call(this));_this.id="";return _this}babelHelpers.createClass(DsgInputButton,[{key:"onClick",value:function onClick(){var event=new CustomEvent("buttonClicked",{detail:{button:this.id},bubbles:!0});this.dispatchEvent(event);console.log("clicked"+this.id)}},{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(DsgInputButton.prototype),"connectedCallback",this).call(this)}}]);return DsgInputButton}(_litElement.LitElement);_exports.DsgInputButton=DsgInputButton;customElements.define("dsg-input-button",DsgInputButton)});
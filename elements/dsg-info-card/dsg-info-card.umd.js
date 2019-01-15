!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/lit-element"),require("@amyscript/dsg-image/dsg-image.js"),require("@amyscript/dsg-heading/dsg-heading.js"),require("@amyscript/dsg-text/dsg-text.js"),require("@amyscript/dsg-card/dsg-card.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/lit-element","@amyscript/dsg-image/dsg-image.js","@amyscript/dsg-heading/dsg-heading.js","@amyscript/dsg-text/dsg-text.js","@amyscript/dsg-card/dsg-card.js"],t):t(e.DsgInfoCard={},e.litElement)}(this,function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e,t,n){return(a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=i(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function s(){var e,t,n=(e=["\n<style>:host {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  align-items: center;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n.card-content {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 25px;\n}</style>\n<slot></slot>\n<dsg-card width="," height=",'>\n  <div class="card-content">\n    <dsg-image url=',"></dsg-image><dsg-heading content=","></dsg-heading>\n  </div>\n  <dsg-text content=","></dsg-text>\n</dsg-card>"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return s=function(){return n},n}var d=function(e){function n(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(e=c(this,i(n).call(this))).imageUrl="",e.heading="",e.text="",e.cardHeight="100%",e.cardWidth="300px",e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(n,t.LitElement),r(n,[{key:"render",value:function(){return t.html(s(),this.cardWidth,this.cardHeight,this.imageUrl,this.heading,this.text)}},{key:"tag",value:function(){return"dsg-info-card"}}],[{key:"properties",get:function(){return{imageUrl:{name:"imageUrl",type:"String",value:'""',reflectToAttribute:!1,observer:!1},heading:{name:"heading",type:"String",value:'""',reflectToAttribute:!1,observer:!1},text:{name:"text",type:"String",value:'""',reflectToAttribute:!1,observer:!1},cardHeight:{name:"cardHeight",type:"String",value:'""',reflectToAttribute:!1,observer:!1},cardWidth:{name:"cardWidth",type:"String",value:'""',reflectToAttribute:!1,observer:!1}}}}]),r(n,[{key:"connectedCallback",value:function(){a(i(n.prototype),"connectedCallback",this).call(this)}}]),n}();customElements.define("dsg-info-card",d),e.DsgInfoCard=d,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=dsg-info-card.umd.js.map

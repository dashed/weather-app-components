/**
 * Copyright 2019 Amy
 * @license MIT, see License.md for full text.
 */
import { LitElement, html } from "@polymer/lit-element";
import "./node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js";

/**
 * `dsg-input`
 * `input element `
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @lit-html
 * @lit-element
 * @demo demo/index.html
 */
class DsgInput extends LitElement {
  /* REQUIRED FOR TOOLING DO NOT TOUCH */

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  tag() {
    return "dsg-input";
  }

  // life cycle
  constructor() {
    super();
    this.city = "";
    this.inputId = "";
    this.width = "100%";
  }

  handleInput(e) {
    this.city = e.target.value;
  }
  /**
   * life cycle, element is afixed to the DOM
   */
  connectedCallback() {
    super.connectedCallback();
  }
  // static get observedAttributes() {
  //   return [];
  // }
  // disconnectedCallback() {}

  // attributeChangedCallback(attr, oldValue, newValue) {}
}
customElements.define("dsg-input", DsgInput);
export { DsgInput };

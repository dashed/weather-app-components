/**
 * Copyright 2019 Amy
 * @license MIT, see License.md for full text.
 */
import { LitElement, html } from "@polymer/lit-element";
import "./node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js";

/**
 * `dsg-image`
 * `image for info card`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @lit-html
 * @lit-element
 * @demo demo/index.html
 */
class DsgImage extends LitElement {
  /* REQUIRED FOR TOOLING DO NOT TOUCH */

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  tag() {
    return "dsg-image";
  }

  // life cycle
  constructor() {
    super();
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
customElements.define("dsg-image", DsgImage);
export { DsgImage };

/**
 * Copyright 2019 Amy
 * @license MIT, see License.md for full text.
 */
import { LitElement, html } from "@polymer/lit-element";
import "./node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js";

/**
 * `dsg-card`
 * `Card for info card`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @lit-html
 * @lit-element
 * @demo demo/index.html
 */
class DsgCard extends LitElement {
  // render function
  render() {
    return html`
      <style>
        :host {
          box-sizing: border-box;
          width: ${this.width};
          height: ${this.height};
          border-radius: 20px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: white;
        }
        :host([hidden]) {
          display: none;
        }
      </style>
      <slot></slot>
      <div><slot></slot></div>
    `;
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
      width: {
        name: "width",
        type: "String",
        value: "300px",
        reflectToAttribute: false,
        observer: false
      },
      height: {
        name: "height",
        type: "String",
        value: "300px",
        reflectToAttribute: false,
        observer: false
      }
    };
  }

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  tag() {
    return "dsg-card";
  }

  // life cycle
  constructor() {
    super();
    this.width = "300px";
    this.height = "300px";
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
customElements.define("dsg-card", DsgCard);
export { DsgCard };

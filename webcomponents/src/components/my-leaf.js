import { LitElement, html, css } from 'lit-element';

class MyLeaf extends LitElement {
  static get styles() {
    return css`
      span {
        display: inline-block;
        padding: 2px 5px;
        color: #161;
        background: #c2f5c2;
        border: #161 1px solid;
        border-radius: 4px;
      }
    `;
  }

  render() {
    return html` 
      <span>
        <slot></slot>
      </span>
    `;
  }
}

customElements.define('my-leaf', MyLeaf);

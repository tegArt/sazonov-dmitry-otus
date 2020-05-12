import { LitElement, html, css } from 'lit-element';

class MyLeaf extends LitElement {
  static get properties() {
    return {
      leafContent: {
        type: String
      }
    };
  }

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

  constructor() {
    super();
    this.leafContent = '';
  }

  render() {
    return html` 
      <span>
        ${ this.leafContent }
      </span>
    `;
  }
}

customElements.define('my-leaf', MyLeaf);

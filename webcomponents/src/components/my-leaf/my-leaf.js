import { LitElement, html } from 'lit-element';

class MyLeaf extends LitElement {
  render() {
    return html` 
      <div>
        leaf
      </div>
    `;
  }
}

customElements.define('my-leaf', MyLeaf);

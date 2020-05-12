import { LitElement, html, css } from 'lit-element';
import './my-leaf';

class MyTree extends LitElement {
  static get properties() {
    return {
      treeData: {
        type: Object
      }
    };
  }

  static get styles() {
    return css`
      div {
        margin: 2px 0;
        padding: 2px 5px;
        color: #5d2e08;
        background: #ecdbcd;
        border: #5d2e08 1px solid;
        border-radius: 4px;
      }
    `;
  }

  constructor() {
    super();
    this.treeData = {};
  }

  render() {
    return html`
      <div>
        ${ this.treeData.hasOwnProperty('id') ? html`<my-leaf leafContent="id: ${this.treeData.id}" />` : '' }
        ${ this.treeData.hasOwnProperty('items') ? this.treeData.items.map(item => html`<my-tree treedata="${JSON.stringify(item)}"></my-tree>`) : '' }
      </div>
    `;
  }
}

customElements.define('my-tree', MyTree);

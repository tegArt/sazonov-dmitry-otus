import { LitElement, html, css } from 'lit-element';
import '../my-leaf/my-leaf';

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
    this.tree = '';

    this.makeTree();
  }

  updated() {
    this.makeTree();
  }

  makeTree() {
    this.tree = '';

    for (let [key, value] of Object.entries(this.treeData)) {
      if (Array.isArray(value)) {
        value.map((item) => {
          this.tree = html`${this.tree} <my-tree treedata="${JSON.stringify(item)}"></my-tree>`;
        });
      } else {
        this.tree = html`${this.tree} <my-leaf>${key}: ${value}</my-leaf>`;
      }
    }
  }

  render() {
    return html` 
      <div>
        ${this.tree}
      </div>
    `;
  }
}

customElements.define('my-tree', MyTree);

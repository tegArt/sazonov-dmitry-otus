import { LitElement, html } from 'lit-element';
import '../my-leaf/my-leaf';

class MyTree extends LitElement {
  static get properties() {
    return {
      treeData: {
        type: Object
      }
    };
  }

  constructor() {
    super();
    this.treeData = {};
  }

  render() {
    return html` 
      <div>
        ${this.treeData.id}
        <my-leaf></my-leaf>
      </div>
    `;
  }
}

customElements.define('my-tree', MyTree);

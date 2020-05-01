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
        ${ Object.keys(this.treeData).map(key => {
          return  Array.isArray(this.treeData[key]) ? 
            this.treeData[key].map(item => html`<my-tree treedata="${JSON.stringify(item)}"></my-tree>`) 
            : 
            html`<my-leaf>${key}: ${this.treeData[key]}</my-leaf>`;
        })}
      </div>
    `;
  }
}

customElements.define('my-tree', MyTree);

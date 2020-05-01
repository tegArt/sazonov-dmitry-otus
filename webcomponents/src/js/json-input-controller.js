export default class JsonInputController {
  constructor() {
    this.jsonInput = document.getElementById('json-input');
    this.myTree = document.getElementById('my-tree');

    document.addEventListener('DOMContentLoaded', (event) => {
      this.changeHandler();
    });

    this.jsonInput.oninput = () => {
      this.changeHandler();
    }
  }

  changeHandler() {
    if (this.validate(this.jsonInput.value)) {
      this.jsonInput.classList.remove('-error');
      this.setJson();
    } else {
      this.jsonInput.classList.add('-error');
    }
  }

  validate(json) {
    try {
      JSON.parse(json);
    } catch (e) {
      return false;
    }

    return true;
  }

  setJson() {
    this.myTree.setAttribute('treeData', this.jsonInput.value);
  }
}

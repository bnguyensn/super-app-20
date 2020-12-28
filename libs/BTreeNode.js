export default class BTreeNode {
  constructor({ data, leftChild, rightChild } = {}) {
    this.data = data ? data : 1;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }

  setLeftChild(node) {
    this.leftChild = node;
    return this.leftChild;
  }

  setRightChild(node) {
    this.rightChild = node;
    return this.rightChild;
  }

  invertChildren() {
    if (this.leftChild && this.rightChild) {
      const temp = this.leftChild;
      this.leftChild = this.rightChild;
      this.rightChild = temp;

      this.leftChild.invertChildren();
      this.rightChild.invertChildren();
    }
  }

  toJSON() {
    const json = {
      data: this.data,
    };

    if (this.leftChild) {
      json.leftChild = this.leftChild.toJSON();
    }
    if (this.rightChild) {
      json.rightChild = this.rightChild.toJSON();
    }

    return json;
  }
}

import BTreeNode from './BTreeNode';

class LastValue {
  constructor() {
    this.lastValue = 0;
  }

  get lastVal() {
    return this.lastValue;
  }

  add() {
    this.lastValue += 1;
  }
}

export default function createBTree(height) {
  if (height <= 0) {
    throw new Error(`Height must be larger than 0`);
  }

  const root = new BTreeNode({
    data: 1,
  });

  if (height === 1) {
    return root;
  }

  const lastVal = new LastValue();
  lastVal.add();

  addTwoNodes(root, height - 1, lastVal);

  return root;
}

function addTwoNodes(baseNode, remainingHeight, lastVal) {
  const leftChild = baseNode.setLeftChild(
    new BTreeNode({ data: lastVal.lastVal + 1 })
  );
  lastVal.add();
  const rightChild = baseNode.setRightChild(
    new BTreeNode({ data: lastVal.lastVal + 1 })
  );
  lastVal.add();

  const newRemaining = remainingHeight - 1;
  if (newRemaining > 0) {
    addTwoNodes(leftChild, newRemaining, lastVal);
    addTwoNodes(rightChild, newRemaining, lastVal);
  }
}

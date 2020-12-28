import BTreeNode from './BTreeNode';

export default function createBTree(height) {
  if (height <= 0) {
    throw new Error(`Height must be larger than 0`);
  }

  const root = new BTreeNode();

  if (height === 1) {
    return root;
  }

  addTwoNodes(root, height - 1);

  return root;
}

function addTwoNodes(base, remaining) {
  const leftChild = base.setLeftChild(new BTreeNode());
  const rightChild = base.setRightChild(new BTreeNode());

  const newRemaining = remaining - 1;
  if (newRemaining > 0) {
    addTwoNodes(leftChild, newRemaining);
    addTwoNodes(rightChild, newRemaining);
  }
}

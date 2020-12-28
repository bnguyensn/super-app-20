import { useState } from 'react';
import Nav from '../components/nav';
import { getRandomInteger } from '../libs/number';
import createBTree from '../libs/createBTree';

function generateNodeEl(node) {
  return (
    <div className="grid grid-cols-2 grid-rows-2">
      <div className="col-span-2 w-16 h-8 rounded bg-blue-100">{node.data}</div>
      {node.leftChild && (
        <div className="col-span-1">{generateNodeEl(node.leftChild)}</div>
      )}
      {node.rightChild && (
        <div className="col-span-1">{generateNodeEl(node.rightChild)}</div>
      )}
    </div>
  );
}

export default function IndexPage() {
  const [tree, setTree] = useState();

  const refreshTree = () => {
    setTree(createBTree(getRandomInteger(1, 5)));
  };

  let treeEl = null;
  if (tree) {
    treeEl = <div>{generateNodeEl(tree)}</div>;
  }

  return (
    <div>
      <Nav />
      <main>
        <button className="btn-main" onClick={refreshTree}>
          Regenerate
        </button>
        {treeEl}
      </main>
    </div>
  );
}

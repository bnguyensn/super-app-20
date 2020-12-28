import { useState } from 'react';
import Nav from '../components/nav';
import { getRandomInteger } from '../libs/number';
import createBTree from '../libs/createBTree';

function generateNodeEl(node) {
  return (
    <div className="flex flex-wrap flex-col justify-center items-center">
      <div className="w-16 h-8 rounded bg-blue-100 text-center m-2 flex justify-center items-center">
        {node.data}
      </div>
      <div className="flex">
        {node.leftChild && generateNodeEl(node.leftChild)}
        {node.rightChild && generateNodeEl(node.rightChild)}
      </div>
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

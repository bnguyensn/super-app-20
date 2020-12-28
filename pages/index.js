import { useState, useEffect } from 'react';
import Nav from '../components/nav';
import createBTree from '../libs/createBTree';

function generateNodeEl(node) {
  return (
    <div className="flex flex-wrap flex-col justify-center items-center">
      <div className="w-16 h-8 rounded bg-blue-100 text-center m-2 flex justify-center items-center select-none">
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
  const [height, setHeight] = useState(1);

  const onHeightChange = (e) => {
    const newHeight = e.target.value;

    if (newHeight > 0) {
      setHeight(newHeight);
    }
  };

  const refreshTree = () => {
    setTree(createBTree(Number(height)));
  };

  let treeEl = null;
  if (tree) {
    treeEl = <div>{generateNodeEl(tree)}</div>;
  }

  useEffect(() => {
    if (tree) {
      console.log(tree.toJSON());
    }
  }, [tree]);

  return (
    <div>
      <Nav />
      <main>
        <input
          type="number"
          min={1}
          value={Number(height)}
          onChange={onHeightChange}
        />
        <button className="btn-main" onClick={refreshTree}>
          Regenerate
        </button>
        {treeEl}
      </main>
    </div>
  );
}

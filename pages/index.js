import { useState, useEffect, useRef } from 'react';
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
  const treeRef = useRef(null);
  const [treeJson, setTreeJson] = useState();
  const [treeHeight, setTreeHeight] = useState(1);

  const onHeightChange = (e) => {
    const newHeight = e.target.value;

    if (newHeight > 0) {
      setTreeHeight(newHeight);
    }
  };

  const refreshTree = () => {
    if (treeHeight) {
      const newTree = createBTree(Number(treeHeight));
      treeRef.current = newTree;
      setTreeJson(newTree.toJSON());
    }
  };

  const invertTree = () => {
    if (treeRef.current) {
      treeRef.current.invertChildren();
      setTreeJson(treeRef.current.toJSON());
    }
  };

  let treeEl = null;
  if (treeJson) {
    treeEl = <div>{generateNodeEl(treeJson)}</div>;
  }

  useEffect(() => {
    if (treeJson) {
      console.log(treeJson);
    }
  }, [treeJson]);

  return (
    <div>
      <Nav />
      <main>
        <div className="flex">
          <input
            type="number"
            min={1}
            value={Number(treeHeight)}
            onChange={onHeightChange}
          />
          <button className="btn-main" onClick={refreshTree}>
            Regenerate
          </button>
          <button className="btn-main" onClick={invertTree}>
            Invert
          </button>
        </div>
        <div>{treeEl}</div>
      </main>
    </div>
  );
}

import { useEffect, useRef, useState } from 'react';
import Layout from '../components/layout';
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
  const [treeHeight, setTreeHeight] = useState(3);

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
    if (treeHeight && !treeJson) {
      refreshTree();
    }
  }, [treeHeight, treeJson, refreshTree]);

  return (
    <Layout>
      <h1 className="text-4xl text-center my-4">Invert Binary Tree</h1>

      <div className="flex flex-col sm:flex-row justify-center items-center px-2">
        <div className="flex items-center mb-2 sm:mb-0">
          <label htmlFor="tree-height-input">Tree height:</label>
          <input
            id="tree-height-input"
            className="mx-2 p-2 w-20"
            type="number"
            min={1}
            value={Number(treeHeight)}
            onChange={onHeightChange}
          />
        </div>
        <div className="flex items-center">
          <button className="btn-main mx-2" onClick={refreshTree}>
            Generate
          </button>
          <button className="btn-main mx-2" onClick={invertTree}>
            Invert
          </button>
        </div>
      </div>

      <div className="my-4 overflow-auto">{treeEl}</div>

      <div className="flex flex-col items-center p-2 bg-blue-50">
        <p className="paragraph">
          A <b>binary tree</b> is a type of data structure. It&#39;s like a tree
          with many branches. Each branch can have either 0, 1, or 2 child
          branches.
        </p>

        <p className="paragraph">
          Inverting a binary tree means making the left child branch the right
          child branch, and the right child branch the left child branch, across
          the whole tree.
        </p>

        <p className="paragraph">
          Made by{' '}
          <a
            className="link"
            href="https://twitter.com/bnguyensn"
            target="_blank"
            rel="noreferrer"
          >
            @bnguyensn
          </a>
          . Source code on{' '}
          <a
            className="link"
            href="https://github.com/bnguyensn/super-app-20"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </Layout>
  );
}

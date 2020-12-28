import createBTree from './createBTree';

test('createBTree() works correctly', () => {
  const bTree1 = createBTree(1);
  const bTree2 = createBTree(2);
  const bTree3 = createBTree(3);

  const bTree1Json = bTree1.toJSON();
  const bTree2Json = bTree2.toJSON();
  const bTree3Json = bTree3.toJSON();

  expect(() => createBTree(0)).toThrow();

  expect(bTree1Json).toStrictEqual({
    data: 1,
  });

  expect(bTree2Json).toStrictEqual({
    data: 1,
    leftChild: {
      data: 2,
    },
    rightChild: {
      data: 3,
    },
  });

  expect(bTree3Json).toStrictEqual({
    data: 1,
    leftChild: {
      data: 2,
      leftChild: {
        data: 4,
      },
      rightChild: {
        data: 5,
      },
    },
    rightChild: {
      data: 3,
      leftChild: {
        data: 6,
      },
      rightChild: {
        data: 7,
      },
    },
  });
});

test(`BTree's invertChildren() works correctly`, () => {
  const bTree1 = createBTree(1);
  const bTree2 = createBTree(2);
  const bTree3 = createBTree(3);

  bTree1.invertChildren();
  bTree2.invertChildren();
  bTree3.invertChildren();

  const bTree1Json = bTree1.toJSON();
  const bTree2Json = bTree2.toJSON();
  const bTree3Json = bTree3.toJSON();

  expect(bTree1Json).toStrictEqual({
    data: 1,
  });

  expect(bTree2Json).toStrictEqual({
    data: 1,
    leftChild: {
      data: 3,
    },
    rightChild: {
      data: 2,
    },
  });

  expect(bTree3Json).toStrictEqual({
    data: 1,
    leftChild: {
      data: 3,
      leftChild: {
        data: 7,
      },
      rightChild: {
        data: 6,
      },
    },
    rightChild: {
      data: 2,
      leftChild: {
        data: 5,
      },
      rightChild: {
        data: 4,
      },
    },
  });
});

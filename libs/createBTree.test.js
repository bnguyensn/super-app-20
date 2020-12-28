import createBTree from './createBTree';

test('createBTree() works correctly', () => {
  const bTree1 = createBTree(1);
  const bTree2 = createBTree(2);
  const bTree3 = createBTree(3);

  const bTree1Json = bTree1.toJSON();
  const bTree2Json = bTree2.toJSON();
  const bTree3Json = bTree3.toJSON();

  expect(createBTree(0)).toThrow();

  expect(bTree1Json).toStrictEqual({
    data: 1,
  });

  expect(bTree2Json).toStrictEqual({
    data: 1,
    leftChild: {
      data: 1,
    },
    rightChild: {
      data: 1,
    },
  });

  expect(bTree3Json).toStrictEqual({
    data: 1,
    leftChild: {
      data: 1,
      leftChild: {
        data: 1,
      },
      rightChild: {
        data: 1,
      },
    },
    rightChild: {
      data: 1,
      leftChild: {
        data: 1,
      },
      rightChild: {
        data: 1,
      },
    },
  });
});

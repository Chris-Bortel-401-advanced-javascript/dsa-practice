'use strict';

// const BinaraySearchTree = require('../iterative-tree-traversal');


const bst = new BinarySearchTree();
bst.add(3);
bst.add(36);
bst.add(2);
bst.add(12);
bst.add(28);
bst.add(39);
console.log(JSON.stringify(bst, undefined, 2));

console.log(bst)
console.log(bst.dfsInOrder());
console.log(bst.dfsPreOrder());
console.log(bst.dfsPostOrder());
console.log(bst.minValRecursive());
console.log(bst.maxValRecursive());
// describe('Tree Traversal Tests', () => {
//   it('should traverse in order')
// })
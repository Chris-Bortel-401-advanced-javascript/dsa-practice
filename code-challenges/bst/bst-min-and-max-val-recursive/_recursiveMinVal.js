'use strict';

const Bst = require('../index.js[');

let bst = new Bst(15);


bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);

// console.log(JSON.stringify(bst,undefined,2));

// console.log('Given a BST, Find the minimum value ... Recursively.');


minValRecursive() {
  let result = [];
  
  const traverse = node => {
    if (node.left) traverse(node.left);
    // console.log(node.left)
    result.push(node.value);
    // if (node.right) traverse(node.right);
  };
  
  traverse(this.root);
  
  return result[0];
}

console.log(bst.minValRecursive());






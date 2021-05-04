'use strict';

// TODO: This will take some love to work with my DSA classes
// const Stack = require('../../../dsa-implementation/stacks.js')


// Time: 0(n)
// Space: 0(n)
// const isValidBST = function(root) {
    
//   const stack = [[root, -Infinity, Infinity]];

//   let top
//   while (top = stack.pop()){
//     const [node, min, max] = top
//     if (node === null) continue 
//     if (node.val >= max || node.val <= min) return false

//     if (node.left) {
//       stack.push([node.left, min, Math.min(node.val, max)])
//     }

//     if (node.right) {
//       stack.push([node.right, Math.max(node.val, min), max])
//     }
//   }
//     return true
// };



// Recursively
// var isValidBST = function(root) {
//   const walk = (node) => {
//       if(node === null) return [true, Infinity, -Infinity]
//       const [isLeftValid, minOfLeft, maxOfLeft] = walk(node.left)
//       const [isRightValid, minOfRight, maxOfRight] = walk(node.right)
      
//       return [isLeftValid && isRightValid && maxOfLeft < node.val && minOfRight > node.val,
//               Math.min(minOfLeft, node.val), Math.max(maxOfRight, node.val)]
//   }
//   return walk(root)[0]
// };

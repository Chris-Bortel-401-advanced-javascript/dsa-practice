"use strict";

const Stack = require("../../dsa-implementation/stacks.js");

//******Given a Stack, Find the sum of all elements ... Recursively. *******//
/*
DECLARE sum <-- 0
DECLARE number <-- stack.pop
REASSIGN sum <-- sum + number
*/
const stack = new Stack();

stack.push(1);
stack.push(1);
stack.push(1);
stack.push(1);

function sumIteratively(stack) {
  let sum = 0;

  while (!stack.isEmpty()) {
    let number = stack.pop();
    sum = sum + number;
  }
  console.log(sum);
  return sum;
}

sumIteratively(stack);

// console.log('Sum A Stack Recursively');
// const stackRec = new Stack();

// stackRec.push(1);
// stackRec.push(1);
// stackRec.push(1);
// stackRec.push(1);

// function sumRecursively(stackRec) {
//   let sum = 0;
//   if (stackRec.isEmpty()) {
//     return;
//   }

//   let number = stackRec.pop();
//   sum = sum + number;
//   console.log(sum);
//   sumRecursively(stackRec)

// }

// console.log(sumRecursively(stackRec));

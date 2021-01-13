'use strict';

const Stack = require('../dsa-implementation/stacks.js');

let familyStack = new Stack();
// familyStack.push('John');
// familyStack.push('Cathy');
// familyStack.push('Zach');
// familyStack.push('Allie');

// console.log('Iterative Traversal');

// while (familyStack.peek()) {
//   // Process
//   let person = familyStack.pop();
//   console.log(person);
// }




// familyStack.push('Cathy');

familyStack.push(1);
familyStack.push('Zach');
familyStack.push('Allie');
console.log(familyStack)

function findValueIteratively(target) {
  while (!familyStack.isEmpty()) {
    let person = familyStack.pop();
    console.log(person);
    if (target === person) {
      return true;
    }
  }

  return false;
  // findValueIteratively('John')
}
console.log(findValueIteratively('Zach'));
// console.log('Recursive ...');



// familyStack.push('John');
// familyStack.push('Cathy');
// familyStack.push('Zach');
// familyStack.push('Allie');
// function iterateRecursively(familyStack) {

//   // Base Case
//   if (!familyStack.peek()) { return; }

//   // Process
//   let person = familyStack.pop();
//   console.log(person);

//   // Move the pointer
//   iterateRecursively(familyStack);

// }
// console.log(iterateRecursively(familyStack))


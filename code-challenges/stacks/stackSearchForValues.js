'use strict';

const Stack = require('../../dsa-implementation/stacks.js');

let familyStack = new Stack();

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
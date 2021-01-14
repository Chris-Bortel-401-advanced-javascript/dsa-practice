'use strict';

const Stack = require('../../dsa-implementation/stacks.js');
const HashTable = require('../../dsa-implementation/hashtable.js');



// let familyStack = new Stack();

// familyStack.push(1);
// familyStack.push('Zach');
// familyStack.push('Allie');
// // console.log(familyStack)



// console.log('Given a stack, return a specific value ... ITERATIVELY');

// function findValueIteratively(target) {
//   while (!familyStack.isEmpty()) {
    
//     let person = familyStack.pop();
//     // console.log(person);
//     if (target === person) {
//       return true;
//     }
//   }

//   return false;
// }
// // console.log(findValueIteratively('Zach'));



// familyStack.push(1);
// familyStack.push('Zach');
// familyStack.push('Allie');

// // NOT WORKING
// console.log('Given a stack, return a specific value ... RECURSIVELY');
// function findValueRecursively(familyStack, target) {

//   if (familyStack.isEmpty()) { return false; }
//   let person = familyStack.pop();
//   console.log(person)
//   if (target === person) { return true; }

//   return findValueRecursively(familyStack, target)

// }
// console.log(findValueRecursively(familyStack, 3))



// Given a stack, return all duplicates ... Recursively.


// let object = { } 
// if object[stack variable] = null 
// add to object and stack.push into new stack ; if object[stack variable] = true stack.pop go to the next thing

function removeDups(inputStack){
  let outputStack = new Stack()
  let hashTable = new HashTable( inputStack.size)

  for(let i = 0 ; i < inputStack.size; i++){
    
    const currEval = inputStack.pop()
    
    if(!hashTable.contains(i)) {
      //put it into hashtable
      hashTable.add(i, currEval);
      // put in into new output stack
      inputStack.push(currEval);
    }
  }
  return outputStack
}

const familyStack = new Stack()
familyStack.push(1);
familyStack.push(1);
familyStack.push('Allie');

removeDups(familyStack)
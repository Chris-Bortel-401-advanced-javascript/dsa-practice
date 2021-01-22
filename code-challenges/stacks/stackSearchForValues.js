'use strict';

const Stack = require('../../dsa-implementation/stacks.js');
const HashTable = require('../../dsa-implementation/hashtable.js');



let familyStack = new Stack();

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



familyStack.push(1);
familyStack.push('Zach');
familyStack.push('Allie');

// NOT WORKING
console.log('Given a stack, return a specific value ... RECURSIVELY');
function findValueRecursively(familyStack, target) {

  if (familyStack.isEmpty()) { return false; }
  let person = familyStack.pop();
  console.log(person)
  if (target === person) { return true; }

  return findValueRecursively(familyStack, target)

}
console.log(findValueRecursively(familyStack, 'Zach'))



// Given a stack, return all duplicates ... Recursively.


// let object = { } 
// if object[stack variable] = null 
// add to object and stack.push into new stack ; if object[stack variable] = true stack.pop go to the next thing

// function removeDups(inputStack){
//   let outputStack = new Stack()
//   let hashTable = new HashTable( inputStack.size * 9 )

//   while (!inputStack.isEmpty()){
    
//     const currEval = inputStack.pop()
//     console.log(currEval)
    
//     if(!hashTable.contains(currEval)) {
//       //put it into hashtable
//       hashTable.add(currEval, 1 );
//       console.log(currEval)
//       // put in into new output stack
//     } else {
//       console.log(currEval)
      
//       outputStack.push(currEval);
//     }
//   }
//   return outputStack
// }


// if there are more than one duplicate of the same key I will be returning a stack with multiple of that key. 


const bigStack = new Stack()
bigStack.push(1);
bigStack.push(1);
bigStack.push('Allie');
bigStack.push('Allie');
bigStack.push('joe');

console.log(bigStack.size)

console.log('dups stack',removeDups(bigStack))

'use strict';

const Queue = require('../index.js');

let queue = new Queue();

queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(2);
queue.enqueue(10);
queue.enqueue(8);
// console.log(JSON.stringify(queue,undefined,2));

// console.log('PROBLEM DOMAIN: Given a Queue, Find the maximum value ... Iteratively.');

let maxValue = 0;
while (queue.peek()){
  let current = queue.dequeue();
  if(maxValue < current ) {
    maxValue = current;
  }
}
console.log(maxValue);
return maxValue;














// while (familyQueue.peek ()){
//   let person = familyQueue.dequeue();
//   console.log(person);
// }

// console.log('Traverse Recursively');
// familyQueue.enqueue('John');
// familyQueue.enqueue('Cathy');
// familyQueue.enqueue('Zachary');
// familyQueue.enqueue('Allie');

// function traverseRecursively(queue){
//   // Base Case
//   if(!queue.peek()) {return; }
//   //Process
//   let person = queue.dequeue();
//   console.log(person);

//   traverseRecursively(queue);
// }

// traverseRecursively(familyQueue);




// // Give a queue in the grocery store, give me a list of who you processed, and in what order
// console.log('Traverse Recursively with returns');
// familyQueue.enqueue('John');
// familyQueue.enqueue('Cathy');
// familyQueue.enqueue('Zachary');
// familyQueue.enqueue('Allie');
// console.log(JSON.stringify(familyQueue,undefined,2));

// function traverseRecursivelyWithReturnArray(queue, list = []){
//   if (!queue.peek()) { return list; }
//   let person = queue.dequeue();
//   list.push(person);
//   return traverseRecursivelyWithReturnArray(queue, list);
// }

// console.log(traverseRecursivelyWithReturnArray(familyQueue));

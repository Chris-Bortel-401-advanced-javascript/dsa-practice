'use strict';

const Queue = require('../index.js');

let queue = new Queue();
// console.log(queue);
queue.enqueue(-53);
queue.enqueue(5);
queue.enqueue(2);
queue.enqueue(-10);
queue.enqueue(-3);
// console.log(JSON.stringify(queue,undefined,2));
// console.log('PROBLEM DOMAIN: Given a Queue, Find the minimum value ... Iteratively.');


let minVal = null;

// minVal starts at null
console.log(minVal);

// firstRemoved removes the first element which is 3
let firstRemoved = queue.dequeue();

// // if statement assigns the minVal to be equal to firstRemoved, which is 3 
if(firstRemoved > minVal) {
  minVal = firstRemoved;
}
console.log(minVal);

// since 3 has already been processed and stored in the minVal variable, this will start on with the value 5
while(queue.peek()){
  let removed = queue.dequeue();
  // is 5 < minVal set minVal to be 5... it is not, so we start the loop again
  // is 2 < minval... it is, so minVal is not set to be 2
  // etc.
  if(removed < minVal) {
    minVal = removed;
  }
  console.log(minVal)
  console.log(removed);
}
console.log(minVal);
return minVal;
















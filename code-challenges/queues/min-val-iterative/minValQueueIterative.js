'use strict';

const Queue = require('../index.js');

let queue = new Queue();
// console.log(queue);
queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(2);
queue.enqueue(10);
queue.enqueue(-3);
// console.log(JSON.stringify(queue,undefined,2));
// console.log('PROBLEM DOMAIN: Given a Queue, Find the minimum value ... Iteratively.');


let minVal = null;
// console.log(minVal);
let firstRemoved = queue.dequeue();
if(firstRemoved > minVal) {
  minVal = firstRemoved;
}
// console.log(minVal);

while(queue.peek()){
  let removed = queue.dequeue();
  if(removed < minVal) {
    minVal = removed;
  }
}
console.log(minVal);
















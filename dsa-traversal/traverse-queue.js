const Queue = require('../dsa-implementation/queues.js');

let classQueue = new Queue();

classQueue.enqueue('Joe');
classQueue.enqueue('Ryan');
classQueue.enqueue('Edgar');
classQueue.enqueue('Jonny');

// shows in the console
console.log(JSON.stringify(classQueue, undefined, 2));

//  //  // -----------------------------
//  //  // ----- Traversal Iteratively:
//  //  // -----------------------------

console.log('Traverse Iteratively');

// peek will return either the head of the queue or null.. so while there is something in the queue, continue on... First in First Out 
while( classQueue.peek() ){
  // do stuff.. take the First person out of the queue
  let person = classQueue.dequeue();
  console.log(person);

  // continue on to the next since there are still things in the queue

}

//  //  // ----------------------------
//  //  // ----- Traversal Recursively: 
//  //  // ----------------------------

console.log('Traverse Recursively');

function traverseQRecursively(queue){
  // base case
  if( !queue.peek() ) { return; }

  let person = queue.dequeue();
  console.log(person);

  // each time you have dequeued, you are throwing the queue minus the dequeued value back in in order to run it again
  traverseQRecursively(queue);
}

//  //  // ---------------------------------------------- 
//  //  // ----- Traversal Recursively w returning an array:
//  //  // ---------------------------------------------- 

function traverseQRecursivelyWReturnArray(queue, list=[]);{
  // base case: keep going until list is empty
  if( ! queue.peek() ) { return list; }

  // take a person out of the queue, add that person to the list, and then return the remaining queue into the list array
  let person = queue.dequeue();
  list.push(person);
  return traverseQRecursivelyWReturnArray(queue, list);
}

console.log(traverseQRecursivelyWReturnArray);

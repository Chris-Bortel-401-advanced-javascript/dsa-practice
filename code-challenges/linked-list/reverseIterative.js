'use strict';

const LinkedList = require ('../../dsa-traversal/linked-list.js');

const ll = new LinkedList()
ll.append(1);
ll.append(2);
ll.append(3);
ll.append(3);
ll.append(5);

// console.log(ll)

function reverseList(head) {
  let prev = null;
  let next = null;

  while(head != null) {
    next = head.next; 
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
}

console.log(reverseList(ll))
// this stores the reference to what was the next node ... which was the node with the val of 2.. make sure that we do not lose it
    // head was pointing to the node with the value of 2, but we severed it and it is now pointed to prev


// LEET CODES VERSION


// reverseList( head) {
//   prev = null;
//   curr = head;

//   while (curr != null) {  
//     nextTemp = curr.next;
//     curr.next = prev;
//     prev = curr;
//     curr = nextTemp;
//   }
//   return prev;
// }
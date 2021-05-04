'use strict';

const LinkedList = require('./linked-list.js');

const list = new LinkedList();
list.append("Zachary");
list.append("John");
list.append("Cat");
list.append("Allie");

console.log(JSON.stringify(list, undefined, 2));

console.log('Traverse Iteratively');
let current = list.head;
while (current) {

  // do some work
  console.log(current.value);

  // Move our pointer
  current = current.next;

}

console.log('Traverse recursively');

function traverseLinkedListRecursively(node) {
  if (!node) { return; }

  // do our work
  console.log(node.value);

  // Move our pointer
  traverseLinkedListRecursively(node.next);
}

traverseLinkedListRecursively(list.head);


console.log('Traverse Recursively w/return value');

function traverseLinkedListRecursivelyWithReturn(node, biggestOne = "") {
  if (!node) { return biggestOne; }

  // Do Your Work
  if (node.value.length > biggestOne.length) { biggestOne = node.value; }

  return traverseLinkedListRecursivelyWithReturn(node.next, biggestOne);
}

console.log('Longest Name: ', traverseLinkedListRecursivelyWithReturn(list.head))


const list = new LinkedList();
list.append(2);
list.append(4);
list.append(3);
list.append(6);
list.append(1);


// console.log('Traverse Recursively w/return smallest value');

// function traverseLinkedListRecursivelyWithReturnOfSmallest(current, smallest = '') {
  //   if (!current) { return smallest; }
  
  //   // Do Your Work
  //   if (current.value.length < smallest.length) { smallest = current.value; }
  //   // ''
  
  //   return traverseLinkedListRecursivelyWithReturnOfSmallest(current.next, smallest);
  // }
  
  // console.log('Shortest Name: ', traverseLinkedListRecursivelyWithReturnOfSmallest(list.head))
  
  console.log('find smallest value iteratively');
let current = list.head
while (current) {
    if(current > current.next) {
      current.next = current 
    }
    if(current < current.next){
      current.next = current.next.next
    }
  }
  return current
  console.log(list.head)


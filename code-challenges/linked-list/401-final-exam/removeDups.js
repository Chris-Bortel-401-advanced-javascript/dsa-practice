'use strict';

const LinkedList = require('./linkedList.js');
// const Hashtable = require('./hashtable.js');

// console.log(newList)
//TODO: try set

// Remove duplicate from a singly linked list, in place

// const LinkedList = require('./linked-list.js');

const newList = new LinkedList();
newList.append(3);
newList.append(4);
newList.append(5);
newList.append(5);
newList.append(6);
newList.append(4);


function removeDups(list) {
  let exists = new Set();
  let current = list.head;
  let previous = null;

  while (current) {
    if(exists.has(current.value)) {
      previous.next = current.next;
      current = previous.next;
    } else {
      exists.add(current.value);
      previous = current;
      current = current.next;
    }
  }
  return list;
}

removeDups(newList)
console.log(JSON.stringify(newList,undefined,2));


'use strict'; 

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){ 
    this.head = null;
  }

  insert(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
    return this.head;
  }

  append(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    return this;
  }


  includes(findValue) {
    let current = this.head;
    let result = findValue;
    while (current !== null) {
      if (current.value === findValue) {
        return true;
      }
      current = current.next;
    }
    // console.log(result, 'Is in the linked list')
    return false;
  }
}



const ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(5);
ll.append(4);
ll.append(3);
// console.log(ll.includes())
ll.insert(12)
ll.append(24)

console.log(JSON.stringify(ll, undefined, 2));

ll
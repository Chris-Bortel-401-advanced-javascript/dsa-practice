'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queues {
  constructor() {
    this.front = null
  }

  enqueue(value) {
    let node = new Node(value);
    // if there is not a front, we will assign node to be this.front
    // else we will declare a temp variable to save the current head
    //  as log as there is a current.next, current will be reassigned to be current .next and node will be this.front 
  }

  dequeue() {

  }

  peek() {

  }
  
  isEmpty() {

  }


}





'use strict';

class Queue {
  constructor() {
    this.storage ={};
    this.head = 0;
    this.tail = 0;
  }

  //enqueue
  enqueue(element) { 
    this.storage[this.tail]= element;
    this.tail++;
  }

  dequeue() {
    let removed = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return removed;
  }
}


let queue = new Queue();

queue.enqueue('John');
queue.enqueue('Cathy');
queue.enqueue('Zachary');
queue.enqueue('Allie');

queue.dequeue();
queue.dequeue();
queue;



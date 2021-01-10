class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.storage = [];
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    let node = new Node(value);
    this.storage[this.tail] = node;
    this.tail++;
  }

  dequeue() {
    let removedNode = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return removedNode;
  }

  peek() {
    return this.storage[this.tail];
  }

  isEmpty() {
    if (this.storage) {
      return true;
    } else {
      return false;
    }
  }


}


// module.exports = Stack;
module.exports = Queue;

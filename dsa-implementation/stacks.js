'use strict';

class Stack {
  constructor(){
    this.storage={};
    this.size=0;
  }
  //push : increments the size by one, and will store the element in this.storage as a key value pair of the size and the element
  push(element) {
    this.size++;
    this.storage[this.size] = element;
  }
  // pop : return last element is the stack and also remove it
  pop() {
    let removed = this.storage[this.size];
    delete this.storage[this.size];
    this.size--;
    return removed;
  }
  // peek
  peek() {
    return this.storage[this.size];
  }
}

const stack = new Stack();

stack.push('John');
stack.push('Cathy');
stack.push('Zach');
stack.push('Allie');

stack.pop();

console.log(stack.peek('Cathy'));
stack;

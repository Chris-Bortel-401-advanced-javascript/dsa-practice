'use strict'; 

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }


  push(value) {
    let node = new Node(value); 
    if(this.top === null) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
    this.size++;
  }

  pop() {
    // if stack is not empty, we are going to declare a temp variable that saves the current top.
    // then we reassign this. top to be the value of this.top.next
    // then we break the connection between the original top with the new top by setting temp to equal null
    // return the value of temp.
    if (!this.isEmpty()) {
      this.size--;
      let temp = this.top;
      this.top = this.top.next;
      temp.next = null;
      return temp.value;

    } else {
      return 'exception';
    }

  }

  peek() {
    //check to see whether there is a top
    if(!this.top) {
      return 'exception: stack is empty';
    } else {
      return this.top;
    }
  }
  
  isEmpty() {
    if(!this.top) {
      return true;
    }
    else { 
      return false;
    }
  }

}


const stack = new Stack();

stack.push('John');
// stack.push('Cathy');
// stack.push('Zach');
// stack.push('Allie');

console.log(stack.pop())

console.log(stack.peek());

console.log(stack.isEmpty())
stack;

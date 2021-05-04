
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
    //creates new node
    if(this.top === null){
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
    this.size ++;
  }

  pop() {
    if(!this.isEmpty()) {
      this.size --;
      let temp = this.top;
      this.top = this.top.next;
      temp.next = null;
      return temp.value;

    } else {
      return 'exception';
    }
  }

  peek() {
    if (this.top === null) {
      return 'exception';
    } else {
      return this.top;
    }
  }

  isEmpty() {
    if (this.top === null) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Stack;





// 'use strict';

// class Stack {
//   constructor(){
//     this.storage={};
//     this.size=0;
//   }
//   //push : increments the size by one, and will store the element in this.storage as a key value pair of the size and the element
//   push(element) {
//     this.size++;
//     this.storage[this.size] = element;
//   }
//   // pop : return last element is the stack and also remove it
//   pop() {
//     let removed = this.storage[this.size];
//     delete this.storage[this.size];
//     this.size--;
//     return removed;
//   }
//   // peek
//   peek() {
//     return this.storage[this.size];
//   }

//   isEmpty() {
//     if (this.top === null) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// const stack = new Stack();

// stack.push('John');
// stack.push('Cathy');
// stack.push('Zach');
// stack.push('Allie');

// stack.pop();

// console.log(stack.peek());
// stack;




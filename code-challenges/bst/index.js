// Binary Search tree

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

console.log('hello');

class BST {
  constructor(value) {
    this.root = new Node(value);
    this.count = 1;
  }

  size() {
    return this.count;
  }

  insert(value) {
    this.count++;
    let newNode = new Node (value);
    // recursive function that decide where to place the newNode
    const searchTree = node => {
      if (value < node.value) {
        if (!node.left) {
          node.left = newNode;
        }
        // RECURSIVE CASE
        // if there is a left child, look left again
        else {
          searchTree(node.left);
        }
      }
      // if value > node.value, go right
      else if (value > node.value) {
        if (!node.right) {
          node.right = newNode;
        }

        // if there is a node to the right, we will go check the next right node
        else {
          searchTree(node.right);
        }
      }
    };
    searchTree(this.root);
  }

  min() {
    let currentNode = this.root;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }

  max() {
    let currentNode = this.root;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.value;
  }


  contains(value) {
    let currentNode = this.root;

    while (currentNode){
      if (value === currentNode.value) {
        return true;
      }

      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  dfsInOrder() {
    let result = [];

    const traverse = node => {
      if (node.left) traverse(node.left);
      // console.log(node.left)
      result.push(node.value);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);

    return result;
  }

  dfsPreOrder() {
    let result= [];

    const traverse = node => {
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);

    return result;
  }

  dfsPostOrder() {
    let result = []

    const traverse = node=> {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      result.push(node.value)
    }
    traverse(this.root)

    return result
  }
}



const bst = new BST(15);
bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);
console.log(bst.dfsInOrder());
console.log(bst.dfsPreOrder());
console.log(bst.dfsPostOrder());

'use strict';


class Hashtable {
  constructor(size) {
    this.size = size;
    this.storage = new Array(size);
  }

  hash(key) {
    let asciiTotal = 0;
    for (let i = 0; i < key.length; i++) {
      asciiTotal += key.charCodeAt(i);
    }
    let index = (asciiTotal * 599) % this.size;
    return index;
  }

  add(key,val) {
    let hashIndex = this.hash(key);
    this.storage[hashIndex] = val;
  }

  get(key) {
    let hashIndex = this.hash(key);
    if(!this.storage[hashIndex]) {
      return null;
    }
    return this.storage[hashIndex];
  }

  contains(key) {
    let hashIndex = this.hash(key);
    if(!this.storage[hashIndex]){
      return false;
    } else {
      return true;
    }
  }

}

module.exports = Hashtable;

const hashTable = new Hashtable(4)

hashTable.add('chris', 'awesome')

// console.log(hashTable.get('chris'))
// console.log(hashTable.contains('chris'))

// console.log(hashTable)
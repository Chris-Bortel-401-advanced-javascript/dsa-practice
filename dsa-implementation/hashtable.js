'use strict';


class Hashtable {
  constructor(size) {
    this.size = size;
    this.storage = new Array(size);
  }

  hash(key) {
    return key.split('').reduce((acc, cur, i) => {
      return acc + cur.charCodeAt(0);
    }, 0) * 599 % this.size;
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

console.log(hashTable.get('chris'))
console.log(hashTable.contains('chris'))

console.log(hashTable)
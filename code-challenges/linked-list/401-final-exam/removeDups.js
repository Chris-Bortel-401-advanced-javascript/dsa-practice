'use strict'

const LinkedList = require('./linkedList.js');
const Hashtable = require('./hashtable.js')
const list = new LinkedList();
list.append(3);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.append(4);
// console.log(list)


function removeDups() {
  let seen = new Hashtable();
  let current = list.head;
  let previous = null
  
  while(!current) {
    if (seen.contains(current)) {
      console.log(current.next)
      previous.next = current.next
      current = previous.next
    } else {
      seen.add(current);
      previous = current;
      current = current.next
      console.log(seen)
    }
    return list;
  }
  console.log(current)
  console.log(list)
}
console.log(removeDups())



// DECLARE current <-- this.head

// DECLARE previous <-- null

// While there is a current

//  IF current is in the hashtable

//   previous.next<--current.next

//   current.next<--null

//   current<--previous.next

//  ELSE

//   send current to hashtable

//   previous <-- current

//   current <--current.next



// return linklist

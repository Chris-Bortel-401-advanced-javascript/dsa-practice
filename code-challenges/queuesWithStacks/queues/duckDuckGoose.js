"use strict";

const Queue = require("./index.js");
const duckQueue = new Queue();

duckQueue.enqueue("john");
duckQueue.enqueue("hailey");
duckQueue.enqueue("hannah");
duckQueue.enqueue("bert");
duckQueue.enqueue("maddie");

function duckDuckGoose(k, duckQueue) {
  let kcount = 0;

  while (duckQueue.peek()) {
    let goose = duckQueue.dequeue();
    kcount++;
    if (kcount < k) {
      duckQueue.enqueue(goose);
    } else {
      kcount = 0;
      console.log(goose);
    }
  }
}

duckDuckGoose(3, duckQueue);

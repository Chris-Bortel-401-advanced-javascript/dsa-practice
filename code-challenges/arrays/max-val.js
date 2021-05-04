"use strict";

function findMax(arr) {
  let max = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}
let array = [1, 3, 7, 8, 2];

findMax(array);

'use strict';

let nums = [ 1, 2, 2, 3 , 5 , 5, 6];

function removeDups(nums){
  let length = 1;
  for(let i = 0; i<nums.length-1; i++){
    if(nums[i]!= nums[i + 1]){
      nums[length++] = nums[i + 1];
    }
  }
  return length;

}
console.log(length)



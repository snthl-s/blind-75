/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let initialSet = [];
    let outputSet = [];
    let previousProduct = 1;
    for(let i = 0; i< nums.length; i++) {
        previousProduct *= nums[i]; 
        initialSet.push(previousProduct)
    }
    previousProduct = 1;
    for(let i = nums.length - 1 ; i >= 0 ; i--) {
        outputSet[i] = initialSet[i-1]*previousProduct;
        if(i !== 0) {
            previousProduct *= nums[i];
        }
    }
    outputSet[0] = previousProduct;
  return outputSet;
};

console.log(productExceptSelf([1,2,3,4]));

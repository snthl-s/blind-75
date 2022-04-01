const stub = require('./stub.json');

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    console.time('maxArea');
  let result = 0;
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = height.length - 1; j > i; j--) {
      let multipleFactor = 1;
      let maximumStorage = 0;
      if (height[i] > height[j]) {
        multipleFactor = height[j];
      } else {
        multipleFactor = height[i];
      }
      maximumStorage = (j - i) * multipleFactor;
      if (maximumStorage > result) {
        result = maximumStorage;
      }
      if(height[i] < height[j]) {
          break;
      }
    }
  }
  console.timeEnd('maxArea');
  return result;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
console.log(maxArea(stub));
console.log(maxArea([2,3,4,5,18,17,6]));

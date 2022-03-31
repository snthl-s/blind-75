const testData = require("./stub.json");
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const arrayLength = nums.length - 1;
  if (arrayLength < 2) {
    return [];
  }
  nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    if (i > 0 && nums[i] === nums[i-1]) {
      continue;
    }
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum > 0) {
        right -= 1;
      } else if (sum < 0) {
        left++;
      } else {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        while (nums[left] === nums[left - 1] && left < right) {
          left++;
        }
      }
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([]));
console.log(threeSum([0]));
console.log(threeSum([0,0,0]));
console.log(threeSum([-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0]));
console.log(threeSum(testData));

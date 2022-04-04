/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    console.time('missingNumber');
    const n = nums.length;
    const totalSum = n * (n+1)/2;
    let sumOfArray = 0;
    for (var i = 0; i < n; i++)
    {
        sumOfArray += nums[i];
    }
    console.timeEnd("missingNumber");
    return totalSum - sumOfArray;
};

console.log(missingNumber([3,0,1]))
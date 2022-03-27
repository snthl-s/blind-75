/* TOW SUM */

var twoSum = function(nums, target) {
    
    for (let i = 0 ;i <=nums.length; i++ ) {
        const pair = nums.indexOf(target - nums[i]);
        if(pair > -1 && pair !== i ) {
            return [i, pair];
        }
    }
    return [];
};

//Test Cases

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));
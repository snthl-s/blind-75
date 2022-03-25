/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    let output = {};
    for(let i = 0; i < nums.length ; i++) {
        if(typeof output[nums[i]] === 'undefined') {
            output[nums[i]] = true;
        } else {
            return true;
        }
    }
    return false;
};

console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));
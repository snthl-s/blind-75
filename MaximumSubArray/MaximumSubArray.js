/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  
    let max = 0;
    let min = -999999999;
    for( let i = 0; i < nums.length; i++  ) {
        max += nums[i];
        if(max > min) {
            min = max;
        }
        if(max < 0) {
            max = 0;   
        } 
    }
    return min;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
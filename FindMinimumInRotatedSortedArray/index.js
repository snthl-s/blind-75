/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    let res = nums[0];
     
     let firstIndex = 0;
     let lastIndex = nums.length - 1;
     let middleIndex = Math.round((firstIndex + lastIndex) / 2)
     while(firstIndex !== lastIndex) {
         if(nums[middleIndex] >= nums[lastIndex])   
             {
                 firstIndex = middleIndex;
             } else {
                 lastIndex = middleIndex;
             }
         if(res > nums[middleIndex]) {
             res = nums[middleIndex]
         }
         middleIndex = Math.round((firstIndex + lastIndex) / 2);
     }
     return res;
 };
console.log(findMin([3,4,5,1,2]));
console.log(findMin([4,5,6,7,0,1,2]));
console.log(findMin([11,13,15,17]));
console.log(findMin([2,1]));
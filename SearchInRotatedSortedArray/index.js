/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let firstIndex = 0;
    let lastIndex = nums.length - 1;
     
     while (firstIndex <= lastIndex) {
         let middle = Math.floor((firstIndex + lastIndex) / 2);
         if(target === nums[middle]) {
             return middle;
         }
         //Left portion
         if(nums[firstIndex] <= nums[middle]) {
             if( target > nums[middle]  || target < nums[firstIndex]) {
                 firstIndex = middle + 1;
             } else {
                 lastIndex = middle - 1;
             }
         } 
        //Right portion
        else {
            
             if(target < nums[middle] || target > nums[lastIndex]) {
                lastIndex = middle - 1;
             } else {
                firstIndex = middle + 1;
             }
         }
     }
  return -1;
};

console.log(search([4,5,6,7,0,1,2], 0));
console.log(search([4,5,6,7,0,1,2], 3));
console.log(search([1], 1));


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchUsingWhileLoop = function(nums, target) {
    let firstIndex = 0;
    let lastIndex = nums.length - 1;
    console.time('searchUsingWhileLoop');
     while (firstIndex <= lastIndex) {
         let middle = Math.floor((firstIndex + lastIndex) / 2);
         if(target === nums[middle]) {
            console.timeEnd('searchUsingWhileLoop');
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
     console.timeEnd('searchUsingWhileLoop');
  return -1;
};
var searchUsingForLoop = function(nums, target) {
    console.time('searchUsingForLoop')
    let firstIndex = 0;
    let lastIndex = nums.length - 1;
     
    for (let i = 0; i < nums.length; i++)   {
        let middle = (lastIndex - firstIndex)/2;
        if (nums[i] === target)  {
            console.timeEnd('searchUsingForLoop');
            return i;
        }
        else if (nums[middle] > target)  {
            lastIndex = middle - 1;
        }
        else    {
            firstIndex = middle + 1;
        }
    }
    console.timeEnd('searchUsingForLoop');
  return -1;
};

console.log(searchUsingWhileLoop([4,5,6,7,0,1,2], 0));
console.log(searchUsingWhileLoop([4,5,6,7,0,1,2], 3));
console.log(searchUsingWhileLoop([1], 1));
console.log(searchUsingForLoop([4,5,6,7,0,1,2], 0));
console.log(searchUsingForLoop([4,5,6,7,0,1,2], 3));
console.log(searchUsingForLoop([1], 1));


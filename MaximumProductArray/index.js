var maxProduct = function(nums) {
    
    let result = nums[0];
    let minProduct = nums[0];
    let maxProduct = nums[0];
    let choice1, choice2;
    for( let i =1; i < nums.length; i++) {
        choice1 = minProduct* nums[i];
        choice2 = maxProduct* nums[i];
        minProduct = Math.min(nums[i], Math.min(choice1, choice2));
        maxProduct = Math.max(nums[i], Math.max(choice1, choice2));    
        if(maxProduct > result){
            result = maxProduct;
        }
    }
    return result;  
};

console.log(maxProduct([2,3,-2,4]));
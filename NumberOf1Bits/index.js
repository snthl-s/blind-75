/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    console.time('hammingWeight');
    let res = 0;
    while(n != 0) {
        res += n%2;
        n = n >> 1;
    }
    console.timeEnd("hammingWeight");
    return res;
};

console.log(hammingWeight(00000000000000000000000000001011));
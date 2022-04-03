/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    console.time('hammingWeight');

    const result = `${n.toString(2)}`.split('').filter(bit=> Number(bit)).length;
    console.timeEnd("hammingWeight");
    return result;

};

console.log(hammingWeight(11));
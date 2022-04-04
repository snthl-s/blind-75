/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    console.time('countBits');
    let result = [];
    for(let i =0; i<= n ; i++) {
        result.push(`${i.toString(2)}`.split('').filter(bit=> Number(bit)).length)
    }
    console.timeEnd('countBits');
    return result;    
};

console.log(countBits(5));
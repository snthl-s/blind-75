/**
 * @param {number[]}
 * @return {number}
 */
var getSum = function (a, b) {
  console.time("getSum");
    while ( b !=0) {
        let tmp = (a & b) << 1;
        a = a ^ b;
        b = tmp;
    }
    console.timeEnd("getSum");
    return a;
};

console.log(getSum(1, 2));
console.log(getSum(2, 3));
console.log(getSum(20, 30));
console.log(getSum(-1, 1));

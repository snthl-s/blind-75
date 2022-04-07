/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n, climb = {}) {
    if(n === 0 || n === 1){
       return 1;
    }
    if( n - 2 < 0 ) {
        return 0;
    }
    if(climb[n]) {
        return climb[n];
    }
    climb[n] = climbStairs(n-1, climb) + climbStairs(n-2, climb);
    return  climb[n];
};

console.log(climbStairs(34));
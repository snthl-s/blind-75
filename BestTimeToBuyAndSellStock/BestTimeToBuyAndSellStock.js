/* Best Time to Buy and Sell Stock */

var maxProfit = function(prices) {
  let profit = 0;
    let minPrice = 9999;
    for (let i = 0; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        const maxProfit = prices[i] - minPrice;
        profit =  Math.max(maxProfit,  profit);
    }
    return profit;
};

//Test Cases

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));
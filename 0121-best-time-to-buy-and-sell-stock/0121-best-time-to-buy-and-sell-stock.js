/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let l = 0; // buying pointer
    let r = 1; // selling pointer
    while (r < prices.length) {
        //check whether sale is profitable & set maxProfit
        if (prices[r] > prices[l]) {
            const profit = prices[r] - prices[l];
            maxProfit = Math.max(maxProfit, profit);
        } else {
            // if not profitable update pointers
            l = r;
        }
        r++;
    }
    return maxProfit;
};
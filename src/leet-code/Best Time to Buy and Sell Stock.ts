function maxProfit(prices: number[]): number {
  let min = prices[0],
    max = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else {
      max = Math.max(prices[i] - min, max);
    }
  }

  return max;
}

const result = maxProfit([2, 4, 1]);

console.log(
  "🚀 ~ file: Best Time to Buy and Sell Stock.ts:20 ~ result:",
  result
);

// Input: prices = [7,5,1,3,6,4]
// Output: 5

// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

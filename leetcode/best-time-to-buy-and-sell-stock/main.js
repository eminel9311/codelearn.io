function maxProfit(prices) {
  let left = 0 // buy
  let right = 1 // sell
  let max_profit = 0
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left]
      max_profit = Math.max(profit, max_profit)
      console.log(max_profit)
    } else {
      left = right
    }
    right++
  }
  return max_profit
}

let a = [7,1,5,3,6,4]
maxProfit(a)
var maxProfit = function(prices) {
    let profits = 0 ;
	for ( let i = 0 ; i < prices.length-1 ; i++) {
		if (prices[i] < prices[i+1]) {
		profits = profits - prices[i] + prices[i+1] ;
        }
    }
return profits ;
};
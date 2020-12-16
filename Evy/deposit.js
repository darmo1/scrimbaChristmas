function depositProfit(deposit, rate, threshold) {
	let counter = 0
	while (deposit <= threshold) {
		deposit += (deposit * rate) / 100
		counter++
	}
	return counter
}

console.log(depositProfit(100, 20, 170))

function depositProfit(deposit, rate, threshold) {
	let counter = 0
	while (deposit <= threshold) {
		deposit += (deposit * rate) / 100
		counter++
	}
	return counter
}

// Looks good.

console.log(depositProfit(100, 20, 170))

// Recursive!

function recursiveDepositProfit(deposit, rate, threshold, years = 0) {
	if (threshold <= deposit) return years
	return depositProfit(
		deposit + (deposit * rate) / 100,
		rate,
		threshold,
		years + 1,
	)
}

console.log(recursiveDepositProfit(100, 20, 170))

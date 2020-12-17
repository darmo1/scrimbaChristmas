function countVowelConstant(str) {
	checkFor = ['a', 'e', 'i', 'o', 'u']
	return str
		.split('')
		.reduce(
			(sum, current) => (checkFor.includes(current) ? (sum += 1) : (sum += 2)),
			0,
		)
}

console.log(countVowelConstant('abb'))

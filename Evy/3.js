function chunkyMonkey(values, size) {
	return [values.slice(0, size), values.slice(size)]
}

// This is cheating
// It will not work for an array of more elements than 2x size.
// Try again

const chunkyMonkeyNew = (values, size) =>
	Array(Math.ceil(values.length / size))
		.fill('')
		.reduce((prevValues, current, index) => {
			return [...prevValues, [...values].splice(index * size, size)]
		}, [])

console.log(chunkyMonkeyNew(['a', 'b', 'c', 'd'], 2))
console.log(chunkyMonkeyNew(['a', 'b', 'c', 'd', 'e', 'f'], 2))
console.log(chunkyMonkeyNew(['a', 'b', 'c', 'd', 'e', 'f'], 4))
console.log(chunkyMonkeyNew(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 2))

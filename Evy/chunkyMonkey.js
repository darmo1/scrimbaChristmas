function chunkyMonkey(values, size) {
	return [values.slice(0, size), values.slice(size)]
}

// This is cheating
// It will not work for an array of more elements than 2x size.
// Try again

console.log(chunkyMonkey(['a', 'b', 'c', 'd'], 2))
console.log(chunkyMonkey(['a', 'b', 'c', 'd', 'e', 'f'], 2))

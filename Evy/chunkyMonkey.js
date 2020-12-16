function chunkyMonkey(values, size) {
	return [values.slice(0, size), values.slice(size)]
}

console.log(chunkyMonkey(['a', 'b', 'c', 'd'], 2))

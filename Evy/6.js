const sortByLength = (strs) => strs.sort((a, b) => a.length - b.length)

console.log(sortByLength(['abc', '', 'aaa', 'a', 'zz']))

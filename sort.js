function sortByLength(strs) {
    //  write code here.
    variableToSort = strs
    variableToSort.sort((a, b) => a.length - b.length);
    return variableToSort
}

// I think this is pretty good as well, although you don't really need to sett 'variabletToSort'
// …and it's a good habit to declare the variable with let or const in any case.
// also I think you could just return strs.sort((a, b) => a.length - b.length)

// My solution:
sortByLengthArne = (strs) => strs.sort((a,b) => a.length - b.length)

console.log(sortByLength(["abc", "", "aaa", "a", "zz"]))
console.log(sortByLengthArne(["abc", "", "aaa", "a", "zz"]))
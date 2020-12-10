function sortByLength(strs) {
    //  write code here.
    variableToSort = strs
    variableToSort.sort((a, b) => a.length - b.length);
    return variableToSort
}

console.log(sortByLength(["abc", "", "aaa", "a", "zz"]))
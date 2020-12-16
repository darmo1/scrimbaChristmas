
//https://scrimba.com/learn/adventcalendar/-javascript-challenge-sort-by-length-solution-cZy48mtv

function sortByLength(strs) {
    //  write code here.
   return strs.sort(function(a, b){return a.length-b.length})

}

// I like this, however, for these situation I think it reads a lot better 
// if you use arrow functions, like:
// return strs.sort((a,b) => a.length - b.length)

// My oneliner:
sortByLengthArne = (strs) => strs.sort((a,b) => a.length - b.length)

const strs =  ["abc", "", "aaa", "a", "zz"];

console.log(sortByLength(strs));

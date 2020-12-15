
//https://scrimba.com/learn/adventcalendar/-javascript-challenge-sort-by-length-solution-cZy48mtv

function sortByLength(strs) {
    //  write code here.
   return strs.sort(function(a, b){return a.length-b.length})

}

const strs =  ["abc", "", "aaa", "a", "zz"];

console.log(sortByLength(strs));

//https://scrimba.com/learn/adventcalendar/-javascript-challenge-valid-time-introduction-cLkq4bSQ


function validTime(str) {
    let strToarray = str.split(":");
    let arrayIntegers = strToarray.map(element => parseInt(element))

    if ((arrayIntegers[0] >= 0 && arrayIntegers[0] < 24) && (arrayIntegers[1] >= 0 && arrayIntegers[1] <= 60)) {
        return true
    } else {
        return false
    }
}

// I think the arrayIntegers should have a better name. I used hm, but not sure that's the best.

// My solution
function validTimeArne(str) {
    let hm = str.split(':')
    if (hm[0] < 24 && hm[0] >= 0 && hm[1] < 60 && hm[1] >= 0) return true
    return false
}

console.log(validTime('13:58'))
console.log(validTime('25:51'))
console.log(validTime('02:76'))

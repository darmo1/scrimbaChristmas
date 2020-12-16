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



console.log(validTime('13:58'))
console.log(validTime('25:51'))
console.log(validTime('02:76'))

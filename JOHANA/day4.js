//https://scrimba.com/learn/adventcalendar/javascript-challenge-century-from-year-introduction-cNDr7NUB

function centuryFromYear(num) {
    
    return century = Math.ceil(num/100)
} 

// I think this solution is awesome. Better than mine and really elegant.
// I don't think you should declare century = though, and just put:
// return Math.ceil(num/100)

// My solution:
const centuryFromYearArne = (num) => Math.floor((num-1)/100 + 1)

// rewritten version with your idea
const centuryFromYearArne = (num) => Math.ceil((num)/100)

// SO PRETTY!

console.log(centuryFromYear(1905));
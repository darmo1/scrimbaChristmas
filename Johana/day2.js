//https://scrimba.com/learn/adventcalendar/-javascript-challenge-deposit-profit-introduction-cPk7yptk
function depositProfit(deposit, rate,threshold){

    let years=0;

    while (deposit <= threshold){
        deposit = deposit + (deposit*rate/100)
        years +=1
    }

    return years
}

// Looks good, but would also here think about the spacing.

// My solution:
function depositProfitArne(deposit, rate, threshold) {
    let year = 0
    while (deposit <= threshold) {
        year++
        deposit *= 1 + rate/100
    }
    return year
}

console.log(depositProfit(100,20,170));
function depositProfit(deposit, rate, threshold) {
    let i = 0;
    while(deposit <= threshold){
        deposit += deposit * rate/100;
        i++
    }
   return i
}

// This solution is pretty good, almost exactly like mine.
// mySolution:
function depositProfitArne(deposit, rate, threshold) {
    let year = 0
    while (deposit <= threshold) {
        year++
        deposit *= 1 + rate/100
    }
    return year
}

console.log(depositProfit(100, 20 , 170));
console.log(depositProfitArne(100, 20 , 170));
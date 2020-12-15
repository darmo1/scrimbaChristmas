//https://scrimba.com/learn/adventcalendar/-javascript-challenge-deposit-profit-introduction-cPk7yptk
function depositProfit(deposit, rate,threshold){

    let years=0;

    while (deposit <= threshold){
        deposit = deposit + (deposit*rate/100)
        years +=1
    }

    return years
}

console.log(depositProfit(100,20,170));
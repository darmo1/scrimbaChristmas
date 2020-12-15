//https://scrimba.com/learn/adventcalendar/-javascript-challenge-sum-odd-fibonacci-numbers-introduction-cmpWaRcW


function sumOddFibonacciNumbers(num) {
    
    let sumOddNumebers =0;
    let fibonacci = [0,1];

    for(let i = 1; i <fibonacci.length; i++){

        if(fibonacci[i] <= num){
            if((fibonacci[i] % 2) != 0){
                sumOddNumebers += fibonacci[i];  
            } 
    
            fibonacci.push(fibonacci[i] + fibonacci[i-1]);
        }

    }

    return sumOddNumebers;
   
}

console.log(sumOddFibonacciNumbers(10));
console.log(sumOddFibonacciNumbers(1000));
console.log(sumOddFibonacciNumbers(4000000));
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

// I think this solution is very readable, more than mine.
// But it would be cool if you can explain how mine work.
// All the random lineshifts! I would do it like this:

function sumOddFibonacciNumbers(num) {
    let sumOddNumebers =0;
    let fibonacci = [0,1];

    for(let i = 1; i <fibonacci.length; i++) {
        if(fibonacci[i] <= num) {
            if((fibonacci[i] % 2) != 0) {
                sumOddNumebers += fibonacci[i];  
            }
            fibonacci.push(fibonacci[i] + fibonacci[i-1]);
        }
    }
    return sumOddNumebers; 
}

// My solution (recursive):
function sumOddFibonacciNumbersArne(num, fibs = [1,1]) {
    if (fibs[0] + fibs[1] >= num) return fibs.reduce(((sum, number) => number % 2 === 1 ? sum + number : sum), 0)
    fibs.unshift(fibs[0] + fibs[1])
    return sumOddFibonacciNumbers(num, fibs)
  }

console.log(sumOddFibonacciNumbers(10));
console.log(sumOddFibonacciNumbers(1000));
console.log(sumOddFibonacciNumbers(4000000));
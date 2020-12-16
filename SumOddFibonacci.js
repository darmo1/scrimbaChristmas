function sumOddFibonacciNumbers(num) {
  //  write code here.
  let i = 1;
  let arrayNumbers = [];
  let key = 0
  let result = 0
  while (result < num) {
    if (i == 1) {
      arrayNumbers.push(i);
      arrayNumbers.push(i);
    }
    let sum =   arrayNumbers[i] + arrayNumbers[i-1]; //(2)
    if (sum % 2 == 0){
        key = sum
        arrayNumbers.push(0);
        i++
    }else{
        arrayNumbers.push(sum+key);
        i++
    }  
    result = arrayNumbers.reduce((acum,idx)=> acum + idx )
}
  return result
}

// I think this is very difficult to read, the naming of the variables makes it very difficult.

// My solution: (A recursive function)
function sumOddFibonacciNumbersArne(num, fibs = [1,1]) {
  if (fibs[0] + fibs[1] >= num) return fibs.reduce(((sum, number) => number % 2 === 1 ? sum + number : sum), 0)
  fibs.unshift(fibs[0] + fibs[1])
  return sumOddFibonacciNumbers(num, fibs)
}

console.log(sumOddFibonacciNumbers(4000000))
console.log(sumOddFibonacciNumbersArne(4000000))





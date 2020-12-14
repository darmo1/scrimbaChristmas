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
 console.log(sumOddFibonacciNumbers(4000000)) ;





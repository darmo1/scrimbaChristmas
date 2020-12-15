function reverseAString(str) {
    //  write code here.
    const arrayOfString = []
    for(let i= 0; i < str.length ; i++ ){
        arrayOfString.unshift(str[i])
    }

    const reverseString = arrayOfString.join('')
    return reverseString;
    
}

// This can be made so much easier by using the array functions .split, .reverse and .join
// Also, it makes no sense having the two last lines, you should just:
// return arrayOfString.join('')

// My solution:
const reverseAStringArne = (str) => str.split('').reverse().join('') 


console.log(reverseAString('hola'));
console.log(reverseAStringArne('hola'));
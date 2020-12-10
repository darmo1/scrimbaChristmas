function reverseAString(str) {
    //  write code here.
    const arrayOfString = []
    for(let i= 0; i < str.length ; i++ ){
        arrayOfString.unshift(str[i])
    }

    const reverseString = arrayOfString.join('')
    return reverseString;
    
   
}

console.log(reverseAString('hola'));
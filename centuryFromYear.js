function centuryFromYear(num) {
    //  write code here.
    
    let i = 0;
    let suma = 0;
    let numero = num

    while(i<2){
        suma += numero % 10; 
        numero = numero/10
        i++
    }

    let year = num;
  
    if(Math.floor(suma) < 1){
        const century =   year / 100;
        return century;
        
    }else{
        const centuryString = year.toString().slice(0,2);
        const centuryNumber = Number(centuryString);
        const century = centuryNumber + 1
        return century;
        
    }
}

console.log(centuryFromYear(1707))

function countVowelConsonant(str) {

    let result=0;
    strToarray= str.split("");

    for(let i=0; i<strToarray.length; i++){
        if(strToarray[i] == 'a' || strToarray[i] == 'e' || strToarray[i] == 'i' || strToarray[i] == 'o' || strToarray[i] == 'u'){
            result += 1;
        }else{
            result +=2;
        }
    }

    return result;
    
  }


  console.log(countVowelConsonant("abcde"));
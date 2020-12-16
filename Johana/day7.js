
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

  // I went through this yesterday in the meeting as well, but I think it's a good example of where 
  // it makes sense to store the elements in an array and check for that, another option is using regex.

  // My solution:
  function countVowelConsonantArne(str) {
    const vowels = ["a","e","i","o","u"]
    return str.split('').reduce((sum, current) => vowels.includes(current) ? sum + 1 : sum + 2, 0)
  }

  // Using regex, oneliner:
  const countVowelConsonantRegex = (str) => str.split('').reduce((sum, current) => current.match(/[aeiou]/) ? sum + 1 : sum + 2, 0)
  


  console.log(countVowelConsonant("abcde"));
function countVowelConsonant(str) {

    const arrayString = []
    for(let i=0; i<str.length; i++){
        arrayString.push(str[i])
    }
    
    let countString = arrayString.map(element => scoreVowell(element)).reduce((accumulator, element) => accumulator + element)
    return countString;

    
  }

  function scoreVowell(vowell){
    
    if(vowell == 'a' || vowell == 'e' || vowell == 'i' || vowell == 'o' || vowell == 'u'){
        return 1
    }else{
        return 2
    }
    
  }

  // I do think this is a bit too complicated.
  // My solution:

  function countVowelConsonantArne(str) {
    const vowels = ["a","e","i","o","u"]
    return str.split('').reduce((sum, current) => vowels.includes(current) ? sum + 1 : sum + 2, 0)
  }

  // or in one line:
  // countVowelConsonant = (str) => str.split('').reduce((sum, current) => ["a","e","i","o","u"].includes(current) ? sum + 1 : sum + 2, 0)


  countVowelConsonant('abcde');
  countVowelConsonantArne('abcde');
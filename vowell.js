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

  countVowelConsonant('abcde');
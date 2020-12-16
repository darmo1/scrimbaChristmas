function validTime(str) {
    //  write code here.

    const isTime = str.split(':').map((element)=>{
        return parseInt(element);
    })

    if(isTime[0] <= 24 && isTime[1] <=59 ){
        return true
    }
    else {
        return false
    }
    
}

// This solution is pretty nice.

// Mine:
function validTimeArne(str) {
    let hm = str.split(':')
    if (hm[0] < 24 && hm[0] >= 0 && hm[1] < 60 && hm[1] >= 0) return true
    return false
}


console.log(validTime("25:51"));
console.log(validTimeArne("25:51"));
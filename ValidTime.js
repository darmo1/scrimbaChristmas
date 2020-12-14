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


console.log(validTime("25:51"));
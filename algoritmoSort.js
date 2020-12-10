let a = [100, 1, 592, 326, 41, 58];

for(let i= 1; i < a.length; i++){

    let key = a[i]; 
    let j = i-1; 
    while(i > 0 && a[j]> key ){ 
    a[j+1] = a[j]
    j= j-1
    }
    a[j+1] = key
  
}

console.log(a)
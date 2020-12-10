function adjacentElementsProduct(nums) {
    //  write code here.
    const multiplicationArray =  [];
    for(let i=0; i<nums.length; i=i+2){
        const multiplication = nums[i]*nums[i+1]
        multiplicationArray.push(multiplication)
    }
    const result = Math.max(...multiplicationArray) ;
    return result
}

let arrayNums = [3, 6, -2, -5, 7, 3];
console.log(adjacentElementsProduct(arrayNums));
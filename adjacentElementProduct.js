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

// I also think this is difficult to read. I think you should get a code formatter, so you use more correct spacing.
// For example:
// for(let i=0; i<nums.length; i=i+2){ is much more difficult to read than:
//for(let i = 0; i < nums.length; i = i + 2){

// Also, for this array: [3, -4, 3], your solution doesn't work.

// My solution:

const adjacentElementsProductArne = (nums) => 
  nums
    .reduce((max, current, i, arr) => 
      (max < current * arr[i - 1] ? current * arr[i - 1] : max),-Infinity)
  

let arrayNums = [3, 6, -2, -5, 7, 3];
console.log(adjacentElementsProduct(arrayNums));
console.log(adjacentElementsProductArne(arrayNums));

arrayNums = [3, -4, 3]
console.log(adjacentElementsProduct(arrayNums));
console.log(adjacentElementsProductArne(arrayNums));
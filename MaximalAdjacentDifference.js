function arrayMaximalAdjacentDifference(nums) {
    const absoluteArray =[]
    //  write code here.
    for(let i=1; i < (nums.length-1) ; i++){
        const absoluteNumberDown = Math.abs(nums[i]) - Math.abs(nums[i-1])
        absoluteArray.push(absoluteNumberDown)
        const absoluteNumberUp = Math.abs(nums[i]) - Math.abs(nums[i+1])
        absoluteArray.push(absoluteNumberUp)
    }

    return Math.max(...absoluteArray)
}

// You're doing too many things here, if you change it to this, it will resolve to the same:
// (Also, work on naming.)
// function arrayMaximalAdjacentDifference(nums) {
//     const differences =[]
//     for(let i = 0; i < (nums.length-1) ; i++){
//         const difference = Math.abs(nums[i]) - Math.abs(nums[i+1])
//         differences.push(difference)
//     }
//     return Math.max(...differences)
// }


// My solution:

arrayMaximalAdjacentDifferenceArne = (nums) 
  => nums.reduce((max, current, i) 
    => Math.abs(current - nums[i+1]) > max ? max = Math.abs(current - nums[i+1]) : max,0)

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]))
console.log(arrayMaximalAdjacentDifferenceArne([2, 4, 1, 0]))
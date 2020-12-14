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

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]))
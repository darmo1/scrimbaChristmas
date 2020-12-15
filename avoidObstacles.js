// My solution:
function avoidObstacles(nums) {
    for (let i = 1;;i++) {
        if (nums.every(num => num % i !== 0)) return i
    }
}
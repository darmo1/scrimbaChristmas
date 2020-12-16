//https://scrimba.com/learn/adventcalendar/-javascript-challenge-extract-each-kth-introduction-ce96GEHP

function extractEachKth(nums, index) {
    return nums.filter(item =>(item % index != 0))
}

// This has the same issue as Danilo's solution. You're actually splitting on the values in the array,
// not the position in the array.

// My solution
const extractEachKthArne = (nums, index) => nums.filter((num, i) => (i+1) % index !== 0)

let exampleOne = [1,2,3,4,5,6,7,8,9,10]
console.log(extractEachKth(exampleOne, 3))
console.log(extractEachKthArne(exampleOne, 3))

exampleOne = exampleOne.reverse()
console.log(extractEachKth(exampleOne, 3))
console.log(extractEachKthArne(exampleOne, 3))
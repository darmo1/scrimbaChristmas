function extractEachKth(nums, index) {
    //  write code here.
    const filterArray = nums.filter( (element) => {
          return  element % index 
        
    })

    return filterArray;
}
// Your solution here doesn't work. It only works for the current array, and any other array will not work.

// My solution
const extractEachKthArne = (nums, index) => nums.filter((num, i) => (i+1) % index !== 0)

let exampleOne = [1,2,3,4,5,6,7,8,9,10]
console.log(extractEachKth(exampleOne, 3))
console.log(extractEachKthArne(exampleOne, 3))

exampleOne = exampleOne.reverse()
console.log(extractEachKth(exampleOne, 3))
console.log(extractEachKthArne(exampleOne, 3))

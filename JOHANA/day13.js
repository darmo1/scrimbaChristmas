//https://scrimba.com/learn/adventcalendar/-javascript-challenge-extract-each-kth-introduction-ce96GEHP

function extractEachKth(nums, index) {
    return nums.filter(item =>(item % index != 0))
}

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
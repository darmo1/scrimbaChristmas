function extractEachKth(nums, index) {
    //  write code here.
    const filterArray = nums.filter( (element) => {
          return  element % index 
        
    })

    return filterArray;
}

console.log(extractEachKth([1,2,3,4,5,6,7,8,9,10], 3))

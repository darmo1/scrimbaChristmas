//https://scrimba.com/learn/adventcalendar/-javascript-challenge-adjacent-elements-product-introduction-c8q4NRCE

function adjacentElementsProduct(nums) {
    let product = 1;

    for(let i=0; i<nums.length; i++){
        currentProduct= nums[i] * nums[i+1];
        if(currentProduct >= product){
            product = currentProduct
        }
    }

    return product
}

// Your solution doesn't work for my second test case, you can solve this by setting:
// let product = -Infinity
// I still think the code looks messy, you're using ; sometimes, and the spacing varies.

// My solution:
const adjacentElementsProductArne = (nums) => 
  nums
    .reduce((max, current, i, arr) => 
      (max < current * arr[i - 1] ? current * arr[i - 1] : max),-Infinity)

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log('Johana: ')
console.log(adjacentElementsProduct([6, -2, 6]));
console.log('Arne: ')
console.log(adjacentElementsProductArne([6, -2, 6, -3]));
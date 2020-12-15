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

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
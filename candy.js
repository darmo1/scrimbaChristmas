const howmanycandies = function (candies, children){
    const result = children * Math.floor(candies/children)
    return result
}

console.log(howmanycandies (10,3));
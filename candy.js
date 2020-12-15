const howmanycandies = function (candies, children){
    const result = children * Math.floor(candies/children)
    return result
}

// In these cases I don't think you should make a constant called result, it looks a lot
// cleaner if you just write:
// return children * Math.floor(candies/children)


// My solution:
const candies = (children, candy) => candy - (candy % children) 

console.log(howmanycandies(10,3))
console.log(candies(10,3))
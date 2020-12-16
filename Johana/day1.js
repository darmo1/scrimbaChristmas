//https://scrimba.com/learn/adventcalendar/-javascript-challenge-candies-introduction-cLkqvpcQ

function candies(children, candy){

    return candyChildPieces= Math.floor(candy/children) * children
}

// Good, I think that in general it makes sense to think about how you use spaces.
// I would format the code above like this:

function candies(children, candy) {
    return candyChildPieces = Math.floor(candy / children) * children
}


// My solution:
const candies = (children, candy) => candy - (candy % children) 

console.log(candies(3,10))
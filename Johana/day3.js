//https://scrimba.com/learn/adventcalendar/-javascript-challenge-chunky-monkey-introduction-cLkqvyAR

function chunkyMonkey(values, size) {
    var solution = []
    for(var i = 0; i<values.length; i++){
        var pos = Math.floor(i/size)

        if(!solution[pos]){
            solution[pos] = []
        }

        solution[pos].push(values[i])
    }

    return solution
}

// I don't like the naming of solution here, since I don't understand exactly what it means.
// It is also kind of difficult to understand what pos actually is, but I think the solution is clever.

// I'm using the .splice() function, which takes away a chunk of an array. So everythime the
// while loop runs, it takes away a chunk of size and put it in the chunks array.

// My solution:

function chunkyMonkey (values, size) {
    let chunks = []
    while (values.length) {
        chunks.push(values.splice(0, size))
    }
    return chunks
}
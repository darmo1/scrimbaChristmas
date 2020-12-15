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
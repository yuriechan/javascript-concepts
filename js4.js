//Concept 1 - Higher-Order Functions
//So you learned a little bit about these functions in the last assignment
//and that they are basically functions that take other functions
//as arguments.

//Create a function called onEvery that replicates the function of
//forEach by taking in an array and a function that is invoked on each
//element of that array and returns the values. Do not use forEach() or map().

function onEvery(arr, func){
    for (let i = 0; i < arr.length; i++) {
         arr[i] = func(arr[i])
    }
    return arr
}

//Create a function that takes in a number and an infinite number of 
//functions, runs all the functions on the single number, then returns it.

// This is not scalable, since it has only three functions as an argument 
// function marathon(num, funcOne, funcTwo, funcThree){
//     return funcThree(funcTwo(funcOne(num)))
// }

//Assume that random number of functions will be passed, and using spread operator is the way to go.
//Spread operator allows iterable (an Object which one can iterate over) to expand in places where >0 arguments are expected

function marathon(num, ...functions) {
    for (let i = 0; i < functions.length; i++) {
        num = functions[i](num)
    }
    return num
}

module.exports = { onEvery, marathon }
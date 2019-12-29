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

function marathon(num, funcOne, funcTwo, funcThree){
    return funcThree(funcTwo(funcOne(num)))
}

module.exports = { onEvery, marathon }
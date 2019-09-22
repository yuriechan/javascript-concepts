//Concept 1 - Higher-Order Functions
//So you learned a little bit about these functions in the last assignment
//and that they are basically functions that take other functions
//as arguments.

//Create a function called onEvery that replicates the function of
//forEach by taking in an array and a function that is invoked on each
//element of that array and returns the values. Do not use forEach() or map().

function onEvery(inArray, inFunction) {
    outArray = [];
    // I'm assuming I can use a normal for loop though, not sure if I have other options (reasonable options)
    for (var i = 0; i < inArray.length; i++){
        outArray.push(inFunction(inArray[i]));  // I considered writing this in separate lines for readability, still uncertain with decisions like these
    }

    return outArray;
}

//Create a function that takes in a number and an infinite number of 
//functions, runs all the functions on the single number, then returns it.

function marathon(num, ...functions) {
    for (var i = 0; i < functions.length; i++){
        num = functions[i](num);
    }
    return num;  
    // I assumed here it was fine to use num as oppose to instantiating a new variable, again not certain of the decision but I imagine mutating the parameter passed in here wouldn't matter
}

module.exports = { onEvery, marathon }
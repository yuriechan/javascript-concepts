/*
Concept 1 - Basic Variables
Create variables of any value for the following names and types:
t1 - number
t2 - string
t3 - boolean
t4 - array
*/

//Concept 1
let t1 = 1
let t2 = "dog"
let t3 = false
let t4 = [0,1,2]

/*
Concept 2 - Simple Function Returns
Create a function named myFunctionOne that returns the number 3.
*/

//Concept 2
function myFunctionOne() {
    return 3
}

/*
Concept 3 - Parameters 1
Create a function named myFunctionTwo with two parameters that returns their sum.
*/

//Concept 3
function myFunctionTwo(x, y) {
    return x + y
}

/*
Concept 4 - Parameters 2
Create a function named myFunctionThree with three parameters that returns all of the parameters multiplied.
*/

//Concept 4
function myFunctionThree(x, y, z) {
    return x*y*z
}

/*
Concept 5 - Parameters 3
Create a function named myFunctionFour with two parameters that returns their sum if one of them isn't zero and returns false if one of them is zero.
*/

//Concept 5
function myFunctionFour(x, y) {
    if (!x || !y) {
        return false
    } else {
        return x + y
    }
}


//TESTING FUNCTIONS - DO NOT TOUCH ANYTHING BELOW THIS POINT
module.exports = { myFunctionOne, myFunctionTwo, myFunctionThree, myFunctionFour }
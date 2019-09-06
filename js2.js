/* Concept 1 - Loops
Create a function called myFunctionOne that returns the sum of all values of an array.
*/

//Concept 1
function myFunctionOne(arr) {
    var sum = 0;
    arr.forEach(element => {
       sum += element; 
    });
    return sum;
}


/* Concept 2 - Loops 2
Create a function called myFunctionTwo with one parameter that counts the number of items in an array and returns the count.
*/

//Concept 2
function myFunctionTwo(arr){
    var count = 0;
    arr.forEach(element => {
        count ++;
    });
    return count;
}

/* Concept 3 - Nested Loops
Create a function called myFunctionThree with one parameter that loops through each string in an array and adds each character
into one long string and then returns the long string.

Example
Parameter: ['one', 'two', 'three']
Return: 'onetwothree'
*/

//Concept 3
function myFunctionThree(arr){
    var result = "";
    arr.forEach(element => {
        result = result.concat(element);
    });
    return result;
}

/* Concept 4 - Arrays
Create a function called myFunctionFour that uses a loop to push all numbers from 1 to 100 into an array called 'numArray'.
*/

//Concept 4
function myFunctionFour(){
    var numArray = [];
    for(i = 1; i<101; i++){
        numArray.push(i);
    }
    return numArray;
}


/* Concept 5 - Arrays 2
Create a function called myFunctionFive with one parameter that takes an array of numbers and returns a new array of even numbers
pulled from the parameter.

Example
Parameter: [2, 3, 4, 5, 6]
Return: [2, 4, 6]
*/

//Concept 5
function myFunctionFive(arr){
    var newArray = [];
    arr.forEach(element => {
        if (element%2 == 0){
            newArray.push(element);
        }
    });
    return newArray;
}



//TESTING FUNCTIONS - DO NOT TOUCH ANYTHING BELOW THIS POINT
module.exports = { myFunctionOne, myFunctionTwo, myFunctionThree, myFunctionFour, myFunctionFive }
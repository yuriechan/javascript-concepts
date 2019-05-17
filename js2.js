/* Concept 1 - Loops
Create a function called myFunctionOne that returns the sum of all values of an array.
*/

//Concept 1
function myFunctionOne() {

}


/* Concept 2 - Loops 2
Create a function called myFunctionTwo with one parameter that counts the number of items in an array and returns the count.
*/

//Concept 2


/* Concept 3 - Nested Loops
Create a function called myFunctionThree with one parameter that loops through each string in an array and adds each character
into one long string and then returns the long string.

Example
Parameter: ['one', 'two', 'three']
Return: 'onetwothree'
*/

//Concept 3


/* Concept 4 - Arrays
Create a function called myFunctionFour that uses a loop to push all numbers from 1 to 100 into an array called 'numArray'.
*/

//Concept 4


/* Concept 5 - Arrays 2
Create a function called myFunctionFive with one parameter that takes an array of numbers and returns a new array of even numbers
pulled from the parameter.

Example
Parameter: [2, 3, 4, 5, 6]
Return: [2, 4, 6]
*/

//Concept 5



//TESTING FUNCTIONS - DO NOT TOUCH ANYTHING BELOW THIS POINT
function Tests() {
    let total = 5;
    let correct = 0;
    if (myFunctionOne([2, 6, 3]) === 11 && myFunctionOne([-3, 3, 10]) === 10) {
        console.log('CONCEPT 1 - PASS');
        correct++;
    }        
    else
        console.log('CONCEPT 1 - FAIL');    

    if (myFunctionTwo([1, 3, 'six']) === 3 && myFunctionTwo([1, 2, 3, 4, 5]) === 5) {
        console.log('CONCEPT 2 - PASS');
        correct++;
    }        
    else
        console.log('CONCEPT 2 - FAIL');

    if (myFunctionThree(['cow', 'banana', 'horse']) === 'cowbananahorse') {
        console.log('CONCEPT 3 - PASS');
        correct++;
    } else {
        console.log('CONCEPT 3 - FAIL');
    }

    var la = 0;
    for (let i = 1; i < 101; i++) {
        la += i;
    }
    if (la === 5050) {
        console.log('CONCEPT 4 - PASS');
        correct++;
    } else {
        console.log('CONCEPT 4 - FAIL');
    }

    var comp = myFunctionFive([1, 2, 3, 4, 5, 6, 7]);
    var tot = 0;
    for (let i = 0; i < comp.length; i++) {
        tot += comp[i];
    }
    if (tot === 12) {
        console.log('CONCEPT 5 - PASS');
        correct++;
    } else {
        console.log('CONCEPT 5 - FAIL');
    }

    console.log(`You scored ${correct / total * 100}`);
}
Tests();
/*
Concept 1 - Basic Variables
Create variables of any value for the following names and types:
t1 - number
t2 - string
t3 - boolean
t4 - array
*/

//Concept 1
var x = 0;

/*
Concept 2 - Simple Function Returns
Create a function named myFunctionOne that returns the number 3.
*/

//Concept 2
function myFunctionOne() {

}

/*
Concept 3 - Parameters 1
Create a function named myFunctionTwo with two parameters that returns their sum.
*/

//Concept 3


/*
Concept 4 - Parameters 2
Create a function named myFunctionThree with three parameters that returns all of the parameters multiplied.
*/

//Concept 4


/*
Concept 5 - Parameters 3
Create a function named myFunctionFour with two parameters that returns their sum if one of them isn't zero and returns false if one of them is zero.
*/

//Concept 5



//TESTING FUNCTIONS - DO NOT TOUCH ANYTHING BELOW THIS POINT
function Tests() {
    let total = 5;
    let correct = 0;
    if (typeof t1 === 'number' && typeof t2 === 'string' && typeof t3 === 'boolean' && Array.isArray(t4)) {
        console.log('CONCEPT 1 - PASS');
        correct++;
    }        
    else
        console.log('CONCEPT 1 - FAIL');    

    if (myFunctionOne() === 3) {
        console.log('CONCEPT 2 - PASS');
        correct++;
    }        
    else
        console.log('CONCEPT 2 - FAIL');

    if (myFunctionTwo(3, 8) === 11 && myFunctionTwo(-4, 16) === 12) {
        console.log('CONCEPT 3 - PASS');
        correct++;
    } else {
        console.log('CONCEPT 3 - FAIL');
    }

    if (myFunctionThree(4, 3, 2) === 24 && myFunctionThree(-2, 2, 2) === -8) {
        console.log('CONCEPT 4 - PASS');
        correct++;
    } else {
        console.log('CONCEPT 4 - FAIL');
    }

    if (myFunctionFour(2, 100) === 102 && myFunctionFour(0, 3) === false) {
        console.log('CONCEPT 5 - PASS');
        correct++;
    } else {
        console.log('CONCEPT 5 - FAIL');
    }

    console.log(`You scored ${correct / total * 100}`);
}
Tests();
//Concept 1 - Objects
//Objects are just hash maps, key-value pairs. In JavaScript, they are flexible and easy to work with.
function objectExample() {
    const myObject = {
        title: 'Object',
        id: 6,
        isCool: true
    }
}

//Create a function called myPerson that takes in three parameters and then returns a new object containing the parameters as properties.
function myPerson(name, age, gender){
    const Person = {
        name: name,
        age: age,
        gender: gender
    }
    return Person
}

//Concept 2 - Immutability
//One key concept in programming is to provide immutability for parameters. So when we pass in arrays and objects,
//we don't want to mutate them. Instead, we want to create new ones.

//Create a function called objectExtend that takes in an object, adds a 'checked: true' key/value, and returns it
//as a new object, not mutating the input.
function objectExtend(obj) {
    let newObject = Object.assign({},obj)
    newObject.checked = true
    return newObject
}

//Concept 3 - Classes
//Classes are relatively new to JavaScript (ES6) and function similarly to other OOP languages.
//We can give it properties via the constructor and methods outside the constructor.
class Car {
    constructor(make, model) {
        this.type = 'car'
        this.make = make
        this.model = model
    }
    
    getMake() {
        return this.make
    }

    getModel() {
        return this.model
    }
}

const car1 = new Car('Honda', 'Accord') //Instantiate Object
const car2 = new Car('Toyota', 'Camry') //Instantiate Object
car1.getMake() //returns 'Honda'
car2.getModel() //returns 'Camry'

//Create a class called Student that takes in name, age, and major and has
//another property called school that is set to 'Fake University'.
//It should have methods called getName and getMajor that return those properties.
//It should have a method called changeMajor that will set the object's major to
//the given argument.

class Student {
    constructor(name, age, major) {
        this.name = name,
        this.age = age,
        this.major = major,
        this.school = 'Fake University'
    }
    getName() {
        return this.name
    }
    getMajor() {
        return this.major
    }
    changeMajor(newMajor) {
        this.major = newMajor
    }
}


//Concept 4 - Callbacks

//This is where you start to get into JavaScript-specific concepts. They exist in other OOP
//languages but are the most critical in JS and web development. Callbacks are arguments that
//are functions.

function normalFunction(normalArgument, functionArgument) {
    console.log(normalArgument)
    functionArgument()
}

function callbackFunction() {
    console.log('I am a callback')
}

normalFunction('myArgument', callbackFunction) //logs 'myArgument', then logs 'I am a callback'

//These are ways of making sure one execution happens before another does, keeping things in order.
//This is particularly important for asynchronous events online, and it highlights a key concept in
//JavaScript: higher-order functions (i.e., passing functions as arguments)

//You will most often see these written this way:
normalFunction('myArgument', () => {
    console.log('I am a callback')
})

//This is the same thing, but instead of writing out the function separately and using it as an argument,
//it is written inside the function as an argument. This can get wild, too.

function crazyCallbackExample(a, b, c, d) {
    a()
    b()
    c()
    d()
}

crazyCallbackExample(() => {
    console.log('a')
}, () => {
    console.log('b')
}, () => {
    console.log('c')
}, () => {
    console.log('d')
})

//And if you need multiple, in-order calls, it turns into 'callback hell'

function a(b) {
    console.log('a')
    b()
}

function c(d) {
    console.log('c')
    d()
}

a(() => {
    c(() => {
        //This can go on forever, basically
    })
})

//It is bad practice to build massive amounts of callbacks into each other,
//but you will be doing them and occasionally three or more nestings deep.
//But there are alternatives to this now as well.

//By the way, you've seen the () => {}, but what exactly is happening?
//It is a function without a name! The arrow makes an arrow function (lambda function)
//and has a different impact on it that we will get into a little later.
//These two functions are the same (one slight difference), just using different notation.

a(function() {
    console.log('b')
})

a(() => {
    console.log('b')
})

//Create a function that takes in a function as an argument, runs that function,
//and returns the result. Then, create a test in js3.test.js that tests it and use
//the anonymous function to invoke it.

function HigherOrder(func) {
    return func()
}

function functionInAFunction(otherFunction){
    return otherFunction()
}
// Not certain what an anonymous function is, I hope this is correct.

module.exports = { myPerson, objectExtend, Student, HigherOrder, functionInAFunction }
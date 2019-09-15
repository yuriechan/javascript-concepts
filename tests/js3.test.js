const { myPerson, objectExtend, Student, functionInAFunction } = require('../js3')

describe('JavaScript Concepts 3', () => {
    describe('Concept 1', () => {
        test('should return an object with three properties based on arguments', () => {
            expect(myPerson('John', 25, 'Male')).toEqual({
                name: 'John',
                age: 25,
                gender: 'Male'
            })
            expect(myPerson('Jane', 23, 'Female')).toEqual({
                name: 'Jane',
                age: 23,
                gender: 'Female'
            })
        })
    })
    describe('Concept 2', () => {
        const testObj = { id: 1 }
        test('should return an object with added property', () => {
            expect(objectExtend(testObj)).toEqual({ id: 1, checked: true })
        })
        test('should not mutate the input', () => {
            objectExtend(testObj)
            expect(testObj).toEqual({ id: 1 })
        })
    })
    describe('Concept 3', () => {
        const testStudent = new Student('John', 25, 'Business')
        test('should create an object with the required properties', () => {
            expect(testStudent.name).toBe('John')
            expect(testStudent.age).toBe(25)
            expect(testStudent.major).toBe('Business')
            expect(testStudent.school).toBe('Fake University')
        })
        test('should have getters for name and major', () => {
            expect(testStudent.getName()).toBe('John')
            expect(testStudent.getMajor()).toBe('Business')
        })
        test('should have a method to change the major', () => {
            testStudent.changeMajor('Pseudoscience')
            expect(testStudent.getMajor()).toBe('Pseudoscience')
        })
    })
    //Write your test here! Just follow the pattern for making a describe,
    //test, expect, and toBe.

    describe('Concept 4', () => {
        function testFunction(){return 42}
        test('should return 42', () => {
            expect(functionInAFunction(testFunction)).toBe(42)
        })
    })

    // Kept getting stuck on an error when I tried to write line 52 as :  expect(functionInAFunction(testFunction())).toBe(42).
    // The error was : "TypeError: otherFunction is not a function", couldn't make sense of it but the separate variable seems to have fixed it.  What am I misunderstanding here?

})
const { myPerson, objectExtend, Student } = require('../js3')

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
})
const { myFunctionOne, myFunctionTwo, myFunctionThree, myFunctionFour } = require('../js1')


describe('JavaScript Concepts 1', () => {
    describe('Concept 2', () => {
        test('should return 3', () => {
            expect(myFunctionOne()).toBe(3)
        })
    })

    describe('Concept 3', () => {
        test('should return two numbers added together', () => {
            expect(myFunctionTwo(2, 4)).toBe(6)
            expect(myFunctionTwo(5, 10)).toBe(15)
        })
    })
    
    describe('Concept 4', () => {
        test('should return the product of three numbers', () => {
            expect(myFunctionThree(2, 2, 3)).toBe(12)
            expect(myFunctionThree(3, 3, 3)).toBe(27)
        })
    })
    
    describe('Concept 5', () => {
        test('should return the sum if arguments do not include 0', () => {
            expect(myFunctionFour(4, 7)).toBe(11)
        })
        test('should return false if one or both arguments are 0', () => {
            expect(myFunctionFour(5, 0)).toBe(false)
        })
    })
    
})


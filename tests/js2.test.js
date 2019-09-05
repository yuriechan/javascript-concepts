const { myFunctionOne, myFunctionTwo, myFunctionThree, myFunctionFour, myFunctionFive } = require('../js2')

describe('JavaScript Concepts 2', () => {
    describe('Concept 1', () => {
        test('should return the sum of array values', () => {
            expect(myFunctionOne([2, 4, 2])).toBe(8)
            expect(myFunctionOne([5, 4, 7])).toBe(16)
        })
    })

    describe('Concept 2', () => {
        test('should return the length of an array', () => {
            expect(myFunctionTwo([1, 2, 3, 4, 5])).toBe(5)
            expect(myFunctionTwo(['a', 'b', 'c', 'd', 'e', 'f'])).toBe(6)
        })
    })

    describe('Concept 3', () => {
        test('should combine array into one string', () => {
            expect(myFunctionThree(['big', 'brown', 'dog'])).toBe('bigbrowndog')
            expect(myFunctionThree(['is', 'lan', 'd'])).toBe('island')
        })
    })

    describe('Concept 4', () => {
        const numArray = Array.from(Array(101).keys())
        numArray.shift()
        test('should have numbers 1 to 100 in an array', () => {
            expect(myFunctionFour()).toEqual(numArray)
        })
    })

    describe('Concept 5', () => {
        test('should return only even numbers of an array', () => {
            expect(myFunctionFive([1, 2, 3, 4, 5])).toEqual([2, 4])
            expect(myFunctionFive([22, 33, 44, 55, 66])).toEqual([22, 44, 66])
        })
    })
})
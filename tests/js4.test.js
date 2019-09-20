const { onEvery, marathon } = require('../js4')

describe('Javascript Concepts 4', () => {
    describe('Concept 1', () => {
        test('onEvery should exist and return an array after invoking the passed function on all elements', () => {
            expect(onEvery).toBeDefined
            const testFunction = (x) => {
                return x * 2
            }
            const newArray = onEvery([1, 2, 3], testFunction)
            expect(newArray).toEqual([2, 4, 6])
        })
        test('marathon should run all function arguments on a single number', () => {
            expect(marathon(2, (x) => {return x + 2}, (x) => {return x * 10}, (x) => {return x - 5})).toBe(35)
        })
    })
})
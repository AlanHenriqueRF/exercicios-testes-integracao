import calculator from "calculator"

describe('Tests of MUtiply function',()=>{
    it('should return 50 when paramns are 10 and 5',()=>{
        expect(calculator.mul(5,10)).toBe(50);
    })
})
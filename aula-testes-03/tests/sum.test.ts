import calculator from "calculator"

describe('test of sum numbers',()=>{
    it('Must returns 5 when 2 and 3 are paramns',()=>{
        const resultado = calculator.sum(2,3)

        expect(resultado).toBe(5);
    })
    it('Must returns 5 when 2 and 3 are paramns',()=>{
        const resultado = calculator.sum(3,3)
        expect(resultado).toBe(6);
    })
})
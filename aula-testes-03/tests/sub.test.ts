import calculator from "calculator";


describe('Tests of sub functions',()=>{
    it('Should returns 5 when params are 15 and 10',()=>{
        const result = calculator.sub(15,10)
        expect(result).toBe(5);
    })
})
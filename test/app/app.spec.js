var soma = require('../../src/app/app');

describe("App.js", ()=>{
    it("function soma(3,2) should be 5", ()=>{
        expect(soma(3,2)).toBe(5);
    })
})
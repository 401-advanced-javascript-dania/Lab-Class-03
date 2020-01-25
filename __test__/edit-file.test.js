'use strict';
jest.mock('fs')
let validation =require('../edit-file.js')
describe('File Reader Module',()=>{
    describe('as a promise',()=>{
        it ('when given a bad file ,returns an error',()=>{
            let file =`${__dirname}/data/person.json`;
            return validation.readFile(file)
            .then(data=>expect(data).not.toBeDefined())
            .catch(error => expect(error).toBeDefined());
        })
        it ('when given a real file ,returns the conetent',()=>{
            let file =`${__dirname}/data/person.json`;
            return validation.readFile(file)
            .then(data=>expect(data).toBeDefined())
            .catch(error => expect(error).not.toBeDefined());
        })
        it('when write file it will write file without error',()=>{
            let file =`${__dirname}/data/file.txt`;
            let person={"firstName":"dania1","lastName":"Scissorhands","hair":{"type":"wavy","color":"brown"},"favoriteFoods":["pizza","cupcakes","children"],"married":false,"kids":0};
             validation.readFile(file)
            .then(data => expect(data).toBeDefined())
            .then(data => expect(data.firstName).toBe(person.firstName))
            .catch(error => expect(error).not.toBeDefined())    
        })

    })
})


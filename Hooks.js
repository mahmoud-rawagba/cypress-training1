describe('Mocha Hooks',function(){
    before('execute before all tests',function(){
        console.log('execute before all tests');
    });
    beforeEach('execute before each tests',function(){
        console.log('execute before each tests');
    });  
    after('execute after all tests',function(){
        console.log('execute after all tests');
    }); 
    afterEach('execute after each tests',function(){
        console.log('execute after each tests');
    }); 

    it('mocha hookstest',function(){
        console.log('mocha - this is a test for mocha hooks');
    });
})

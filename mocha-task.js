//this program is about shopping at a fruit shop and there is a cart that contains 4 different fruits 



var assert = require('assert');
let fruits  = ["Oranges", "Banana", "Apple", "Strawberry"];
describe('cart - Test', function(){

// check if the cart contains 4 items(it should)
it('4 items in the cart', function(){
    assert.equal(fruits.length,4);
});
//check if the second fruit is banana
it('the second item is banana', function(){
   
    assert.equal(fruits[1],"Banana");
});
//check if its sorted alphabetically
it('array sorted alphabetically', function(){
    
    fruits.sort();

  let expectedArray = ["Apple", "Banana", "Oranges", "Strawberry"];
    assert.equal(JSON.stringify(fruits),JSON.stringify(expectedArray));
    
});

//check if after adding mango the number of fruits will be 5
it('cart contains 5 fruits', function(){
    fruits.push("Mango");
    assert.strictEqual(fruits.length,5);
});
});

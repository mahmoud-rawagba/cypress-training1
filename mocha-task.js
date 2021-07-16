//this program is about shopping at a fruit shop and there is a cart that contains 4 different fruits 



var assert = require('assert');

describe('cart - Test', function(){

// check if the cart contains 4 items(it should)
it('4 items in the cart', function(){
    let fruits  = ["Oranges", "Banana", "Apple", "Strawberry"];
    assert.equal(fruits.length,4);
});
//check if the second fruit is banana
it('the second item is banana', function(){
    let fruits  = ["Oranges", "Banana", "Apple", "Strawberry"];
    assert.equal(fruits[1],"Banana");
});
//check if its sorted alphabetically
it('array sorted alphabetically', function(){
    let fruits  = ["Oranges", "Banana", "Apple", "Strawberry"];
    fruits.sort();
    /*
    let x= fruits.length-1;
    let i=0;
    for (i ;i<fruits.length-1;i++){
        if (fruits[i].localeCompare(fruits[i+1])<0){
          x-1
        }
    }
    */
  let expectedArray = ["Apple", "Banana", "Oranges", "Strawberry"];
  //assert.equal(fruits,expectedArray);
    assert.equal(JSON.stringify(fruits),JSON.stringify(expectedArray));
    
});

//check if after adding mango the number of fruits will be 5
it('cart contains 5 fruits', function(){
    let fruits  = ["Oranges", "Banana", "Apple", "Strawberry"];
    fruits.push("Mango");
    assert.strictEqual(fruits.length,5);
});
});

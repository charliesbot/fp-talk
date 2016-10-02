/*
 -- Higher Order Functions --
* A function is a first-class citizen of the language
* Functions are values!
* And they can be passed into other functions
* */

var double = function(x) {
  return x * 2;
}

var pizza = double;

console.log(pizza(10));
// 20

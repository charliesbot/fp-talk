var Utils = require('../utils');
const print = Utils.print;

var animals = [
  {name: 'Fido', species: 'dog'},
  {name: 'Epona', species: 'horse'},
  {name: 'Ursula', species: 'cat'},
  {name: 'Beethoven', species: 'dog'},
  {name: 'Alfred', species: 'fish'},
];

// OLD WAY
/*let dogs = [];
 for(let i = 0; i < animals.length; i++){
 if(animals[i].species === 'dog'){
 dogs.push(animals[i]);
 }
 }*/

const dogs = animals.filter( x => x.species === 'dog' );
print(dogs);


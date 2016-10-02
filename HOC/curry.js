var _ = require('lodash');
var Utils = require('../utils');
const print = Utils.print;

var animals = [
  {name: 'Fido', species: 'dog'},
  {name: 'Epona', species: 'horse'},
  {name: 'Ursula', species: 'cat'},
  {name: 'Beethoven', species: 'dog'},
  {name: 'Alfred', species: 'fish'},
];

/*
* const add = (x) => (y) => x + y;
add(5)(10);
 // Or
add(5, 10);
*/

const isSpecies =
  _.curry((species, x) => species === x.species);

const isDog = isSpecies('dog');
const isCat = isSpecies('cat');

const dogs = animals.filter(isDog);
const cats = animals.filter(isCat);

print(dogs);
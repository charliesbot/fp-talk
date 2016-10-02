var Utils = require('../utils');
const print = Utils.print;

var animals = [
  {name: 'Fido', species: 'dog'},
  {name: 'Epona', species: 'horse'},
  {name: 'Ursula', species: 'cat'},
  {name: 'Beethoven', species: 'dog'},
  {name: 'Alfred', species: 'fish'},
];

const isDog = x => x.species === "dog";
const isCat = x => x.species === "cat";

const dogs = animals.filter(isDog);
const cats = animals.filter(isCat);

print(dogs);
print(cats);
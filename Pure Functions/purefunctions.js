var Utils = require('../utils');
/*
 - PURE FUNCTIONS -
 * A function that given the same input, will always return the same output
 * Don’t have side effects
 */

var xs = [1 , 2, 3, 4, 5];

// pure
Utils.print(xs.slice(0, 3)); // -> [1, 2, 3]
Utils.print(xs.slice(0, 3)); // -> [1, 2, 3]
Utils.print(xs.slice(0, 3)); // -> [1, 2, 3]

//impure
Utils.print(xs.splice(0, 3)); // -> [1, 2, 3]
Utils.print(xs.splice(0, 3)); // -> [4, 5]
Utils.print(xs.splice(0, 3)); // -> []
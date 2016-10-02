var _ = require('lodash');
var Utils = require('../utils');

const toUpperCase = x => x.toUpperCase();
const exclaim = x => `${x}!`;

// flow is the compose function from lodash
const shout = _.flow(exclaim, toUpperCase);

Utils.print(shout('hello world'));
// -> HELLO WORLD!
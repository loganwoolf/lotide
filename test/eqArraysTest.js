const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

// console.log('--Test with boolean--');
// console.log('true ?',eqArrays([1, 2, 3], [1, 2, 3])); // => true
// console.log('false ?',eqArrays([1, 2, 3], [3, 2, 1])); // => false

// console.log('\n--Test with assertEqual--');
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
// assertEqual(eqArrays([1, 2, 3], [1, 2]), false); // => false
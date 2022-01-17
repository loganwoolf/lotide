const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1,2,3], [1,2,3]); // expect true
assertArraysEqual([1,2,3], [1,2,4]); // expect false

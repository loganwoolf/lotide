const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

console.log("--First Test--");
assertArraysEqual(
  middle([1,2,3,4,5,6]),
  [3,4]
);
console.log("\n--Second Test--");
assertArraysEqual(
  middle([1,2,3,4,5,6,7]),
  [4]
);
console.log("\n--Third Test--");
assertArraysEqual(
  middle([1,2,3,4,5,6,7,8,9]),
  [5]
);

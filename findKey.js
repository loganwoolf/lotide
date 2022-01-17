/* const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`👌 Assertion Passed 👌: ${actual} === ${expected}`)
    : console.log(`💥 Assertion Failed 💥: ${actual} !== ${expected}`);
}; */

// takes in an object and a callback
// returns first key

const findKey = function(obj, callback) {
  for (let key in obj) {
    console.log(obj[key]);
    console.log(callback(obj[key]));
    if (callback(obj[key])) return key;
  }
};

module.exports = findKey;

/* //Test Code
const firstReturn = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"
assertEqual(firstReturn, 'noma');

const secondReturn  = findKey(
  {
    Logan: 37,
    Roux: 2,
    Melissa: 31,
  },
  x => x < 35
);
assertEqual(secondReturn, "Roux"); */
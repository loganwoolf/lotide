const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`👌 Assertion Passed 👌: ${actual} === ${expected}`)
    : console.log(`💥 Assertion Failed 💥: ${actual} !== ${expected}`);
};

const findKeyByValue = function(inputObject, searchValue) {
  for (let key in inputObject) {
    if (inputObject[key] === searchValue) return key;
  }
};

// testing
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(
  findKeyByValue(bestTVShowsByGenre, "The Wire"),
  "drama"
);
assertEqual(
  findKeyByValue(bestTVShowsByGenre, "That 70's show"),
  undefined
);
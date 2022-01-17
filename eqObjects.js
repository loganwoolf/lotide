const eqArrays = require('./eqArrays');
/* const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`👌 Assertion Passed 👌: ${actual} === ${expected}`)
    : console.log(`💥 Assertion Failed 💥: ${actual} !== ${expected}`);
};
const eqArrays = (firstArr, secondArr) => {
  if (firstArr.length !== secondArr.length) return false;
  for (let i in firstArr) {
    if (firstArr[i] !== secondArr[i]) return false;
  }
  return true;
}; */

// takes in two objects and returns whether they are congruent
const eqObjects = function(mainObj, diffObj) {
  if (Object.keys(mainObj).length !== Object.keys(diffObj).length) return false;
  for (let key in mainObj) {
    if (!diffObj[key]) return false;
    if (Array.isArray(mainObj[key])) {
      if (Array.isArray(diffObj[key])) {
        if (!eqArrays(mainObj[key], diffObj[key])) {
          return false;
        }
      }
    } else {
      if (diffObj[key] !== mainObj[key]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;

/* Test Code
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(
  eqObjects(cd, dc),
  true
);
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(
  eqObjects(cd, cd2),
  false
);
 */


/* Strings as values tests
  firstTestObj = {
  lName: "Woolf",
  fName: "Logan",
}
secondTestObj = {
  fName: "Logan",
  lName: "Woolf",
}
thirdTestObj = {
  fName: "Roux",
  lName: "Woolf",
}
fourthTestObj = {
  fName: "Roux",
  mName: "Vonn",
  lName: "Woolf"
}

assertEqual(
  eqObjects(firstTestObj, secondTestObj), true
)
assertEqual(
  eqObjects(firstTestObj, thirdTestObj), false
)
assertEqual(
  eqObjects(thirdTestObj, fourthTestObj), false
) */

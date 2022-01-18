const eqArrays = require('./eqArrays');

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

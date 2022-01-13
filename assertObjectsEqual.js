const eqArrays = (firstArr, secondArr) => {
  if (firstArr.length !== secondArr.length) return false;
  for (let i in firstArr) {
    if (firstArr[i] !== secondArr[i]) return false;
  }
  return true;
};

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

const assertObjectsEqual = function(mainObj, diffObj) {
  const inspect = require('util').inspect;
  return eqObjects(mainObj, diffObj)
    ? console.log(`👌 Assertion Passed 👌: ${inspect(mainObj)} === ${inspect(diffObj)}`)
    : console.log(`💥 Assertion Failed 💥: ${inspect(mainObj)} !== ${inspect(diffObj)}`);
};


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);
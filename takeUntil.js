
/* const eqArrays = (firstArr, secondArr) => {
  if (firstArr.length !== secondArr.length) return false;
  for (let i in firstArr) {
    if (firstArr[i] !== secondArr[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(firstArr, secondArr) {
  eqArrays(firstArr, secondArr)
    ? console.log(`👌 Assertion Passed 👌: ${firstArr} === ${secondArr}`)
    : console.log(`💥 Assertion Failed 💥: ${firstArr} !== ${secondArr}`);
}; */

// take until
// returns an array from the beginning until a
// callback returns a truthy value.

const takeUntil = function(array, callback) {
  const outputArr = [];
  for (let item of array) {
    if (callback(item)) return outputArr;
    outputArr.push(item);
  }
  return outputArr;
};

module.exports = takeUntil;

/* const firstData = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// take until negative is encountered
const firstResults = takeUntil(firstData, x => x < 0);
assertArraysEqual(firstResults, [1,2,5,7,2]);

console.log('---');

const secondData = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// take until comma is encountered
const secondResults = takeUntil(secondData, x => x === ',');
assertArraysEqual(
  secondResults,
  ["I've", "been", "to", "Hollywood"]
);

console.log('---');

const thirdData = [2,4,6,8,9,10,12];
// take until odd is encountered
const thirdResults = takeUntil(thirdData, x => x % 2);
assertArraysEqual(
  thirdResults,
  [2,4,6,8]
);

console.log('---');

const fourthData = [1, 2, 5, 7, 2, 11, 2, 4, 5];
// take until negative is encountered
const fourthResults = takeUntil(fourthData, x => x < 0);
assertArraysEqual(fourthResults, [1,2,5,7,2,11,2,4,5]);
 */
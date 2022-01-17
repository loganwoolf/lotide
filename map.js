
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

const map = function(inputArray, callbackFn) {
  const results = [];
  for (let item of inputArray) {
    results.push(callbackFn(item));
  }
  
  return results;
};

module.exports = map;

/* // Test Code
const words = ["ground", "control", "to", "major", "tom"];
const nums = [1,2,3,4,5];


const firstResults = map(words, word => word[0]);
assertArraysEqual(firstResults, ["g","c","t","m","t"]);

const secondResults = map(nums, num => num * 10);
assertArraysEqual(secondResults, [10,20,30,40,50]);

const thirdResults = map(nums, num => num + 1);
assertArraysEqual(thirdResults, [2,3,4,5,6]); */

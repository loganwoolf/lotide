const eqArrays = (firstArr, secondArr) => {
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
};

const letterPositions = function(sentence) {
  sentence = sentence.toLowerCase();
  const results = {};
  for (let i in sentence) {
    if (sentence[i] === ' ') continue;
    results[sentence[i]]
      ? results[sentence[i]].push(+i)
      : results[sentence[i]] = [+i];
  }
  return results;
};

// console.log(letterPositions('hello')['h'])
const testString = 'hello sirs';

assertArraysEqual(
  letterPositions(testString).h,
  [0]
);
assertArraysEqual(
  letterPositions(testString).l,
  [2, 3]
);
assertArraysEqual(
  letterPositions(testString).s,
  [6, 9]
);
console.log(letterPositions(testString));
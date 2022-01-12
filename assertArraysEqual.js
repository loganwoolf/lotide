const eqArrays = (firstArr, secondArr) => {
  if (firstArr.length !== secondArr.length) return false;
  for (let i in firstArr) {
    if (firstArr[i] !== secondArr[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(firstArr, secondArr, bool) {
  let status = eqArrays(firstArr, secondArr);
  return status === bool ? true : false;
};

console.log(
  assertArraysEqual([1,2,3], [1,2,3], true) // expect true
);
console.log(
  assertArraysEqual([1,2,3], [1,2,3], false) // expect false
);
console.log(
  assertArraysEqual([1,2,3], [1,2,4], true) // expect false
);
console.log(
  assertArraysEqual([1,2,3], [1,2,4], false) // expect true
);
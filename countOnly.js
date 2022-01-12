const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`👌 Assertion Passed 👌: ${actual} === ${expected}`)
    : console.log(`💥 Assertion Failed 💥: ${actual} !== ${expected}`);
};


const countOnly = function(allItems, itemsToCount) {
  const outputObj = {};
  for (let pick in itemsToCount) {
    if (itemsToCount[pick]) {
      for (let item of allItems) {
        if (pick === item) {
          outputObj[pick]
            ? outputObj[pick]++
            : outputObj[pick] = 1;
        }
      }
    }
  }
  return outputObj;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Logan",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
  "Logan",
  "Logan",
  "Logan"
];

const result1 = countOnly(firstNames, {"Logan": true, "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
assertEqual(result1["Logan"], 4);
console.log(result1);
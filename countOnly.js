
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

module.exports = countOnly;

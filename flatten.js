
const flatten = (arr) => {
  const outputArr = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      for (let subItem of item) {
        outputArr.push(subItem);
      }
    } else {
      outputArr.push(item);
    }
  }
  return outputArr;
};

module.exports = flatten;

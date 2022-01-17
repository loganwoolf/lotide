
// return [] for 2 or fewer items

// odd number of items, return middle Math.ceil(arr.length / 2)

// even number, return middle two arr.length/2 arr.length/2 + 1

const middle = (arr) => {
  let outputArr = [];
  if (arr.length <= 2) return outputArr;
  const position = Math.floor(arr.length / 2);
  // for odd lengths
  if (arr.length % 2 === 1) {
    const value = arr.slice(position, position + 1);
    outputArr = value;
  }
  // for even lengths
  if (arr.length % 2 === 0) {
    const value = arr.slice(position - 1, position + 1);
    outputArr = value;
  }

  return outputArr;
};

module.exports = middle;
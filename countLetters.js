const assertEqual = function(actual, expected) {
  actual === expected
    ? console.log(`👌 Assertion Passed 👌: ${actual} === ${expected}`)
    : console.log(`💥 Assertion Failed 💥: ${actual} !== ${expected}`);
};

// take in a sentence as a string

// return a count of each of the letters in the sentence

// send all letters to lowercase

const countLetters = function(str) {
  str = str.toLowerCase();
  const outputObj = {};
  for (let letter of str) {
    if (letter === ' ') continue;
    !outputObj[letter]
      ? outputObj[letter] = 1
      : outputObj[letter]++;
  }
  return outputObj;
};

assertEqual(countLetters("Hello sir")['h'], 1);
assertEqual(countLetters("Hello")['l'], 2);
assertEqual(countLetters("Misinterpreted")['i'], 2);
console.log(
  countLetters("good evenIng")
);
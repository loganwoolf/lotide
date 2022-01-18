
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

module.exports = letterPositions;

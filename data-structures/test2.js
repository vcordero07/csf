var pattern = /\w+/g,
  string = "I I am am am yes yes.",
  matchedWords = string.match(pattern);

var counts = matchedWords.reduce(function(stats, word) {
  if (stats.hasOwnProperty(word)) {
    stats[word] = stats[word] + 1;
  } else {
    stats[word] = 1;
  }

  return stats;
}, {});

console.log(counts);

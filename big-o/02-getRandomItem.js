//constant-runtime-example

function getRandomItem(array) {
  let sum = 0,
    ticks = 0;
  //get a random number and access that element in the array
  const item = array[Math.floor(Math.random() * array.length)];
  ticks++;

  return {
    result: item,
    ticks: ticks
  };
}

function getRunTimeOperations(fn, input) {
  const { ticks, result } = fn(input);
  console.log(
    `With input of size ${input.length}, ${fn.name} ` +
      `clocked ${ticks} ticks to generate result of ${result}.`
  );
}

getRunTimeOperations(getRandomItem, [1, 2, 3]);
getRunTimeOperations(getRandomItem, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
getRunTimeOperations(getRandomItem, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
getRunTimeOperations(getRandomItem, [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59,
  60,
  61,
  62,
  63,
  64,
  65,
  66,
  67,
  68,
  69,
  70,
  71,
  72,
  73,
  74,
  75,
  76,
  77,
  78,
  79,
  80,
  81,
  82,
  83,
  84,
  85,
  86,
  87,
  88,
  89,
  90,
  91,
  92,
  93,
  94,
  95,
  96,
  97,
  98,
  99,
  100
]);

//---output---
// With input of size 3, getRandomItem clocked 1 ticks to generate result of 1.
// With input of size 10, getRandomItem clocked 1 ticks to generate result of 10.
// With input of size 10, getRandomItem clocked 1 ticks to generate result of 9.
// With input of size 100, getRandomItem clocked 1 ticks to generate result of 41.

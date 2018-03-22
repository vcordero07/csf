//has-duplicates-polynomial-demo
function hasDuplicates(array) {
  let ticks = 0,
    result = false;
  for (let i = 0; i < array.length; i++) {
    ticks++;
    for (let j = 0; j < array.length; j++) {
      ticks++;
      if (array[i] == array[j] && i != j) {
        ticks++;
        result = true;
      }
    }
  }
  return {
    result: result,
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

getRunTimeOperations(hasDuplicates, [1, 2, 2]);
getRunTimeOperations(hasDuplicates, [1, 2, 3, 4, 5, 6, 7, 8, 9, 9]);
getRunTimeOperations(hasDuplicates, [
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
  99
]);

//---output ---
// With input of size 3, hasDuplicates clocked 14 ticks to generate result of true.
// With input of size 10, hasDuplicates clocked 112 ticks to generate result of true.
// With input of size 100, hasDuplicates clocked 10102 ticks to generate result of true.

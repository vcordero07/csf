//Even or odd: isEven has constant run time complexity (O(1))
function isEven(value) {
  if (value % 2 == 0) {
    return true;
  } else return false;
}

//Are you here?: areYouHere has polynomial run time complexity (O(n^2))
function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}

//Doubler: doubleArrayValues has linear run time complexity (O(n))
function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

//Naive Search: naiveSearch has linear run time complexity (O(n))
function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}

//Creating pairs: createPairs has polynomial run time complexity (O(n^2))
function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ", " + arr[j]);
    }
  }
}

//Computing fibonaccis: generateFib has linear run time complexity (O(n))
function generateFib(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      result.push(0);
    } else if (i == 2) {
      // ...and if it's the second item
      // append 1
      result.push(1);
    } else {
      // otherwise, sum the two previous result items, and append that value to results.
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  // once the for loop finishes
  // we return `result`.
  return result;
}

//An Efficient Search: efficientSearch has logarithmic run time complexity (O(log n))
function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    } else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }
  return -1;
}

//Random element: findRandomElement has constant run time complexity (O(1)).
function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Is it prime? isPrime has linear run time complexity (O(n))
function isPrime(n) {
  // if n is less than 2 or a decimal, it's not prime
  if (n < 2 || n % 1 != 0) {
    return false;
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  for (let i = 2; i < n; ++i) {
    if (n % i == 0) return false;
  }
  return true;
}

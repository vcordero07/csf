// /Finding the maximum value in an array
//1st attempt
function max(array) {
  for (const itemA of array) {
    // Assume that it is the maximum value until we know otherwise
    let isMax = true;

    for (const itemB of array) {
      if (itemA < itemB) {
        // There is a value greater than itemA, so it is not the
        // maximum
        isMax = false;
      }
    }

    if (isMax) {
      return itemA;
    }
  }
}

//2nd attempt
function max(array) {
  for (const itemA of array) {
    // Assume that it is the maximum value until we know otherwise
    let isMax = true;

    for (const itemB of array) {
      if (itemA < itemB) {
        // There is a value greater than itemA, so it is not the
        // maximum
        isMax = false;
        // Don't keep checking the value
        break;
      }
    }

    if (isMax) {
      return itemA;
    }
  }
}

//3rd attempt
function max(array) {
  if (array.length === 0) {
    return null;
  }

  let currentMax = array[0];
  for (let i = 1; i < array.length; i++) {
    const item = array[i];
    if (item > currentMax) {
      currentMax = item;
    }
  }
  return currentMax;
}

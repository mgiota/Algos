const doSearch = (arr, value) => {
  let min = 0;
  let max = arr.length - 1;
  let guess;

  while(max >= min) {
    guess = Math.floor((min + max) / 2);
    if (arr[guess] === value) {
      return guess;
    } else if (arr[guess] > value) {
      max = guess - 1;
    } else {
      min = guess + 1;
    }
  }

  return -1;
}

const doSearchRecursive = (arr, value, min, max) => {
  if (min > max) {
    return -1;
  }
  let middle = min + Math.floor((max - min) / 2);
  //let middle = Math.floor((min + max) / 2);
  if (arr[middle] === value) {
    return middle;
  } else if (arr[middle] > value) {
    return doSearchRecursive(arr, value, min, middle - 1);
  } else {
    return doSearchRecursive(arr, value, middle + 1, max);
  }
}

module.exports = {
  doSearch,
  doSearchRecursive
};

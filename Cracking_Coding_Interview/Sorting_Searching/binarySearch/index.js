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

/**
* Write a method to replace all spaces in a string with %20
*
*/

const urlify = (str, length) => {
  let arr = str.split('');
  let numOfSpaces = 0;
  for (let i = 0; i < length; i++) {
    if (arr[i] === ' ') {
      numOfSpaces++;
    }
  }
  let newLength = length + 2 * numOfSpaces;
  for (let i = length - 1; i > 0; i--) {
    if (arr[i] === ' ') {
      arr[newLength - 1] = '0';
      arr[newLength - 2] = '2';
      arr[newLength - 3] = '%';
      newLength = newLength - 3;
    } else {
      arr[newLength - 1] = arr[i];
      newLength--;
    }
  }

  return arr.join('');
}

const str = "This is just a test     ";
console.log(urlify(str, 19));

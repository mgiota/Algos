/**
* Write a method to replace all spaces in a string with %20
*
*/
const urlify = (str, length) => {
  let res = [];
  for (let i = 0; i < length; i++) {
    if (str[i] === ' ') {
      res.push("%20");
    } else {
      res.push(str[i]);
    }
  }
  console.log(res.join(''))
  return res.join('');
}

const urlify2 = (str, length) => {
  let arr = str.split('');
  let len = arr.length;
  let numOfSpaces = 0;
  let newLength = 0;
  for (let i = 0; i < length; i++) {
    if (arr[i] === ' ') {
      numOfSpaces++;
    }
  }

  newLength = length + 2 * numOfSpaces;
  for (let i = length - 1; i > 0; i--) {
    if (arr[i] === ' ') {
      arr[newLength - 1] = '0';
      arr[newLength - 2] = '2';
      arr[newLength - 3] = '%';
      newLength = newLength - 3;
    } else {
      arr[newLength - 1] = arr[i];
      newLength = newLength - 1;
    }
  }
  console.log(arr.join(''));
  return arr.join('');
}

module.exports = {
  urlify,
  urlify2
}

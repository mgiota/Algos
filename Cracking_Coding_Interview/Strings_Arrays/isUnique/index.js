/*
* Implement an algorithm to determine if a string has all unique characters
*
*/
function isUnique(str) {
  let strOccurences = {};
  let result = true;

  for (let ch of str) {
    if (!(ch in strOccurences)) {
      strOccurences[ch] = 1;
    } else {
      strOccurences[ch]++;
    }
  }

  for (var ch in strOccurences) {
    if (strOccurences[ch] > 1) {
      result = false;
      break;
    }
  }

  return result;
}

function isUniqueNoDataStrucure(str) {
  const len = str.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

module.exports = {
  isUnique,
  isUniqueNoDataStrucure
}

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

function isUniqueBooleanFlags(str) {
  var char_set = new Array(128);
  for (let ch of str) {
    const chCode = ch.charCodeAt();
    if (char_set[chCode]) {
      return false;
    }
    char_set[chCode] = true;
  }
  return true;
}

function isUniqueBitwise(str) {
  let checker = 0;
  for (let ch of str) {
    const code = ch.charCodeAt();
    if ((checker & (1 << code)) > 0) {
      return false;
    }
    checker |= (1 << code);
  }

  return true;
}

// 0 0 0 0 0 0
// 0 1 0 0 0 0

function isUniqueLast(str) {
  //g i t a g
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] !== str[i + 1]) {
      return false;
    }
  }

  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  return true;
}

function isUniqueLast(str) {
  let map = {};
  for (let ch of str) {
    if (ch in map) {
      return false;
    }
    map[ch] = 1;
  }

  return true;
}

module.exports = {
  isUnique,
  isUniqueNoDataStrucure,
  isUniqueBooleanFlags,
  isUniqueBitwise,
  isUniqueLast
}

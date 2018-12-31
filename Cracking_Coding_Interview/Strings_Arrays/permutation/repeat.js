/**
* 2 strings are permutation of each other if they have
* same number of characters
*/
const permutation = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const sorted1 = str1.split('').sort().join('');
  const sorted2 = str2.split('').sort().join('');

  return sorted1 === sorted2;
}

console.log(permutation('amma', 'mama'));
console.log(permutation('amma', 'mamaa'));

const _buildCharCounts = str => {
  let charCount = {};
  for (let ch of str) {
    if (charCount[ch]) {
      charCount[ch]++;
    } else {
      charCount[ch] = 1;
    }
  }

  return charCount;
}

const permutation2 = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  const str1Count = _buildCharCounts(str1);

  for (let ch of str2) {
    if (!(ch in str1Count) || str1Count[ch] <= 0) {
      return false;
    }
    str1Count[ch]--;
  }

  return true;
}

console.log(permutation2('amma', 'mama'));
console.log(permutation2('amma', 'mamaa'));

// Test cases
// 1. edessa, edessa
console.log(permutation2('edessa', 'edesss'));

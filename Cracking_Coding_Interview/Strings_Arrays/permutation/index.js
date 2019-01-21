const permutation = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

// we want to treat Dog and God to be permutations of each other
// treat lower and upper letter as being the same
const caseInensitive = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const sorted1 = str1.toLowerCase().split('').sort().join('');
  const sorted2 = str2.toLowerCase().split('').sort().join('');

  return sorted1 === sorted2;
}

// whitespace is insignificant
const whiteSpace = (str1, str2) => {
  str1 = str1.trim();
  str2 = str2.trim();

  if(str1.length !== str2.length) {
    return false;
  }

  const sorted1 = str1.split('').sort().join('');
  const sorted2 = str2.split('').sort().join('');

  return sorted1 === sorted2;
}

const _buildCharCounts = str => {
  let charCounts = {};
  for (let ch of str) {
    if (ch in charCounts) {
      charCounts[ch]++;
    } else {
      charCounts[ch] = 1;
    }
  }

  return charCounts;
}

const permutationCharCounts = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const str1CharCounts = _buildCharCounts(str1);
  const str2CharCounts = _buildCharCounts(str2);

  // TODO
  for (let ch in str1CharCounts) {
    if (str1CharCounts[ch] !== str2CharCounts[ch]) {
      return false;
    }
  }

  return true;
}

// console.log(permutationCharCounts('edessa', 'eddesa'));
// console.log(permutationCharCounts('edessa', 'ebessa'));

const permutationComparison = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const str1CharCounts = _buildCharCounts(str1);
  for (let ch of str2) {
    // (str1CharCounts[ch] === undefined)
    if (!(ch in str1CharCounts) || str1CharCounts[ch] <= 0) {
      return false;
    }
    str1CharCounts[ch]--;
  }

  return true;
}

const _buildCharSet = str => {
  let charSet = new Array(128).fill(0);
  for (let ch of str) {
    const code = ch.charCodeAt();
    charSet[code]++;
  }

  return charSet;
}

const solution4 = (str1, str2) => {
  str1 = str1.trim().toLowerCase();
  str2 = str2.trim().toLowerCase();

  if (str1.length !== str2.length) {
    return false;
  }

  let charSet = _buildCharSet(str1);
  console.log(charSet)

  for (let ch of str2) {
    const code = ch.charCodeAt();
    charSet[code]--;

    if (charSet[code] < 0) {
      return false;
    }
  }

  return true;
}

console.log(solution4('edessa', 'ebessa'));

// sseda -> s:2
// sssed -> s:3

module.exports = {
  permutation,
  permutationCharCounts,
  permutationComparison
}

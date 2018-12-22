const permutation = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
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

const permutationComparison = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const str1CharCounts = _buildCharCounts(str1);
  for (let ch of str2) {
    if (!(ch in str1CharCounts) || str1CharCounts[ch] <= 0) {
      return false;
    }
    str1CharCounts[ch]--;
  }

  return true;
}

module.exports = {
  permutation,
  permutationCharCounts,
  permutationComparison
}

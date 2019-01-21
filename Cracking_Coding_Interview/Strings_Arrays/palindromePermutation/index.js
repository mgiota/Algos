/**
* Given a string write a function to check if it is
* a permutation of a palindrome
* palindrom is a string that reads the same from the beginning and the end
* we need an even number of almost all characters
* to be a permutation of a palindrome, a string can have no more
* than one character that is odd
*/
const palindromePermutation = str => {
  str = _normalize(str);
  let charCounts = {};
  for (let ch of str) {
    if (ch in charCounts) {
      charCounts[ch]++;
    } else {
      charCounts[ch] = 1;
    }
  }
  let oddCount = 0;
  for (let ch in charCounts) {
    if (charCounts[ch] % 2 === 1) {
      oddCount++;
    }
    if (oddCount > 1) {
      return false;
    }
  }

  return true;
}

const palindromePermutationOptimize = str => {
  let countOdd = 0;
  const charMap = new Array(26);
  charMap.fill(0);

  for(let ch of str) {
    const index = _getCharCode(ch);
    if (index !== -1) {
      charMap[index]++;
      if (charMap[index] % 2 === 1) {
        countOdd++;
      } else {
        countOdd--;
      }
    }
  }

  return countOdd <= 1;
}
/**
* This is case insensitive
*/
const _getCharCode = ch => {
  const a = "a".charCodeAt();
  const z = "z".charCodeAt();
  const A = "A".charCodeAt();
  const Z = "Z".charCodeAt();

  const val = ch.charCodeAt();
  if (val >= a && val <= z) {
    return val - a;
  } else if (val >= A && val <= Z) {
    return val - A;
  }
  return -1;
}

const _buildCounts = str => {
  let charCounts = new Array(26);
  charCounts.fill(0);
  for (let ch of str) {
    const code = _getCharCode(ch);
    if (code !== -1) {
      charCounts[code]++;
    }
  }
  return charCounts;
}

// remove non-letter characters
const _normalize = str => {
  str = str.toLowerCase();
  let letters = [];
  for (let ch of str) {
    const code = ch.charCodeAt();
    const diff = code - 'a'.charCodeAt();
    if (diff >= 0 && diff <= 25) {
      letters.push(ch);
    }
  }
  return letters.join('');
}

function _getCharCode2(ch) {
  const a = "a".charCodeAt();
  const z = "z".charCodeAt();
  const val = ch.charCodeAt();

  const diff = val - a;
  if (diff >= 0 && diff <= 25) {
    return diff;
  } else {
    return -1;
  }
}

/**
* We don't need to know the charCounts
* We just need to know if the count is even or not
*/
const palindromePermutationNoCounts = str => {
  const bitVector = _createBitVector(str);
  return ((bitVector === 0) || _checkExactlyOneBitSet(bitVector));
}

const _checkExactlyOneBitSet = bitVector => {
  return (bitVector & (bitVector - 1)) === 0;
}

// it's like a switch
const _createBitVector = str => {
  let bitVector = 0;
  for (let ch of str) {
    const index = _getCharCode(ch);
    const mask = 1 << index;
    if ((bitVector && mask) === 0){
      // if it was off, we need to make it on
      // mask = 1, bitVector = 0
      // we need an or operation to make it on
      // in order to make something 1, if we know that mask is 1, we need an or
      // the rest bits need to be 0 to not change
      bitVector |= mask;
    } else {
      // it was on, we need to make it off
      // mask = 1, bitVector = 1
      // neither & or | could change bitVector to 0
      // let's negate the mask
      // in order to keep the rest bits, I need to make an & with 0
      // in order to change something to 0, if one is 1, we need an and operation
      bitVector &= ~mask;
    }
  }
  return bitVector;
}

const palindromPermutationWithMapping = str => {
  const charCounts = _buildCounts(str);
  console.log(charCounts)
  let oddFound = false;
  charCounts.forEach(count => {
    if (count % 2 === 1) {
      if (oddFound) {
        return false;
      }
      oddFound = true;
    }
  });
  return true;
}
module.exports = {
  palindromePermutation,
  palindromPermutationWithMapping,
  palindromePermutationNoCounts,
  palindromePermutationOptimize
}

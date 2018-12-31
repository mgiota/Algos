/**
* Given a string write a function to check if it is
* a permutation of a palindrome
* palindrom is a string that reads the same from the beginning and the end
* we need an even number of almost all characters
* to be a permutation of a palindrome, a string can have no more
* than one character that is odd
*/

// amma -> palindrome: reads the same from the beginning and the end
// odd => num % 2 = 1
const palindromePermutation = str => {
  const charCount = {};
  let oddCount = 0;
  for (let ch of str) {
    if (charCount[ch]) {
      charCount[ch]++;
    } else {
      charCount = 1;
    }
  }

  // for (let count in charCount) {
  //   if (count % 2 === 1) {
  //     if (oddCount > 1) {
  //       return false;
  //     }
  //     oddCount++;
  //   }
  // }

  for (let count in charCount) {
    if (count % 2 === 1) {
      oddCount++;
    }
    if (oddCount > 0) {
      return false;
    }
  }
  return true;
}

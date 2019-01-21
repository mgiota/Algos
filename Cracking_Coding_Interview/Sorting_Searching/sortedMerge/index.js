//backwards
const sortedMerge = (arr1, arr2, len1, len2) => {
  let index1 = len1 - 1; // index of last element in array1
  let index2 = len2 - 1; // index of last element in array2
  let indexMerged = len1 + len2 - 1; //end of merged array

  while (index2 >= 0) { // TODO think about correct termination condition
    if (index1 >= 0 && arr1[index1] > arr2[index2]) {
      arr1[indexMerged] = arr1[index1];
      index1--;
    } else {
      arr1[indexMerged] = arr2[index2];
      index2--;
    }
    indexMerged--;
  }

  return arr1;
};

module.exports = {
  sortedMerge
};

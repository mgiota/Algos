const oneEditAway = (str1, str2) => {
  if (str1.length === str2.length) {
    return _oneEditReplace(str1, str2);
  } else if ((str1.length + 1) === str2.length) { // add
    return _oneEditInsert(str1, str2);
  } else if ((str1.length - 1) === str2.length) { // delete
    return _oneEditInsert(str2, str1);
  }

  return false;
}

const _oneEditInsert = (str1, str2) => {
  let index1 = 0;
  let index2 = 0;
  while (index2 < str2.length) {
    if (str1[index1] !== str2[index2]) {
      if (index1 !== index2) {
        return false;
      }
      index2++;
     } else {
      index1++;
      index2++;
    }
  }

  return true;
}

const _oneEditReplace = (str1, str2) => {
  let foundDifference = false;
  for (let ch of str1) {
    if (str1[ch] !== str2[ch])  {
      if (foundDifference) {
        return false;
      }
    }

    foundDifference = true;
  }

  return true;
}

module.exports = {
  oneEditAway
}

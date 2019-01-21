// anagrams: 2 words that have same characters but in different order
const groupAnagrams = arr => {
  let groupedAnagrams = {};
  arr.forEach(word => {
    let sorted = word.split('').slice(0).sort().join('');
    if (sorted in groupedAnagrams) {
      groupedAnagrams[sorted].push(word);
    } else {
      groupedAnagrams[sorted] = [word];
    }
  });

  let sortedResult = [];
  for (let sorted in groupedAnagrams) {
    groupedAnagrams[sorted].forEach(word => sortedResult.push(word));
  }
  console.log(sortedResult);
  return sortedResult;
};

module.exports = {
  groupAnagrams
}

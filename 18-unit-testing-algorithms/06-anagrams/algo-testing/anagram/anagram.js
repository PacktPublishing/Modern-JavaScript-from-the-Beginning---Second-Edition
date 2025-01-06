function anagram(str1, str2) {
  // Clean the string of spaces, numbers, & special characters
  // Return false when both words are the same 
  const pattern = /^[^A-Za-z]+/g;
  const cleanStr1 = str1.replaceAll(pattern, "").toLowerCase();
  const cleanStr2 = str2.replaceAll(pattern, "").toLowerCase();
  if (cleanStr1 === cleanStr2) { return false; }
  
  const aCharMap = buildCharMap(str1);
  const bCharMap = buildCharMap(str2);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

module.exports = anagram;

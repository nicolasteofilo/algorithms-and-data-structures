/*
    Question: Given two strings, write a function to determine if the second string is an anagram of the first.
    An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed 
    from iceman.
*/

/**
 * @param {string} s
 * @param {string} t
 */
function validAnagram(s, t) {
  if (s.length !== t.length) return false;
  if (s.length === 0 && t.length === 0) return true;

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (const val of s) frequencyCounter1[val] = frequencyCounter1[val] + 1 || 1;
  for (const val of t) frequencyCounter2[val] = frequencyCounter2[val] + 1 || 1;

  for (const key in frequencyCounter1) {
    if (!frequencyCounter2[key]) return false;
    if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
  }

  return true;
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true

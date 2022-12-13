/*
 Question: Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
 */

/**
 * @param {string} s
 * @return {number}
 */
function findLongestSubstring(s) {
  if(s.length === 0) return 0;

  let map = {};
  let maxLen = 0;
  let start = 0;

  for(let end = 0; end < s.length; end++) {
      let lastChar = s[end];
      if(lastChar in map) {
        start = Math.max(start, map[lastChar] + 1)
      }
    map[lastChar] = end;
    maxLen = Math.max(maxLen, end - start + 1)
  }

  return maxLen
}

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6

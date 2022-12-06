/*
  Question: Write a function called sameFrequency. Given two positive integers, find out if the two numbers
  have the same frequency of digits.

  Your solution MUST have the following complexities:
  Time Complexity: O(N)
 * */

/**
* @param {number} num1
* @param {number} num2
**/
function sameFrequency(num1, num2) {
  const frequencyCouter1 = {};
  const frequencyCouter2 = {};

  const str1 = String(num1);
  const str2 = String(num2);

  for(let i = 0; i < str1.length; i++) {
    frequencyCouter1[str1[i]] = frequencyCouter1[str1[i]] + 1 || 1 
  }
  for(let i = 0; i < str2.length; i++) {
    frequencyCouter2[str2[i]] = frequencyCouter2[str2[i]] + 1 || 1 
  }

  for(const num in frequencyCouter1) {
    if(!frequencyCouter2[num]) return false;
    if(frequencyCouter1[num] !== frequencyCouter2[num]) return false;
  }

  return true;
}

console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22, 222)) // false

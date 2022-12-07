/*
Question: Write a function called isSubsequence which takes in two strings and checks whether
the characters in the first string form a subsequence of the characters in the second string. 
In other words, the function should check whether the characters in the first string appear 
somewhere in the second string, without their order changing.

Questão(PT-BR): Dadas duas strings se t, retorne truese sfor uma subsequência de t, ou falsecaso contrário .

Uma subsequência de uma string é uma nova string formada a partir da string original, excluindo alguns (pode ser nenhum) 
dos caracteres sem perturbar as posições relativas dos caracteres restantes. (isto é, "ace"é uma subsequência de enquanto não é).
"abcde" "aec"

Time Complexity - O(N + M)
Space Complexity - O(1)
* */

/**
* @param {string} s
* @param {string} t 
**/
function isSubsequence(s, t) {
  var i = 0;
  var j = 0;
  if (!str1) return true;

  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)

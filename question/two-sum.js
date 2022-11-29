/*
    Question: Write a function which takes two numbers and returns their sum.

    Input: Two numbers
    Output: One number, which corresponds to the sum of the two input numbers
*/

function twoSum(...params) {
  if (params.length !== 2) {
    return `    ${"\x1b[31m"}Error:${"\x1b[0m"} The entry must contain two numbers`;
  }
  return params[0] + params[1];
}
/**
 *
 * @param {number} base 
 * @param {number} exponent 
 *
 * @return {number}
 */
function powerIterative(base, exponent) {
  if(exponent === 0) return 1;

  let result = base;
  for(let i = exponent; i > 1; i--) {
    result = result * base;
  }
  return result;
}

/**
 *
 * @param {number} base 
 * @param {number} exponent 
 *
 * @return {number}
 */
function power(base, exponent) {
  let result = base;
    
  function helper(base, exponent) {
    if(exponent === 0) return 1;
    result *= base;
    helper(base, exponent-1)
  }

  helper(base, exponent)

  return result;
}

console.log(powerIterative(2,0)) // 1
console.log(powerIterative(2,2)) // 4
console.log(powerIterative(2,4)) // 16
console.log(powerIterative(5, 5)) // 3125

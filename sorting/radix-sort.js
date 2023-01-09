// HELPER METHODS

/**
 * @param {number} num
 * @param {number} place
 */
function getDigit(num, place) {
  const position = String(num)[(String(num).length - 1) - place];
  if (position) return Number(position);
  return 0;
}

/**
 * @param {number} num
 */
function digitCount(num) {
  return Number(String(num).length);
}

/**
 * @param {number[]} nums
 */
function mostDigits(nums) {
  let maxLength = 0;

  nums.forEach((num) => {
    if (digitCount(num) > maxLength) maxLength = digitCount(num);
  })

  return maxLength;
}

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

/**
 * @param {number[]} nums
 */
function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for(let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []); // create array with 10 sub-arrays

    for(let i = 0; i < nums.length; i++) {
      const digit = getDigit(nums[i], k);
      const num = nums[i];
      digitBuckets[digit].push(num)
    }

    let tempArry = []
    for(let j = 0; j < digitBuckets.length; j++) {
      for(let l = 0; l < digitBuckets[j].length; l++) {
        tempArry.push(digitBuckets[j][l])
      }
    }
    nums = tempArry;
  }
  return nums
}

console.log('[23, 345, 5467, 12, 2345, 9852] =>', radixSort([23, 345, 5467, 12, 2345, 9852]))
console.log('[9, 6, 8, 3, 7] =>', radixSort([9, 6, 8, 3, 7]))

/**
 * @param {number[]} nums
 * @param {number} n
 */
function maxSubarraySum(nums, n) {
  let maxSum = 0;
  let tempSum = 0;
  if(nums.length === 0 || n > nums.length) return null;

  for(let i = 0; i < n; i++) {
    maxSum += nums[i]
  }
  tempSum = maxSum;

  for(let i = n; i < nums.length; i++) {
    console.log(i)
    tempSum = tempSum - nums[i - n] + nums[i];
    maxSum = Math.max(maxSum, tempSum)
  }

  return maxSum;
}

console.log(maxSubarraySum([1,2,5,2,8,1,5],2)) // 10
console.log(maxSubarraySum([1,2,5,2,8,1,5],4)) // 17
console.log(maxSubarraySum([4,2,1,6],1)) // 6
console.log(maxSubarraySum([4,2,1,6,2],4)) // 13
console.log(maxSubarraySum([],4)) // null

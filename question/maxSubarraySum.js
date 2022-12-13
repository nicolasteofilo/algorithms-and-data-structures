/**
 * @param {number[]} nums
 * @param {number} k
 */
function maxSubarraySum(nums, k) {
  if(nums.length === 0 || k > nums.length) return null;

  let currentSum = 0;
  let maxSum = 0;

  for(let i = 0; i < k; i++) {
    currentSum += nums[i];
  }
  maxSum = currentSum;

  for(let j = k; j < nums.length; j++) {
    currentSum = currentSum - nums[j - k] + nums[j];
    if(currentSum > maxSum) maxSum = currentSum
  }

  return maxSum
}

console.log(maxSubarraySum([100,200,300,400], 2)) // 700

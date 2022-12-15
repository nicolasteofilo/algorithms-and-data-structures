/**
 * @param {number[]} nums
 *
 * @return {number[]}
 */
function collectOdds(nums) {
  let result = [];

  function helper(nums) {
    if(nums.length === 0) {
      return;
    }

    if(nums[0] % 2 !== 0) {
      result.push(nums[0])
    }

    helper(nums.slice(1))
  }

  helper(nums);

  return result;
}

console.log(collectOdds([1, 3, 6, 4, 9]))

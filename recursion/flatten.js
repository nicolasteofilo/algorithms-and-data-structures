/**
 *
 * @param {number[]} arr 
 * @returns 
 */
function flatten(arr) {
  let flatteneed = [];

  for(let i = 0; i < arr.length; i ++) {
    if (Array.isArray(arr[i])) {
      flatteneed = flatteneed.concat(flatten(arr[i]))
    } else {
      flatteneed.push(arr[i]);
    }
  }

  return flatteneed;
}

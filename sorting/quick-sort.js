function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};

/**
 *
 * @param {number[]} arr
 * @param {number} start
 * @param {number} end
 */
function pivot(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[0];
  let swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  swap(arr, swapIndex, start);
  return swapIndex;
}

let arr = [ 5, 2, 1, 8, 4, 7, 6, 3 ]
console.log(pivot(arr)); // 4

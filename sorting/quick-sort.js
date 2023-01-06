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
  let pivot = arr[start];
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

/**
 * 
 * @param {number[]} arr 
 */
function quickSort(arr, left = 0, right = arr.length - 1) {
  if(left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1) // to the left side
    quickSort(arr, pivotIndex + 1, right) // to the right side
  }

  return arr;
}

let arr = [ 5, 2, 1, 8, 4, 7, 6, 3 ]
let arr2 = [ 5 ]
console.log(quickSort(arr));
console.log(quickSort(arr2));

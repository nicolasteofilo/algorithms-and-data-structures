function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};

/**
 * @param {number[]} arr 
 * @return {number[]}
 */
function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for(let j = i - 1; j >= 0 && currentVal < arr[j]; j--) {
      arr[j + 1] = arr[j]; 
    }
    arr[j+ 1] = currentVal;
  }

  return arr;
}

/**
 * @param {number[]} values
 * @return {number[]}
 */
function insertionSortTwo(values) {
  for (let i = 1; i < values.length; i++) {
    let j = i;

    while (j > 0 && values[j] < values[j - 1]) {
      swap(values, j, j-1)
      j -= 1;
    }
  }
  return values;
}

/*
  Time Complexity: O(n²)
  explain: bacause have a nested loops in the algorithm
*/

console.log('[ 2, 1, 9, 76, 4 ] =>', insertionSortTwo([2, 1, 9, 76, 4]))

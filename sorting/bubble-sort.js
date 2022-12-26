function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};

/**
 * @param {number[]} arr
 * @return {number[]}
*/
function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j + 1]) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j+1);
          noSwaps = false;
        }
      }
    }
    if(noSwaps) break;
  }
  return arr;
};

console.log('[ 6, 4, 15, 10 ] ->', bubbleSort([6,4,15,10])); // [ 4, 6, 10, 15 ]
console.log('[ 8, 1, 2 ] ->', bubbleSort([8,1,2])); // [ 1, 2, 8 ]


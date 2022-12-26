function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
};

/**
 * @param {number[]} arr 
*/
function selectionSort(arr) {
  if(arr.length === 0) return;

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;

    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[lowest]) lowest = j; 
    }

    if(i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

console.log('[7, 5, 1, 8, 3, 0] ->', selectionSort([7, 5, 1, 8, 3, 0]));

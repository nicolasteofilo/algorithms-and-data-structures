/**
 *
 * @param {number[]} arr 
 * @param {number} elem 
 * @return {number}
 */
function binarySearch(arr, elem){
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while(start <= end) {
    if(arr[middle] === elem) { return middle };
    if(elem < arr[middle]) { end = middle - 1 };
    if(elem > arr[middle]) { start = middle + 1 };
    
    middle = Math.floor((start + end) / 2);
  }

  return -1;
}

console.log(binarySearch([1,2,3,4,5],3)) // 2
console.log(binarySearch([1,2,3,4,5],4)) // 3
console.log(binarySearch([20, 30, 40, 35], 50)) // -1

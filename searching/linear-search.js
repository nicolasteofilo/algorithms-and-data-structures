/*
This function accepts an array and a value
Loop throuth the array and check if the current array element is equal to the value
if found, return the index
Else, return -1
*/


/**
 *
 * @param {any[]} arr 
 * @param {any} value 
 */
function linearSearch(arr, value) {
  let index = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === value) {
      index = i;
      return index;
    }
  }

  return -1;
}

/*
 * Time Complexity of Linear Search: O(n)
*/

console.log(linearSearch([5, 6, 7, 9, 58], 7)) // 2
console.log(linearSearch([5, 6, 7, 9, 58], 12)) // -1

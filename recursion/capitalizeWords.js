/**
 * @param {string[]} arr 
 *
 * @return {string[]}
*/
function capitalizedWords(arr) {
  const newArr = [];

  function helper(position) {
    if(position >= arr.length) return;
    newArr.push(arr[position].toUpperCase());
    helper(position + 1);
  }

  helper(0)
  return newArr;
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizedWords(words));

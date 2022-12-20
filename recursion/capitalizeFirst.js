/**
 * @param {string[]} arr
 *
 * @return {string[]}
 */
function capitalizeFirstIterative(arr) {
  const newArray = [];

  for(let i = 0; i < arr.length; i++) {
    const word = arr[i].substring(1);
    const firstCharUpper = arr[i][0].toUpperCase();
    const newWord = firstCharUpper.concat(word);
    newArray.push(newWord);
  }

  return newArray;
}

/**
 * @param {string[]} arr
 *
 * @return {string[]}
 */
function capitalizeFirstRecursive(arr) {
  const newArray = [];

  function helper(position) {
    if(position >= arr.length) return;
    newArray.push(arr[position][0].toUpperCase().concat(arr[position].substring(1)));
    helper(position + 1);
  }

  helper(0);

  return newArray;
}

console.log(capitalizeFirstIterative(['car','taco','banana']))
console.log(capitalizeFirstRecursive(['nicolas', 'andrea', 'emily']))

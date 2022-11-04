function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}

console.log(double([2, 4, 8]));

// The space complexity to this function is O(n), bacause according the number os input grow, the new array grow too
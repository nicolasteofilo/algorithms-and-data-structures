function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// The space complexity is O(1), because we only have two variables that will not increase or decrease according to the input

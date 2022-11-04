// O(1) -> this function is constant because the performance of the function is always the same
function increment(n) {
  return ++num;
}

// O(n) -> time of executation grow up according the number of n, because is any number
function countUp(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

// O(n²) -> is quadratic because it has two nested loops
function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    // O(n) -> grows according to the n
    for (var j = 0; j < n; j++) {
      // O(n) -> grows according to the n
      console.log({ i, j });
    }
  }
}

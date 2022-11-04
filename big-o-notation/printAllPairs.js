function printAllPairs(n) {
  for (var i = 0; i < n; i++) { // O(n) -> grows according to the n
    for (var j = 0; j < n; j++) { // O(n) -> grows according to the n
      console.log({ i, j });
    }
  }
}

// Since two nested loops are O(n²)

printAllPairs(10);

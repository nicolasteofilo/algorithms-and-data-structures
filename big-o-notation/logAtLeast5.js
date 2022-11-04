function logAtLeast5(n) {
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

// O(n) -> bacause the n can be any number

logAtLeast5(20);
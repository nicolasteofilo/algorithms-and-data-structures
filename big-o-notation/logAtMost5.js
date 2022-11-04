function logAtMoast5(n) {
  for (var i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

// O(1) -> bacause the max number in n is 5, thus this function is constant

logAtMoast5(10);

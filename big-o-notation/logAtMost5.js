function logAtMoast5(n) {
  for (var i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}

// O(1) -> bacause the max number in n is 5, thus this function is constant

logAtMoast5(20);

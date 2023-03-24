function hash(key, arrayLen) {
  let total = 0;
  for(let char of key) {
    // map "a" to 1, "b" to 2, etc
    const value = char.charCodeAt(0) - 96;
    total += value;
  }

  return total % arrayLen;
}

console.log(hash("nicolas", 10), hash("andrea", 10))

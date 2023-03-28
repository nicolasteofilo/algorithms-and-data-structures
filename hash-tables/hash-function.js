function hash(key, arrayLen) {
  let total = 0;
  let prime_number = 31;

  for(let i = 0; i < Math.min(key.length, 100); i ++) {
  let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total + prime_number + value) % arrayLen;
  }

  return total;
}

module.exports = { hash }

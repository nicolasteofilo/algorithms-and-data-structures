function fib(num) {
  if(num < 3) return 1;
  return fib(num-1) + fib(num-2);
}

console.log(fib(4)); // 3
console.log(fib(5)); // 5

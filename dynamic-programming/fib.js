function fib(number) {
  if (number <= 2) {
    return 1;
  }

  return fib(number - 1) + fib(number - 2);
}

const before = Date.now();
console.log(fib(40));
const time = Date.now() - before;
console.log(`Took ${time}ms to run`);

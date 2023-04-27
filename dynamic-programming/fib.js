function fib(number) {
  if (number <= 2) {
    return 1;
  }

  return fib(number - 1) + fib(number - 2);
}

/*
Big O of old fibonacci sequence solution using recursive algorithm
O(2^n) => complexity time grows very fast
*/

function fib2(number) {
  const memo = [];
  memo[0] = 1;
  memo[1] = 1;
  memo[2] = 1;

  const recursiveFn = (n, memoization) => {
    if (memoization[n] !== undefined) return memoization[n];
    const res = recursiveFn(n - 1, memoization) + recursiveFn(n - 2, memoization);
    memoization[n] = res;
    return res;
  };

  const result = recursiveFn(number, memo);
  return result;
}

/*
Big O of new fibonacci sequence solution using memoization
O(n)
*/

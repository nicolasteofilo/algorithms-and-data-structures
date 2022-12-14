function factorialInterctive(num) {
  let total = 1;
  for(let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
}

function factorialRecusive(num) {
  if(num === 1) return 1;
  return num * factorialRecusive(num - 1)
}

/*
 Base case(stop place) of recursive function: 
*/

console.log('3 (iteration) --> ', factorialInterctive(3)); // 6
console.log('4 (recursive) --> ', factorialRecusive(4)); // 24

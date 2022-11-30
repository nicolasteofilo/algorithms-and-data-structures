/*
This pattern uses objects or sets to collect values/frequencies of values
This can often avoid the need for nested loops or O(N^2) operations with arrays / strings
*/

/*
    Problem: Write a function called same, which accepts two arrays.
             The function should return true if every value in the array 
             has it's corresponding value squared in the second array. 
             The frequency of values must be the same.
*/
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    const frequencyCounter1 = {};
    const frequencyCounter2 = {};

    for (const num of arr1) frequencyCounter1[num] = frequencyCounter1[num] + 1 || 1;
    for (const num of arr2) frequencyCounter2[num] = frequencyCounter2[num] + 1 || 1;
  
    for (const key in frequencyCounter1) {
      if (!frequencyCounter2[key ** 2]) return false;
      if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) return false;
    }
    return true;
  }


console.log(same([1, 2, 3, 1], [4, 1, 9, 1])); // true
console.log(same([3, 3, 3, 4, 4], [16, 9, 9, 9, 16])); // true
console.log(same([5, 5, 2, 3], [9, 25, 4, 25])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false (must be same frequency)

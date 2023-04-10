function countUpAndDown(n) {
  console.log("Going up!");
  for (let i = 0; i < n; i++) { // O(n) -> grows according to the n
    console.log(i);
  }

  console.log("At the top! \nGoing down...");
  for (let j = n - 1; j >= 0; j--) { // O(n) -> grows according to the n
    console.log(j);
  }
  console.log("Back down. Bye");
}

countUpAndDown(10);
function takeShower() {
  return "Showering!"
}

function eatBreakfast() {
  let meal = cookFood();
  return `Eating ${meal}`;
}

function cookFood() {
  let items = ["Oatmeal", "Eggs", "Protain Shake"];
  return items[Math.floor(Math.random() * items.length)];
}

function wakeUp() {
  takeShower();
  eatBreakfast();
  console.log("Ok ready to go to work!")
}

wakeUp();


/*
 Call Sack pseudo-code:
 1º - wakeUp() -> add to the call stack
 2º - takeShower() -> add to the call stack
 3º - takeShower() -> exit to the call stack, because return a value
 4º - eatBreakfast() -> add to the cal
  4.1 - cookFood() -> add to the call
  4.2 - cookFood() -> exit to the call stack, because return a value
 5º - eatBreakfast -> exit to the call stack, bacause return a value
 6º - wakeUp() -> call the console.log and exit to the call stack because function ended
 * */

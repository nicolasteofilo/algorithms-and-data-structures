class Student {
  constructor(firstName, lastName) { // parameters received by the class
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  sayHi(oi) {
    console.log(`Hi ${this.#firstName} ${this.#lastName}`)
    return;
  }
}

const nicolas = new Student('Nicolas', 'Teófilo');
nicolas.sayHi();

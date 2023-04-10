class Student {
  constructor(firstName, lastName) { // parameters received by the class
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHi() {
    console.log(`Hi ${this.firstName} ${this.lastName}`)
    return;
  }

  static staticMethod() {
    // Doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
    return 'The static method has been called';
  }

  static otherstaticMethod() {
    return this.staticMethod() + ' by the other static method';
  }

  static sendEmailToStudents(students) {
    console.log(`Loading...`);
    setTimeout(() => {
      for (let i = 0; i < students.length; i++) {
        console.log(`The email was successfully sent to the student ${students[i].firstName} ${students[i].lastName}!`)
      }
    }, 2000)
  }
}

const nicolas = new Student('Nicolas', 'Teófilo');
const john = new Student('John', 'Doe');
Student.sendEmailToStudents([nicolas, john]);
// nicolas.sayHi();
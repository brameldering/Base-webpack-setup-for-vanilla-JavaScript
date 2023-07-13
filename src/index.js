import message from "./message.js";
import "./css/style.css";

console.log(message);

const hello = () => console.log("Hello from arrow function");
hello();

class Person {
  #firstName;
  #lastName;
  constructor(firstName, lastName) {
    this.#firstName = firstName;
    this.#lastName = lastName;
  }
  get fullName() {
    return this.#firstName + " " + this.#lastName;
  }
}

const person1 = new Person("Bram", "Eldering");
console.log(person1.fullName);

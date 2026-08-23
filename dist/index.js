"use strict";
const userName = "John Doe";
const age = 30;
const isAdmin = false;
console.log(userName);
console.log(age);
console.log(isAdmin);
let user = "Jane Smith";
user = "Alice Johnson";
console.log(user);
const numbers = [1, 2, 3, 4, 5];
const fruits = ["Apple", "Banana", "Cherry"];
let mixed = [];
mixed.push(numbers[0], fruits[1]);
const greaterThanOne = numbers.map((n) => {
    if (n > 1) {
        return n;
    }
});
console.log(greaterThanOne);
console.log(numbers);
console.log(fruits);
console.log(mixed);
const sola = {
    firstName: "Sola",
    lastName: "Ogunleye",
    age: 20,
    classification: "student",
    favoriteSubjects: ["Math", "Science"],
    school: "ABC University",
    level: "400l"
};
console.log(sola.firstName.slice(0, 2));
// const userName = () => {
// } 

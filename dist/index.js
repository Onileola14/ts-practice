"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.estimateResponseTime = estimateResponseTime;
const userNam = "John Doe";
const age = 30;
const isAdmin = false;
console.log(userNam);
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
    level: "400L",
    userName: function () {
        return this.firstName.toLowerCase()[0] + this.lastName.toLowerCase()[0];
    },
};
console.log(sola);
const bola = {
    firstName: "bola",
    lastName: "oyewole",
    age: 20,
    classification: "student",
    favoriteSubjects: ["Math", "Science"],
    school: "ABp University",
    level: "300L",
    userName: function () {
        return this.firstName.toLowerCase()[0] + this.lastName.toLowerCase()[0];
    },
};
console.log(bola.userName());
function estimateResponseTime(promptLength = 100, modelType = "text") {
    let baseNumber = 0;
    let rateNumber = 0;
    if (modelType === "text") {
        baseNumber = 2;
        rateNumber = 0.01;
    }
    else if (modelType === "image") {
        baseNumber = 5;
        rateNumber = 0.02;
    }
    else if (modelType === "code") {
        baseNumber = 3;
        rateNumber = 0.05;
    }
    return Math.round(baseNumber + rateNumber * promptLength);
}
console.log(estimateResponseTime(8, "text"));
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
function calculate(a, b, operation) {
    return operation(a, b);
}
console.log(calculate(3, 7, add));
console.log(calculate(3, 7, multiply));
let score = [90, 85, 78];
const totalScore = score.reduce((sum, score) => sum + score, 0);
console.log(totalScore);
// const userName = (firstName: string, lastName: string): string | undefined => {
//   return firstName.toLowerCase()[0] + lastName.toLowerCase()[0];
// };
// const solaUseName = userName(sola.firstName, sola.lastName);
// console.log(solaUseName);

"use strict";
// functions.ts
// Day 2 topic: typing function parameters, return values, and shapes
// 1. Basic parameter and return type annotation
function greet(name) {
    return `Hello, ${name}!`;
}
// greet(42); // ❌ Argument of type 'number' is not assignable to parameter of type 'string'
// 2. Optional parameters — mark with `?`, must come after required params
function greetWithTitle(name, title) {
    return title ? `Hello, ${title} ${name}!` : `Hello, ${name}!`;
}
greetWithTitle("Onileola"); // ✅ title omitted
greetWithTitle("Onileola", "Engineer"); // ✅ title provided
// 3. Default parameters — TypeScript infers the type from the default value
function greetWithDefault(name, role = "Backend Developer") {
    return `${name} is a ${role}`;
}
console.log(greetWithDefault("Onileola")); // uses default role
// 4. Rest parameters — typed variable-length arguments
function sum(...nums) {
    return nums.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4)); // ✅ works with any number of args
// 5. void return type — for functions that don't return a usable value
function logActivity(message) {
    console.log(`[LOG]: ${message}`);
}
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
function calculate(a, b, operation) {
    return operation(a, b);
}
console.log(calculate(4, 5, add)); // 9
console.log(calculate(4, 5, multiply)); // 20
function parseInput(input) {
    if (typeof input === "string") {
        return input.split("");
    }
    return [input];
}
console.log(parseInput("abc")); // ['a', 'b', 'c']
console.log(parseInput(123)); // [123]
// Key takeaway:
// Typing a function's inputs and outputs turns "hope this works" into
// "the compiler already checked this works" — before you ever run it.

"use strict";
// unions.ts
// Day 7 topic: union types — combining types, narrowing, and
// discriminated unions
// 1. Basic union type — a value can be one of several types
let id;
id = "abc123"; // ✅
id = 42; // ✅
function move(direction) {
    console.log(`Moving ${direction}`);
}
move("up"); // ✅
// move("sideways"); // ❌ Argument of type '"sideways"' is not assignable
// 3. Narrowing with typeof — TypeScript tracks the check inside the branch
function formatId(id) {
    if (typeof id === "string") {
        return id.toUpperCase(); // ✅ TypeScript knows id is a string here
    }
    return id.toFixed(2); // ✅ TypeScript knows id is a number here
}
// 4. Narrowing with Array.isArray
function printAll(input) {
    if (Array.isArray(input)) {
        input.forEach((item) => console.log(item)); // narrowed to string[]
    }
    else {
        console.log(input); // narrowed to string
    }
}
function makeSound(animal) {
    if ("meow" in animal) {
        animal.meow(); // narrowed to Cat
    }
    else {
        animal.bark(); // narrowed to Dog
    }
}
function renderState(state) {
    switch (state.status) {
        case "loading":
            return "Loading...";
        case "success":
            return `Loaded ${state.data.length} items`; // .data only exists here
        case "error":
            return `Error: ${state.message}`; // .message only exists here
        default:
            // If a new state is ever added to FetchState and not handled above,
            // this line fails to compile — TypeScript flags the missing case.
            const exhaustiveCheck = state;
            return exhaustiveCheck;
    }
}
function isBird(animal) {
    return animal.fly !== undefined;
}
function move2(animal) {
    if (isBird(animal)) {
        animal.fly(); // narrowed to Bird
    }
    else {
        animal.swim(); // narrowed to Fish
    }
}
// Key takeaway:
// A union type says "this could be one of several things." Narrowing
// (typeof, in, Array.isArray, custom guards) is how you prove to
// TypeScript which one you're actually holding at a given point —
// and discriminated unions make that provably exhaustive.

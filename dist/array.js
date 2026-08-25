"use strict";
// arrays.ts
// Day 3 topic: typing arrays, tuples, and array methods
// 1. Basic typed arrays — two equivalent syntaxes
let scores = [90, 85, 78];
let names = ["Onileola", "Ada", "Chidi"];
let tasks = [
    { title: "Write API docs", done: false },
    { title: "Deploy to production", done: true },
];
// 3. Union type arrays — elements can be more than one type
let mixed = ["id-1", 2, "id-3", 4];
// 4. readonly arrays — prevent mutation entirely
const fixedStack = ["Node.js", "Express", "MongoDB"];
// fixedStack.push("JWT"); // ❌ Property 'push' does not exist on type 'readonly string[]'
// 5. Tuples — fixed-length arrays with known types per position
let userEntry = ["Onileola", 24]; // [name, age]
// userEntry = [24, "Onileola"]; // ❌ order matters — types must match position
// Real-world tuple example: React's useState-style return
function useToggle(initial) {
    let state = initial;
    const toggle = () => {
        state = !state;
    };
    return [state, toggle];
}
const [isOpen, toggleOpen] = useToggle(false);
// 6. Typed array methods — TypeScript infers types through map/filter/reduce
const doubled = scores.map((score) => score * 2); // inferred as number[]
const passing = scores.filter((score) => score >= 80); // inferred as number[]
const total = scores.reduce((sum, score) => sum + score, 0); // inferred as number
let notifications = [
    { type: "email", address: "dev@example.com" },
    { type: "sms", phoneNumber: "+2348012345678" },
];
// Key takeaway:
// Typed arrays don't just block wrong-type insertions — they carry that
// type information through every .map(), .filter(), and .reduce() call,
// so the rest of your code stays type-safe automatically.

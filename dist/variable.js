"use strict";
// variables.ts
// Day 1 topic: how TypeScript handles variables — inference, annotation, and safety
// 1. Type inference — TypeScript figures out the type for you
let username = "onileola"; // inferred as string
const ag = 24; // inferred as number
let isBackendDev = true; // inferred as boolean
// Try this: uncomment the line below and TypeScript will error immediately
// username = 42; // ❌ Type 'number' is not assignable to type 'string'
// 2. Explicit annotation — you declare the type yourself
let city = "Abeokuta";
let yearsOfExperience = 1;
let isAvailableForHire = true;
// 3. When inference isn't enough: variables with no initial value
let email; // no value yet, but TypeScript still enforces the type
email = "dev@example.com";
// email = 12345; // ❌ Type 'number' is not assignable to type 'string'
// 4. Union types on variables — more than one possible type
let userId;
userId = "abc123"; // ✅
userId = 123; // ✅ also fine
// userId = true; // ❌ boolean isn't in the union
// 5. const vs let — const locks the binding, not necessarily the shape
const stack = ["Node.js", "Express", "MongoDB"];
stack.push("JWT"); // ✅ allowed — array contents can still change
// stack = []; // ❌ Cannot assign to 'stack' because it is a constant
// 6. any — the "opt out" type (use sparingly!)
let mystery = "could be anything";
mystery = 42; // TypeScript won't complain — no safety net here
mystery = true; // still fine, still risky
// 7. unknown — the safer alternative to any
let response = "some API response";
// console.log(response.toUpperCase()); // ❌ must narrow first
if (typeof response === "string") {
    console.log(response.toUpperCase()); // ✅ narrowed to string
}
// Key takeaway:
// TypeScript infers types automatically in most cases, but explicit
// annotations, union types, and `unknown` give you control and safety
// exactly where you need it — without writing extra runtime checks.

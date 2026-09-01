"use strict";
// utilityTypes.ts
// Day 11 topic: built-in utility types — reshaping existing types
// instead of writing new ones from scratch
// 1. Partial<T> — makes every property optional
// Useful for "update" functions where only some fields change
function updateUser(id, updates) {
    console.log(`Updating user ${id}`, updates);
}
updateUser("u-01", { name: "New Name" }); // ✅ other fields not required
const post = { title: "Hello", body: "Must be present now" };
// const bad: FinalPost = { title: "Hello" }; // ❌ 'body' is now required
// 3. Readonly<T> — locks every property against reassignment
const lockedUser = {
    id: "u-01",
    name: "Onileola",
    email: "dev@example.com",
    age: 24,
};
const preview = { id: "u-01", name: "Onileola" };
const publicUser = { id: "u-01", name: "Onileola", age: 24 };
const permissions = {
    admin: ["read", "write", "delete"],
    editor: ["read", "write"],
    viewer: ["read"],
};
// 7. ReturnType<T> — extract a function's return type without repeating it
function createUser(name, age) {
    return { id: "u-99", name, email: `${name}@example.com`, age };
}
const args = ["Onileola", 24];
const change = { name: "Updated Name" }; // both fields optional
// Key takeaway:
// Utility types reshape an existing type instead of forcing you to
// hand-write a near-duplicate. Partial for updates, Pick/Omit for
// subsets, Readonly for immutability, Record for dictionaries, and
// ReturnType/Parameters for deriving types straight from functions
// you've already written — one source of truth, many derived shapes.

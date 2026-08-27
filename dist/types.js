"use strict";
// types.ts
// Day 6 topic: type aliases — naming shapes, unions, intersections,
// and the real difference between `type` and `interface`
let onileola = { name: "Onileola", age: 24 };
let userId = "abc123";
userId = 42; // ✅ also valid
let currentStatus = "active";
let entry = {
    id: "r-01",
    createdAt: new Date(),
    updatedBy: "onileola14",
};
const add = (a, b) => a + b;
let userResponse = {
    success: true,
    data: { name: "Onileola", age: 24 },
};
// interface Shape2 = ... // ❌ interfaces can't be assigned a union like this
// (c) Both support extending/combining — just different keywords:
// interface A extends B {}      →      type A = B & { ... };
// Key takeaway:
// Reach for `interface` when modeling objects that get extended or
// implemented by classes. Reach for `type` for unions, intersections,
// primitives, function signatures, or generics — anything beyond a
// plain extendable object shape.

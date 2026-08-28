"use strict";
// types.ts
// Day 6 topic: type aliases — naming shapes, unions, intersections,
// and the real difference between `type` and `interface`
let onileola = { name: "Onileola", age: 24 };
let userI = "abc123";
userId = 42; // ✅ also valid
let currentStatus = "active";
let entry = {
    id: "r-01",
    createdAt: new Date(),
    updatedBy: "onileola14",
};
const ad = (a, b) => a + b;
let userResponse = {
    success: true,
    data: { name: "Onileola", age: 24 },
};
// There is no interface equivalent of the line above — interface syntax
// has no way to express "this OR that" at all. You can only give an
// interface a single object shape (or extend/combine shapes with `extends`).
// (c) Both support extending/combining — just different keywords:
// interface A extends B {}      →      type A = B & { ... };
// Key takeaway:
// Reach for `interface` when modeling objects that get extended or
// implemented by classes. Reach for `type` for unions, intersections,
// primitives, function signatures, or generics — anything beyond a
// plain extendable object shape.

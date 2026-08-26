"use strict";
// objects.ts
// Day 4 topic: typing objects — shape, optional props, nested objects, readonly
// 1. Inline object typing
let user = {
    name: "Onileola",
    age: 24,
};
// user.age = "24"; // ❌ Type 'string' is not assignable to type 'number'
// 2. Optional properties — mark with `?`
let profile = {
    name: "Onileola",
    // bio omitted — that's fine, it's optional
};
profile.bio = "Backend developer"; // ✅ can be added later
// 3. readonly properties — set once, locked after that
let config = {
    apiKey: "abc123",
    timeout: 5000,
};
config.timeout = 8000; // ✅ allowed
// config.apiKey = "xyz789"; // ❌ Cannot assign to 'apiKey' because it is a read-only property
// 4. Nested objects
let account = {
    username: "onileola14",
    address: {
        city: "Abeokuta",
        country: "Nigeria",
    },
};
// account.address.country = 123; // ❌ Type 'number' is not assignable to type 'string'
// 5. Index signatures — object with unknown/dynamic keys
let scoresByStudent = {
    Ada: 90,
    Chidi: 85,
};
scoresByStudent["Onileola"] = 95; // ✅ new dynamic key, still type-checked
function printProduct(product) {
    console.log(`${product.id}: $${product.price}`);
}
let laptop = { id: "p-01", price: 899, inStock: true };
printProduct(laptop);
// 7. Excess property checks — TypeScript catches typos in object literals
// printProduct({ id: "p-02", price: 500, inStok: true });
// ❌ Object literal may only specify known properties, and 'inStok' does
// not exist in type 'Product' (this is caught because it's an inline
// literal passed directly — TypeScript assumes a typo)
// Key takeaway:
// Object types describe the exact shape of your data — required vs
// optional fields, nested structure, and even dynamic keys — so a typo
// or a missing field is a compile-time error, not a 2am production bug.

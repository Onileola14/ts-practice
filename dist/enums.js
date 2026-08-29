"use strict";
// enums.ts
// Day 8 topic: enums — numeric, string, const enums, and the
// modern alternative (union of string literals)
// 1. Numeric enum — auto-incrementing values by default
var Acessed;
(function (Acessed) {
    Acessed[Acessed["Pending"] = 0] = "Pending";
    Acessed[Acessed["Active"] = 1] = "Active";
    Acessed[Acessed["Closed"] = 2] = "Closed";
})(Acessed || (Acessed = {}));
let currentStatus_ = Acessed.Active;
console.log(currentStatus_); // 1
console.log(Acessed[1]); // "Active" — numeric enums support reverse lookup
// 2. Numeric enum with a custom starting value
var Priority;
(function (Priority) {
    Priority[Priority["Low"] = 1] = "Low";
    Priority[Priority["Medium"] = 2] = "Medium";
    Priority[Priority["High"] = 3] = "High";
})(Priority || (Priority = {}));
// 3. String enum — safer than numeric, no auto-increment surprises
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["Editor"] = "EDITOR";
    Role["Viewer"] = "VIEWER";
})(Role || (Role = {}));
let userRole = Role.Admin;
console.log(userRole); // "ADMIN"
// Role[0]; // ❌ string enums have no reverse lookup
// 4. Using an enum in a function parameter
function checkAccess(role) {
    return role === Role.Admin || role === Role.Editor;
}
checkAccess(Role.Viewer); // ✅ type-checked
let move_ = 0 /* Direction_.Up */; // compiles to the literal value 0
let literalStatus = "active";
// literalStatus = "cancelled"; // ❌ same safety as an enum
// 7. Why some teams skip enums for union literals instead:
// - Enums generate actual runtime JS objects (extra code in your bundle);
//   union literals compile away to nothing — pure compile-time checking.
// - Numeric enums are less strict about which numbers "look like" them:
var Numbers;
(function (Numbers) {
    Numbers[Numbers["One"] = 1] = "One";
    Numbers[Numbers["Two"] = 2] = "Two";
})(Numbers || (Numbers = {}));
// let n: Numbers = 99; // ❌ modern TypeScript now rejects this directly
let n = 99; // ⚠️ but `as` still forces it through —
// the enum offers no protection once you cast, unlike a union literal
// type, which has no escape hatch that lets an invalid value slip in.
// Key takeaway:
// Enums group related constants with a shared name, and string enums
// are reasonably safe. But union of string literals gives the same
// safety with zero runtime cost — which is why a lot of modern
// TypeScript codebases reach for literals over enums by default.

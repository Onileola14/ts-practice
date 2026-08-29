// enums.ts
// Day 8 topic: enums — numeric, string, const enums, and the
// modern alternative (union of string literals)

// 1. Numeric enum — auto-incrementing values by default
enum Status {
  Pending, // 0
  Active, // 1
  Closed, // 2
}
let currentStatus: Status = Status.Active;
console.log(currentStatus); // 1
console.log(Status[1]); // "Active" — numeric enums support reverse lookup

// 2. Numeric enum with a custom starting value
enum Priority {
  Low = 1,
  Medium, // 2
  High, // 3
}

// 3. String enum — safer than numeric, no auto-increment surprises
enum Role {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER",
}
let userRole: Role = Role.Admin;
console.log(userRole); // "ADMIN"
// Role[0]; // ❌ string enums have no reverse lookup

// 4. Using an enum in a function parameter
function checkAccess(role: Role): boolean {
  return role === Role.Admin || role === Role.Editor;
}
checkAccess(Role.Viewer); // ✅ type-checked

// 5. const enum — inlined at compile time, no runtime object generated
// (slightly more efficient, but can't be used with some build tools —
// worth checking your bundler before reaching for this)
const enum Direction {
  Up,
  Down,
  Left,
  Right,
}
let move: Direction = Direction.Up; // compiles to the literal value 0

// 6. The modern alternative: union of string literals
// Many teams prefer this over enums entirely — see the comparison below
type StatusLiteral = "pending" | "active" | "closed";
let literalStatus: StatusLiteral = "active";
// literalStatus = "cancelled"; // ❌ same safety as an enum

// 7. Why some teams skip enums for union literals instead:
// - Enums generate actual runtime JS objects (extra code in your bundle);
//   union literals compile away to nothing — pure compile-time checking.
// - Numeric enums are less strict about which numbers "look like" them:
enum Numbers {
  One = 1,
  Two = 2,
}
// let n: Numbers = 99; // ❌ modern TypeScript now rejects this directly
let n: Numbers = 99 as Numbers; // ⚠️ but `as` still forces it through —
// the enum offers no protection once you cast, unlike a union literal
// type, which has no escape hatch that lets an invalid value slip in.

// Key takeaway:
// Enums group related constants with a shared name, and string enums
// are reasonably safe. But union of string literals gives the same
// safety with zero runtime cost — which is why a lot of modern
// TypeScript codebases reach for literals over enums by default.
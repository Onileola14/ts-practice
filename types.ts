// types.ts
// Day 6 topic: type aliases — naming shapes, unions, intersections,
// and the real difference between `type` and `interface`

// 1. Basic type alias — same idea as an interface, different keyword
type User = {
  name: string;
  age: number;
};

let onileola: User = { name: "Onileola", age: 24 };

// 2. Type aliases can name ANY type, not just object shapes
type ID = string | number; // interfaces can't do this
type Callback = () => void; // interfaces technically can, but type reads cleaner
type Status = "pending" | "active" | "closed"; // a union of exact string values

let userId: ID = "abc123";
userId = 42; // ✅ also valid
let currentStatus: Status = "active";
// currentStatus = "cancelled"; // ❌ not one of the allowed literal values

// 3. Intersection types — combine multiple types into one (interfaces
// use `extends` for this; type aliases use `&`)
type Timestamped = { createdAt: Date };
type Auditable = { updatedBy: string };
type LogEntry = Timestamped & Auditable & { id: string };

let entry: LogEntry = {
  id: "r-01",
  createdAt: new Date(),
  updatedBy: "onileola14",
};

// 4. Type aliases for function signatures
type MathOperation = (a: number, b: number) => number;
const add: MathOperation = (a, b) => a + b;

// 5. Generic type aliases — reusable, parameterized shapes
type ApiResponse<T> = {
  success: boolean;
  data: T;
};

let userResponse: ApiResponse<User> = {
  success: true,
  data: { name: "Onileola", age: 24 },
};

// 6. type vs interface — the real differences
// (a) Interfaces support declaration merging; type aliases do NOT.
type Config = { apiKey: string };
// type Config = { timeout: number }; // ❌ Duplicate identifier 'Config'
// (an interface with the same name twice would merge instead of erroring)

// (b) type aliases can express unions directly; interfaces cannot.
type Shape = { kind: "circle"; radius: number } | { kind: "square"; side: number };
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
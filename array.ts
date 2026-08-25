// arrays.ts
// Day 3 topic: typing arrays, tuples, and array methods

// 1. Basic typed arrays — two equivalent syntaxes
let scores: number[] = [90, 85, 78];
let names: Array<string> = ["Onileola", "Ada", "Chidi"];

// scores.push("high"); // ❌ Argument of type 'string' is not assignable to type 'number'

// 2. Arrays of objects — combine with an interface/type for structure
interface Task {
  title: string;
  done: boolean;
}
let tasks: Task[] = [
  { title: "Write API docs", done: false },
  { title: "Deploy to production", done: true },
];

// 3. Union type arrays — elements can be more than one type
let mixed: (string | number)[] = ["id-1", 2, "id-3", 4];

// 4. readonly arrays — prevent mutation entirely
const fixedStack: readonly string[] = ["Node.js", "Express", "MongoDB"];
// fixedStack.push("JWT"); // ❌ Property 'push' does not exist on type 'readonly string[]'

// 5. Tuples — fixed-length arrays with known types per position
let userEntry: [string, number] = ["Onileola", 24]; // [name, age]
// userEntry = [24, "Onileola"]; // ❌ order matters — types must match position

// Real-world tuple example: React's useState-style return
function useToggle(initial: boolean): [boolean, () => void] {
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

// 7. Array of a union of object shapes (a preview of discriminated unions)
type Notification =
  | { type: "email"; address: string }
  | { type: "sms"; phoneNumber: string };

let notifications: Notification[] = [
  { type: "email", address: "dev@example.com" },
  { type: "sms", phoneNumber: "+2348012345678" },
];

// Key takeaway:
// Typed arrays don't just block wrong-type insertions — they carry that
// type information through every .map(), .filter(), and .reduce() call,
// so the rest of your code stays type-safe automatically.
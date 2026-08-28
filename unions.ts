// unions.ts
// Day 7 topic: union types — combining types, narrowing, and
// discriminated unions

// 1. Basic union type — a value can be one of several types
let id: string | number;
id = "abc123"; // ✅
id = 42; // ✅
// id = true; // ❌ boolean isn't part of the union

// 2. Union of literal values — restrict to exact allowed values
type Direction = "up" | "down" | "left" | "right";
function move(direction: Direction): void {
  console.log(`Moving ${direction}`);
}
move("up"); // ✅
// move("sideways"); // ❌ Argument of type '"sideways"' is not assignable

// 3. Narrowing with typeof — TypeScript tracks the check inside the branch
function formatId(id: string | number): string {
  if (typeof id === "string") {
    return id.toUpperCase(); // ✅ TypeScript knows id is a string here
  }
  return id.toFixed(2); // ✅ TypeScript knows id is a number here
}

// 4. Narrowing with Array.isArray
function printAll(input: string | string[]): void {
  if (Array.isArray(input)) {
    input.forEach((item) => console.log(item)); // narrowed to string[]
  } else {
    console.log(input); // narrowed to string
  }
}

// 5. Narrowing with the `in` operator — check for a property's existence
type Cat = { meow: () => void };
type Dog = { bark: () => void };
function makeSound(animal: Cat | Dog): void {
  if ("meow" in animal) {
    animal.meow(); // narrowed to Cat
  } else {
    animal.bark(); // narrowed to Dog
  }
}

// 6. Discriminated unions — the most powerful pattern here.
// Every member shares one literal field (the "discriminant") that
// tells TypeScript exactly which shape it's looking at.
type LoadingState = { status: "loading" };
type SuccessState = { status: "success"; data: string[] };
type ErrorState = { status: "error"; message: string };
type FetchState = LoadingState | SuccessState | ErrorState;

function renderState(state: FetchState): string {
  switch (state.status) {
    case "loading":
      return "Loading...";
    case "success":
      return `Loaded ${state.data.length} items`; // .data only exists here
    case "error":
      return `Error: ${state.message}`; // .message only exists here
    default:
      // If a new state is ever added to FetchState and not handled above,
      // this line fails to compile — TypeScript flags the missing case.
      const exhaustiveCheck: never = state;
      return exhaustiveCheck;
  }
}

// 7. Custom type guards — reusable narrowing functions with `is`
interface Bird {
  fly: () => void;
}
interface Fish {
  swim: () => void;
}
function isBird(animal: Bird | Fish): animal is Bird {
  return (animal as Bird).fly !== undefined;
}
function move2(animal: Bird | Fish): void {
  if (isBird(animal)) {
    animal.fly(); // narrowed to Bird
  } else {
    animal.swim(); // narrowed to Fish
  }
}

// Key takeaway:
// A union type says "this could be one of several things." Narrowing
// (typeof, in, Array.isArray, custom guards) is how you prove to
// TypeScript which one you're actually holding at a given point —
// and discriminated unions make that provably exhaustive.
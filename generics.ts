// generics.ts
// Day 10 topic: generics — reusable, type-safe code without losing precision

// 1. The problem generics solve — without them, you either lose type
// safety (any) or duplicate code for every type you need to support
function wrapInArrayAny(value: any): any[] {
  return [value]; // works, but no type safety at all going in or out
}

// 2. A generic function — <T> is a placeholder filled in per call
function wrapInArray<T>(value: T): T[] {
  return [value];
}
const strings = wrapInArray("hello"); // T becomes string -> string[]
const numbers = wrapInArray(42); // T becomes number -> number[]
// const mixed: number[] = wrapInArray("hello"); // ❌ T was inferred as
// string, so the result is string[], not assignable to number[]

// 3. Multiple type parameters
function pair<A, B>(first: A, second: B): [A, B] {
  return [first, second];
}
const p = pair("Onileola", 24); // inferred as [string, number]

// 4. Generic constraints — restrict what T is allowed to be
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}
getLength("hello"); // ✅ strings have .length
getLength([1, 2, 3]); // ✅ arrays have .length
// getLength(42); // ❌ number has no .length property

// 5. Generic interfaces
interface ApiResponse<T> {
  success: boolean;
  data: T;
}
const userResponse: ApiResponse<{ name: string }> = {
  success: true,
  data: { name: "Onileola" },
};

// 6. Generic classes (same idea as generics.ts's cousin in classes.ts)
class Box<T> {
  constructor(private contents: T) {}
  getContents(): T {
    return this.contents;
  }
}
const numberBox = new Box<number>(42);

// 7. Default type parameters — fall back to a type if none is provided
interface Pagination<T = string> {
  items: T[];
  page: number;
}
const defaultPage: Pagination = { items: ["a", "b"], page: 1 }; // T = string
const numberPage: Pagination<number> = { items: [1, 2], page: 1 }; // T = number

// 8. A realistic generic utility — filter an array with full type safety
function filterItems<T>(items: T[], predicate: (item: T) => boolean): T[] {
  return items.filter(predicate);
}
const adults = filterItems([{ age: 17 }, { age: 25 }], (person) => person.age >= 18);
// adults is inferred as { age: number }[] — no manual typing needed

// Key takeaway:
// Generics let you write one function/class/interface that works
// correctly across many types, without falling back to `any` and
// losing type safety. T isn't a real type — it's a placeholder that
// gets filled in with a real type at the call site.
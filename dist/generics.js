"use strict";
// generics.ts
// Day 10 topic: generics — reusable, type-safe code without losing precision
// 1. The problem generics solve — without them, you either lose type
// safety (any) or duplicate code for every type you need to support
function wrapInArrayAny(value) {
    return [value]; // works, but no type safety at all going in or out
}
// 2. A generic function — <T> is a placeholder filled in per call
function wrapInArray(value) {
    return [value];
}
const strings = wrapInArray("hello"); // T becomes string -> string[]
const numbers = wrapInArray(42); // T becomes number -> number[]
// const mixed: number[] = wrapInArray("hello"); // ❌ T was inferred as
// string, so the result is string[], not assignable to number[]
// 3. Multiple type parameters
function pair(first, second) {
    return [first, second];
}
const p = pair("Onileola", 24); // inferred as [string, number]
// 4. Generic constraints — restrict what T is allowed to be
function getLength(item) {
    return item.length;
}
getLength("hello"); // ✅ strings have .length
getLength([1, 2, 3]); // ✅ arrays have .length
const userResponse = {
    success: true,
    data: { name: "Onileola" },
};
// 6. Generic classes (same idea as generics.ts's cousin in classes.ts)
class Box {
    contents;
    constructor(contents) {
        this.contents = contents;
    }
    getContents() {
        return this.contents;
    }
}
const numberBox = new Box(42);
const defaultPage = { items: ["a", "b"], page: 1 }; // T = string
const numberPage = { items: [1, 2], page: 1 }; // T = number
// 8. A realistic generic utility — filter an array with full type safety
function filterItems(items, predicate) {
    return items.filter(predicate);
}
const adults = filterItems([{ age: 17 }, { age: 25 }], (person) => person.age >= 18);
// adults is inferred as { age: number }[] — no manual typing needed
// Key takeaway:
// Generics let you write one function/class/interface that works
// correctly across many types, without falling back to `any` and
// losing type safety. T isn't a real type — it's a placeholder that
// gets filled in with a real type at the call site.

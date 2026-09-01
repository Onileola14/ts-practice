"use strict";
// classes.ts
// Day 9 topic: classes — property typing, access modifiers,
// implementing interfaces, abstract classes, and generics
// 1. Basic class with typed properties
class User_ {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hi, I'm ${this.name}`;
    }
}
const onileola_ = new User_("Onileola", 24);
// 2. Access modifiers — public, private, protected
class Account {
    username; // accessible anywhere (default if omitted)
    balance; // accessible only inside this class
    accountType; // accessible inside this class + subclasses
    constructor(username, balance) {
        this.username = username;
        this.balance = balance;
        this.accountType = "standard";
    }
    getBalance() {
        return this.balance; // ✅ allowed — inside the class
    }
}
const acc = new Account("onileola14", 5000);
console.log(acc.username); // ✅ public
// console.log(acc.balance); // ❌ Property 'balance' is private
// 3. Shorthand constructor property declaration
// (declares AND assigns the property in one step)
class Product_ {
    id;
    price;
    inStock;
    constructor(id, price, inStock = true) {
        this.id = id;
        this.price = price;
        this.inStock = inStock;
    }
    isAvailable() {
        return this.inStock;
    }
}
const laptop_ = new Product_("p-01", 899);
// 4. readonly class properties — set once (in the constructor), locked after
class Config_ {
    apiKey;
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
}
const config_ = new Config_("abc123");
class Circle {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
}
// 6. Extending a class (inheritance)
class Employee extends User_ {
    role;
    constructor(name, age, role) {
        super(name, age); // must call the parent constructor first
        this.role = role;
    }
    greet() {
        // override the parent method, but still reuse it
        return `${super.greet()}, working as a ${this.role}`;
    }
}
const dev = new Employee("Onileola", 24, "Backend Developer");
console.log(dev.greet());
// 7. Abstract classes — a base class that can't be instantiated directly,
// and can force subclasses to implement certain methods
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    describe() {
        return `${this.name} says ${this.makeSound()}`;
    }
}
class Dog_ extends Animal {
    makeSound() {
        return "Woof!";
    }
}
// new Animal("Generic"); // ❌ Cannot create an instance of an abstract class
const dog = new Dog_("Rex");
console.log(dog.describe());
// 8. Generic classes
class Box_ {
    contents;
    constructor(contents) {
        this.contents = contents;
    }
    getContents() {
        return this.contents;
    }
}
const stringBox = new Box_("hello");
const numberBox_ = new Box_(42);
// Key takeaway:
// Classes combine everything from earlier files — typed properties,
// function signatures, interfaces (implements), and generics — into
// one structure, plus access modifiers to control what's exposed
// outside the class.

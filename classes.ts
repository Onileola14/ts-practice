// classes.ts
// Day 9 topic: classes — property typing, access modifiers,
// implementing interfaces, abstract classes, and generics

// 1. Basic class with typed properties
class User_ {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hi, I'm ${this.name}`;
  }
}
const onileola_ = new User_("Onileola", 24);

// 2. Access modifiers — public, private, protected
class Account {
  public username: string; // accessible anywhere (default if omitted)
  private balance: number; // accessible only inside this class
  protected accountType: string; // accessible inside this class + subclasses

  constructor(username: string, balance: number) {
    this.username = username;
    this.balance = balance;
    this.accountType = "standard";
  }

  getBalance(): number {
    return this.balance; // ✅ allowed — inside the class
  }
}
const acc = new Account("onileola14", 5000);
console.log(acc.username); // ✅ public
// console.log(acc.balance); // ❌ Property 'balance' is private

// 3. Shorthand constructor property declaration
// (declares AND assigns the property in one step)
class Product_ {
  constructor(
    public id: string,
    public price: number,
    private inStock: boolean = true
  ) {}

  isAvailable(): boolean {
    return this.inStock;
  }
}
const laptop_ = new Product_("p-01", 899);

// 4. readonly class properties — set once (in the constructor), locked after
class Config_ {
  readonly apiKey: string;
  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }
}
const config_ = new Config_("abc123");
// config.apiKey = "xyz789"; // ❌ Cannot assign to 'apiKey' because it is read-only

// 5. Implementing an interface — the class must fulfill the contract
interface Shape_ {
  area(): number;
}
class Circle implements Shape_ {
  constructor(private radius: number) {}
  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

// 6. Extending a class (inheritance)
class Employee extends User {
  role: string;
  constructor(name: string, age: number, role: string) {
    super(name, age); // must call the parent constructor first
    this.role = role;
  }

  greet(): string {
    // override the parent method, but still reuse it
    return `${super.greet()}, working as a ${this.role}`;
  }
}
const dev = new Employee("Onileola", 24, "Backend Developer");
console.log(dev.greet());

// 7. Abstract classes — a base class that can't be instantiated directly,
// and can force subclasses to implement certain methods
abstract class Animal {
  constructor(protected name: string) {}
  abstract makeSound(): string; // no body — subclasses MUST implement this
  describe(): string {
    return `${this.name} says ${this.makeSound()}`;
  }
}
class Dog extends Animal {
  makeSound(): string {
    return "Woof!";
  }
}
// new Animal("Generic"); // ❌ Cannot create an instance of an abstract class
const dog = new Dog("Rex");
console.log(dog.describe());

// 8. Generic classes
class Box<T> {
  constructor(private contents: T) {}
  getContents(): T {
    return this.contents;
  }
}
const stringBox = new Box<string>("hello");
const numberBox = new Box<number>(42);

// Key takeaway:
// Classes combine everything from earlier files — typed properties,
// function signatures, interfaces (implements), and generics — into
// one structure, plus access modifiers to control what's exposed
// outside the class.
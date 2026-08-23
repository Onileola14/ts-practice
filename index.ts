const userNam: string = "John Doe";
const age: number = 30;
const isAdmin: boolean = false;
console.log(userNam);
console.log(age);
console.log(isAdmin);

let user: string = "Jane Smith";
user = "Alice Johnson";
console.log(user);

const numbers: number[] = [1, 2, 3, 4, 5];
const fruits: string[] = ["Apple", "Banana", "Cherry"];
let mixed: (string | number)[] = [];
mixed.push(numbers[0], fruits[1]);

const greaterThanOne: (number | undefined)[] = numbers.map((n) => {
  if (n > 1) {
    return n;
  }
});

console.log(greaterThanOne);

console.log(numbers);
console.log(fruits);
console.log(mixed);

type Person = {
  firstName: string;
  age: number;
  classification: "student" | "teacher" | "admin";
  favoriteSubjects?: string[];
  school: string;
  level?: string;
  lastName: string;
};

const sola: Person = {
  firstName: "Sola",
  lastName: "Ogunleye",
  age: 20,
  classification: "student",
  favoriteSubjects: ["Math", "Science"],
  school: "ABC University",
  level: "400l",
};


const userName = (firstName: string, lastName: string): string | undefined => {
  return firstName.toLowerCase()[0] + lastName.toLowerCase()[0];
};

const solaUseName = userName(sola.firstName, sola.lastName);
console.log(solaUseName);


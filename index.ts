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

  userName(this: Person): string;
};

const sola: Person = {
  firstName: "Sola",
  lastName: "Ogunleye",
  age: 20,
  classification: "student",
  favoriteSubjects: ["Math", "Science"],
  school: "ABC University",
  level: "400L",

  userName: function (this: Person): string {
    return this.firstName.toLowerCase()[0] + this.lastName.toLowerCase()[0];
  },
};

console.log(sola);

const bola: Person = {
  firstName: "bola",
  lastName: "oyewole",
  age: 20,
  classification: "student",
  favoriteSubjects: ["Math", "Science"],
  school: "ABp University",
  level: "300L",

  userName: function (this: Person): string {
    return this.firstName.toLowerCase()[0] + this.lastName.toLowerCase()[0];
  },
};
console.log(bola.userName());

export function estimateResponseTime(
  promptLength: number = 100,
  modelType: string = "text",
) {
  let baseNumber = 0;
  let rateNumber = 0;

  if (modelType === "text") {
    baseNumber = 2;
    rateNumber = 0.01;
  } else if (modelType === "image") {
    baseNumber = 5;
    rateNumber = 0.02;
  } else if (modelType === "code") {
    baseNumber = 3;
    rateNumber = 0.05;
  }
  return Math.round(baseNumber + rateNumber * promptLength);
}
console.log(estimateResponseTime(8, "text"));

type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => a + b;
const multiply: MathOperation = (a, b) => a * b;

function calculate(a: number, b: number, operation: MathOperation) {
  return operation(a, b);
}

console.log(calculate(3, 7, add));
console.log(calculate(3, 7, multiply));

let score: number[] = [90, 85, 78];
const totalScore = score.reduce((sum, score) => sum + score, 0);
console.log(totalScore);

interface Pet {
  name: string;
  age: number;
  type: string;
  adopted: boolean;
}

const pets: Pet[] = [
  { name: "bingo", age: 3, type: "dog", adopted: true },
  { name: "black tiger", age: 4, type: "cat", adopted: false },
  { name: "tochi", age: 1, type: "dog", adopted: false },
  { name: "small wolve", age: 3, type: "dog", adopted: true },
  { name: "chika", age: 5, type: "dog", adopted: true },
  { name: "bingo", age: 7, type: "dog", adopted: true },
];

const petWithAgeLessTHanFive: readonly Pet[] = pets.filter(
  (pet) => pet.age < 5 && pet.adopted === true && pet.type === "dog",
);
// petWithAgeLessTHanFive.push({ name: "new dog", age: 2, type: "dog", adopted: true });
petWithAgeLessTHanFive.forEach((pet) => {
  console.log(`Name: ${pet.name}, Age: ${pet.age}, Type: ${pet.type}`);
});
console.log(petWithAgeLessTHanFive);

type Way = "up" | "down" | "left" | "right";
function move(direction: Way): void {
  console.log(`Moving ${direction}`);
}
move("up");



class ExamResult {
  subject: string;
  studentName: string;
  studentScore: number;

  constructor(subject: string, studentName: string, studentScore: number) {
    this.subject = subject;
    this.studentName = studentName;
    this.studentScore = studentScore;
    console.log(`${studentName} scored ${studentScore} in ${subject}`);
    
  }
  getScorePercentage(): number {
    return (this.studentScore / 100) * 100;
  }
}

const bolaR = new ExamResult("MTS","BOLA",85)
bolaR.getScorePercentage()
console.log(bolaR)


// const userName = (firstName: string, lastName: string): string | undefined => {
//   return firstName.toLowerCase()[0] + lastName.toLowerCase()[0];
// };

// const solaUseName = userName(sola.firstName, sola.lastName);
// console.log(solaUseName);

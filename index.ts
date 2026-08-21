const userName: string = "John Doe";
const age : number = 30;
const isAdmin: boolean = false;
console.log(userName);
console.log(age);
console.log(isAdmin);

let user : string = "Jane Smith";
user = "Alice Johnson";
console.log(user);

const numbers: number[] = [1, 2, 3, 4, 5];
const fruits: string[] = ["Apple", "Banana", "Cherry"];
let mixed:(string | number)[]= [];
mixed.push(numbers[0], fruits[1]);

console.log(numbers);
console.log(fruits);
console.log(mixed);

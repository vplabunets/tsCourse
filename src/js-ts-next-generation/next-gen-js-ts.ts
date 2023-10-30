const myName = "Vova";
// myName = "edic";

let myAge = 33;
myAge = 39;

const addArrow = (a: number = 2, b: number = 1) => a + b;

console.log(addArrow(2));
const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

const button_4 = document.querySelector("button");

if (button_4) {
  button_4.addEventListener("click", (event) => console.log(event));
}

const hobbies = ["Sports", "Cookies"];
const activeHobbies = ["Hiking"];

// activeHobbies.push(hobbies[0], hobbies[1]);

activeHobbies.push(...hobbies);

const person = {
  firstName: "Vova",
  age: 20,
};

const copiedPerson = { ...person, age: 30 };
console.log(copiedPerson);

// const add = (...numbers: [number, number, number, number]) => {
//   return numbers.reduce((curResult, curValue) => {
//     return curResult + curValue;
//   }, 0);
// };

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(1, 2, 1, 2);
console.log(addedNumbers);

// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

const [hobby1, hobby2, ...reaminingHobbies] = hobbies;

const { firstName, age } = copiedPerson;

console.log("firstName", firstName);

console.log("Age", age);

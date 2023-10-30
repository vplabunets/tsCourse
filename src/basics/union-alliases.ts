type Combinable = number | string;
type CoverstionDescription = "as-number" | "as-text";
function combine(
  num1: Combinable,
  num2: Combinable,
  resultConversion: CoverstionDescription
): any {
  let result;
  if (
    (typeof num1 === "number" && typeof num2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +num1 + +num2;
  } else result = num1.toString() + num2.toString();
  return result;
  //   if (resultConversion === "as-number") {
  //     return +result;
  //   } else {
  //     return result.toString();
  //   }
}

console.log("Hello");

const combinedAges = combine(22, 22, "as-number");
console.log(combinedAges);
const combinedStringAges = combine(22, 22, "as-number");
console.log(combinedStringAges);
const combinedNames = combine("Lucie", "Jucie", "as-text");
console.log(combinedNames);

type User = { name: string; age: number };
const u1: User = { name: "Max", age: 30 }; // this works!

// function greet(user: { name: string; age: number }) {
//     console.log('Hi, I am ' + user.name);
//   }

//   function isOlder(user: { name: string; age: number }, checkAge: number) {
//     return checkAge > user.age;
//   }
// To: type User = { name: string; age: number };

function greet(user: User): undefined {
  console.log("Hi, I am " + user.name);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}

let someValue_2: undefined;

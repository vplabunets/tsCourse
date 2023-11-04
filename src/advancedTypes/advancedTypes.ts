type Admin = {
  name: string;
  privileges: string[];
};
type Employee = {
  name: string;
  startDate: Date;
};
type ElevatedEmployee = Admin & Employee;
const e1: ElevatedEmployee = {
  name: "Vova",
  privileges: ["create-server"],
  startDate: new Date(),
};
//   interface Admin  {
//     name: string
//     privileges:  string[]
//  }
//  interface Employee{
//     name: string,
//     startDate: Date
//  }
//  interface ElevatedEmployee extends Admin, Employee {}
//  const e1:ElevatedEmployee= {
//     name: "Vova",
//     privileges:["create-server"],
//     startDate: new Date()
//  }
type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;
let xxx: Universal = 22;
console.log(xxx);

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    //row below is typeguard
    return a.toString() + b.toString();
  }
  // if (typeof a==="number"&& typeof b==="number"){
  return a + b;
}
console.log(add(1, "2"));
type UnknownEmployee = Employee | Admin;
function printEmployeeInfromation(emp: UnknownEmployee) {
  console.log("Name", emp.name);
  if ("priviliges" in emp) {
    console.log("Privileges", emp.priviliges);
  }
  if ("startDate" in emp) {
    console.log("Start Date", emp.startDate);
  }
}
printEmployeeInfromation(e1);
printEmployeeInfromation({ name: "Puppy", startDate: new Date() });
class Car {
  drive() {
    console.log("Driving a car");
  }
}
class Truck {
  drive() {
    console.log("Driving a truck");
  }
  loadCargo(amount: number) {
    console.log("Loading cargo" + amount);
  }
}
type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}
useVehicle(v1);
useVehicle(v2);

//Descimitated unions

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  // if ("flyingSpeed" in animal)
  //   console.log("Moving with speed: " + animal.flyingSpeed);
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }

  console.log("Moving with speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 100 });

const parargaph = document.querySelector("p");
const parargaph2 = document.querySelector("#message-output");
// const input = <HTMLInputElement>document.getElementById("text-input")!;
// const input = (<HTMLInputElement>(
//   document.getElementById("text-input")!
// )) as HTMLInputElement;

// console.log(input);
// input.value = "xxx";

const input2 = document.getElementById("text-input");

if (input2) {
  (input2 as HTMLInputElement).value = "yyy";
}
//index properties
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not valid email",
};

//functions overload
function addOverload(a: number, b: number): number;

function addOverload(a: string, b: string): string;
function addOverload(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    //row below is typeguard
    return a.toString() + b.toString();
  }
  // if (typeof a==="number"&& typeof b==="number"){
  return a + b;
}
const result = addOverload("Hello ", "Kitty");
result.split("");

//Optional chaining

const fetchedData = {
  id: "1",
  name: "Vova",
  job: { title: "CEO", description: "My own company" },
};

console.log(fetchedData?.job?.title);

//Nulish coalescing

const userInput = "null";

const storedData = userInput ?? "DEFAULT";
console.log(storedData);

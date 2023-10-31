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

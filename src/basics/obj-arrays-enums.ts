// const newPerson: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Vova",
//   age: 39,
//   hobbies: ["Sports", "Cooking", "Driving"],
//   role: [2, "author"],
// };
// console.log(newPerson);
// newPerson.role.push("admin");
// console.log(newPerson);
// newPerson.role[1]=2  0

// for (const hobby of newPerson.hobbies) {
//   console.log(hobby);
// }

enum Role {
  ADMIN,
  USER,
  CUSTOMER,
}

const newPerson: {
  name: string;
  age: number;
  hobbies: string[];
  role: number;
} = {
  name: "Vova",
  age: 39,
  hobbies: ["Sports", "Cooking", "Driving"],
  role: Role.ADMIN,
};
console.log(newPerson);

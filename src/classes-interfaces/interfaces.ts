//  interface Person{
//     name: string
//     age:number
//     greet(phrase: string):void
//  }
//  let user1: Person
//  user1= {
// name: "Vova",
// age: 39,
// greet(phrase:string){
//     console.log(phrase + " " + this.name)
// }
//  }
//  user1.greet("Hello")
interface Named {
  readonly name?: string;
  outputName?: string;
}
interface Greetable extends Named {
  greet(phrase: string): void;
}
// class Person implements Greetable, AnotherInterfact {
class Person implements Greetable {
  name?: string;
  age = 30;
  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }
  greet(phrase: string) {
    this.name ? console.log(phrase + " " + this.name) : console.log("Hi");
  }
}
let user1: Greetable;
user1 = new Person();
// user1.name = "Pufik" error
user1.greet("What a fuck");
console.log(user1);
// type AddFn = (a:number, b:number)=>number
interface AddFn {
  (a: number, b: number): number;
}
let addInClasses: AddFn;
addInClasses = (n1: number, n2: number) => {
  return n1 + n2;
};

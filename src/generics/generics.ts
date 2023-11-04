//Generics
const names: Array<string> = ["Vova", "Sveta"]; //the same as string[]
names[0].split(" ");

const anotherNames: string[] = [];
// anotherNames[0].split(" ");

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done");
  }, 2000);
});

promise.then((data) => console.log(data));
console.log("hello");

//Own Generics

function merge<T, U>(objA: T, objB: U) {
  // return Object.assign(objA, objB);
  return { ...objA, ...objB };
}

console.log(merge({ name: "Vova" }, { age: 39 }));
const newObj = merge({ name: "Vova" }, { age: 39 });
// const newObj = merge({ name: "Vova" }, 39); mistake

console.log(newObj.name);

//Working with Constraints

function mergeConstraints<T extends object, U extends object>(
  objA: T,
  objB: U
) {
  return { ...objA, ...objB };
}

console.log(mergeConstraints({ name: "Vova" }, { age: 39 }));
const constraintsObj = mergeConstraints({ name: "Vova" }, { age: 39 });
// const constraintsObj = merge({ name: "Vova" }, 39); mistake

console.log(constraintsObj.name);

//Another Generic Function

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  }
  if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!"));

//The "keyof" Constraints

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

console.log(extractAndConvert({ name: "Vova" }, "name"));

//Generic Classes

class DataStorage<T extends string | number | object> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return this.data;
    // return [...this.data]
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("10");
textStorage.addItem("Vova");
textStorage.addItem("Sveta");

console.log(textStorage.getItems());

//work with objects data type
const numberStorage = new DataStorage<number>();
const objectStorage = new DataStorage<object>();
const vovaObj = { name: "Vova" };
objectStorage.addItem(vovaObj);
objectStorage.addItem({ name: "Sveta" });
objectStorage.removeItem(vovaObj);

console.log(objectStorage.getItems());

//Generic Utility Types
//Partial
interface CourseGoal {
  title: string;
  description: string;
  completeUnit: Date;
}
function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUnit = date;
  return courseGoal as CourseGoal;
  // return { title: title, description: description, description: date };
}

// Readonly

const namesArray: Readonly<string[]> = ["Vova", "Sveta"];
// namesArray.push("Solomiia"); // not allowed to change properties

//Generic Types vs Union Types

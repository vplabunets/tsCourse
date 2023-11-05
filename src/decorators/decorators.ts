//Decorators
//A First Class Decorator
function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

// @Logger
// class Person {
//   name = "Vova";
//   constructor() {
//     console.log("Creating person object...");
//   }
// }

// const person = new Person();
// console.log(person);

//Decorator Factory
// function Logger2(logString: string) {
//   console.log("Logger factory");

//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// function WithTemplate(template: string, hookId: string) {
//   console.log("Template factory");
//   return function <T extends { new (...args: any[]): { name: string } }>(
//     originalConstructor: T
//   ) {
//     return class extends originalConstructor {
//       constructor(..._: any[]) {
//         super();
//         const hookEl = document.getElementById(hookId);
//         // const p = new originalConstructor();
//         if (hookEl) {
//           hookEl.innerHTML = template;
//           hookEl.querySelector("h1")!.textContent = this.name;
//         }
//       }
//     };
//   };
// }

// //Adding Multiple Decorations
// @WithTemplate("<h1>Person Object</h1>", "app")
// @Logger2("LOGGING PERSON")
// class Person2 {
//   name = "Vova";
//   constructor() {
//     console.log("Creating person object...");
//   }
// }

// const person2 = new Person2();
// console.log(person2);

//Property Decorators

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator");
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator");
  console.log("target", target);
  console.log("name", name);
  console.log("descriptor", descriptor);
  return { descriptor };
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator");
  console.log("target", target);
  console.log("name", name);
  console.log("descriptor", descriptor);
  return {};
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parametr decorator");
  console.log("target", target);
  console.log("name", name);
  console.log("position", position);
}
class Product {
  @Log
  title: string;

  private _price: number;
  // @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Price should be positive");
    }
  }
  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }
  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this.price * (1 + tax);
  }
}

const p1 = new Product("Book1", 19);
const p2 = new Product("Book2", 29);

function Autobind(_: any, _2: string | Symbol, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      // const boundFn = originalMethod;
      return boundFn;
    },
  };
  return adjDescriptor;
}
class Printer {
  message = "This works";
  @Autobind
  showMessage() {
    console.log(this.message);
  }
}
const p = new Printer();
const button = document.querySelector("button")!;
console.log(button);
button.addEventListener("click", p.showMessage);

interface ValidatorConfig {
  [property: string]: {
    [validatableProperty: string]: string[]; //['required','positive']
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "required",
    ],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "positive",
    ],
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    console.log("prop", prop);

    for (const validator of objValidatorConfig[prop]) {
      console.log("validator", validator);

      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}
class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;
  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.querySelector("#title") as HTMLInputElement;
  const priceEl = document.querySelector("#price") as HTMLInputElement;
  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert("Invalid input, please, try again");
    return;
  }
  console.log(createdCourse);
});

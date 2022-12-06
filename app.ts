//  Practice #1

const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});

//  Practice #2
// a
let age: number = 50;
let names: string = "Max";
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback = (a: number) => {
  return 100 + a;
};

// b
let anything: any = -20;
anything = "Text";
anything = {};

// c
let some: string;
some = "Text";
let str: string;
str = some;

//d
let person: [string, number] = ["Max", 21];

//e
// Опишіть enum умову наступну: він повинен відображати статус завантаження.
//     Завантажується(LOADING) та завантажена(READY).
enum Role {
  LOADING,
  READY,
}
// f Зробіть змінну, яка може приймати або рядок, або число.
let strOrNum: string | number;
strOrNum = "string";
strOrNum = 10;
// g Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'
let onlyOneValue1: "November" | "December";
onlyOneValue1 = "November";
onlyOneValue1 = "December";

let onlyOneValue2: 10 | 20;
onlyOneValue2 = 10;
onlyOneValue2 = 20;

// h Вкажіть типи для наступних функцій
function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

//i Створіть свій тип даних на основі наявних даних.
type DataPage1 = {
  title: string;
  likes: number;
  accounts: string[];
  status: string;
  details: {
    createAt: string;
    updateAt: string;
  };
};
const page1: DataPage1 = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: "2021-01-01",
    updateAt: "2021-05-01",
  },
};

type DataPage2 = {
  title: string;
  likes: number;
  accounts: string[];
  status: string;
};

const page2: DataPage2 = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

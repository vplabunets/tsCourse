//  Practice #1
var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
//  Practice #2
// a
var age = 50;
var names = "Max";
var toggle = true;
var empty = null;
var notInitialize = undefined;
var callback = function (a) {
    return 100 + a;
};
// b
var anything = -20;
anything = "Text";
anything = {};
// c
var some;
some = "Text";
var str;
str = some;
//d
var person = ["Max", 21];
//e
// Опишіть enum умову наступну: він повинен відображати статус завантаження.
//     Завантажується(LOADING) та завантажена(READY).
var Role;
(function (Role) {
    Role[Role["LOADING"] = 0] = "LOADING";
    Role[Role["READY"] = 1] = "READY";
})(Role || (Role = {}));
// f Зробіть змінну, яка може приймати або рядок, або число.
var strOrNum;
strOrNum = "string";
strOrNum = 10;
// g Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'
var onlyOneValue1;
onlyOneValue1 = "November";
onlyOneValue1 = "December";
var onlyOneValue2;
onlyOneValue2 = 10;
onlyOneValue2 = 20;
// h Вкажіть типи для наступних функцій
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
//i Створіть свій тип даних на основі наявних даних.
var page1 = {
    title: string,
    likes: number,
    accounts: string[],
    status: string,
    details: {
        createAt: Date,
        updateAt: Date
    }
};
var page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: "2021-01-01",
        updateAt: "2021-05-01"
    }
};
var page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close"
};

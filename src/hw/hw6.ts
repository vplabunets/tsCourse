// Task #1
// Создайте пустой объектuser.
// Добавьте свойствоnameсо значениемJohn.
// Добавьте свойствоsurnameсо значениемSmith.
// Измените значение свойстваnameнаPete.
// Удалите свойствоnameиз объекта.

let user: { name?: string; surname?: string };

user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";

console.log("user before delete", user);

delete user.name;

console.log("user after delete", user);

// Task #3

// У нас есть объект, в котором хранятся зарплаты нашей команды:
// let salaries={
// John:100,
// Ann:160,
// Pete:130
// }

// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum

let salaries: {};
salaries = { John: 100, Ann: 160, Pete: 130 };

function salariesSum(salaries: {}): number {
  const values: number[] = Object.values(salaries);
  const sum = values.reduce((prevValue, nextValue) => prevValue + nextValue, 0);
  return sum;
}

console.log(salariesSum(salaries));

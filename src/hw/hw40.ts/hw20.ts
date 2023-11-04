// Файлы в которых писатьприкреплены ниже - решение в файле solution.js

// У нас есть дерево, структурированное как вложенные спискиul/li.

// Напишите код, который выведет каждый элемент списка в консоль :

// Используйте цикл for..of
// Вывести общее кол-во элементов в консоль
// Вытянуть текст из тегов li и записать текст содержащийся в каждом элементе в массив — вывести этот массив в консоль

const list: Element = document.querySelector("#ulId")!;
const listItems: NodeList = document.querySelectorAll("li");
console.log(listItems);

for (let i = 0; i < listItems.length; i += 1) {
  console.log(listItems[i]);
}

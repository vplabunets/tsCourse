// Создайте функцию InsertWordInto которая принимает 1 параметр в типе string.
//  Этот параметр может содержать набор слов разделенных пробелом, одно слово или пустую строку.
// Функция InsertWordInto возвращает новую функцию которая, также, принимает 1 параметр (не пустую строку)
// Вызов внутренней функции вставляет значения своего аргумента в любое место (начало, конец) строки которая была передана во внешнюю функцию.
// Если внутренняя функция вставляет слово в середину строки, то, она может вставлять слова только вместо пробелов, не изменяя при этом сами слова.
// Слово которое вставляется в строку должно иметь пробелы с каждой стороны.
// const insert = insertWordInto('hello world')
// const result = insert('Odesa') // -> 'hello Odesa world'
// const secondResult = insert('Odesa') // -> 'Odesa hello world'
// const thirdResult = insert('Odesa') // -> 'hello world Odesa'

// // optional
// const fourthResult = insert('Odesa') // -> 'Odesa hello world': лише н

function InsertWordInto(word: string) {
  let sentence: string = word;
  return function (anotherWord: string) {
    if (!sentence.includes(anotherWord)) {
      const splittedSentence = sentence.split(" ");
      splittedSentence.splice(1, 0, anotherWord);
      sentence = splittedSentence.join(" ");
      return sentence;
    } else if (
      sentence.split(" ").indexOf(anotherWord) !==
      sentence.split(" ").length - 1
    ) {
      const splittedSentence = sentence.split(" ");

      const currentIndex = splittedSentence.indexOf(anotherWord);
      splittedSentence.splice(splittedSentence.indexOf(anotherWord), 1);

      splittedSentence.splice(currentIndex + 1, 0, anotherWord);
      sentence = splittedSentence.join(" ");
      return sentence;
    } else if (
      sentence.split(" ").indexOf(anotherWord) ===
      sentence.split(" ").length - 1
    ) {
      const splittedSentence = sentence.split(" ");
      splittedSentence.pop();
      splittedSentence.unshift(anotherWord);

      sentence = splittedSentence.join(" ");
      return sentence;
    }
  };
}

const insert = InsertWordInto("Hello World World world");

const result = insert("Odesa");
console.log(result);

const result2 = insert("Odesa");
console.log(result2);

const result3 = insert("Odesa");
console.log(result3);

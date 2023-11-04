"use strict";
function InsertWordInto(word) {
    let sentence = word;
    return function (anotherWord) {
        if (!sentence.includes(anotherWord)) {
            const splittedSentence = sentence.split(" ");
            splittedSentence.splice(1, 0, anotherWord);
            sentence = splittedSentence.join(" ");
            return sentence;
        }
        else if (sentence.split(" ").indexOf(anotherWord) !==
            sentence.split(" ").length - 1) {
            const splittedSentence = sentence.split(" ");
            const currentIndex = splittedSentence.indexOf(anotherWord);
            splittedSentence.splice(splittedSentence.indexOf(anotherWord), 1);
            splittedSentence.splice(currentIndex + 1, 0, anotherWord);
            sentence = splittedSentence.join(" ");
            return sentence;
        }
        else if (sentence.split(" ").indexOf(anotherWord) ===
            sentence.split(" ").length - 1) {
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
//# sourceMappingURL=app.js.map
"use strict";
function mainFunction(num1, num2, exponentiation) {
    return exponentiation(num1, num2);
}
function exponentiation(number, power) {
    return Math.pow(number, power);
}
console.log(mainFunction(4, 0.5, exponentiation));
//# sourceMappingURL=app.js.map
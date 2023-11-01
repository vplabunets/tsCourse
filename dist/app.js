"use strict";
function fib(input = 1) {
    let arrFib = [];
    for (let i = 0; i < input; i += 1) {
        if (i < 2)
            arrFib.push(i);
        else
            arrFib.push(arrFib[i - 1] + arrFib[i - 2]);
    }
    return arrFib[input - 1];
}
console.log(fib(30));
//# sourceMappingURL=app.js.map
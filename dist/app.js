"use strict";
const arr = [1, 2, 3, -1, -2, -3];
function positiveElFilter(arr) {
    const filteredArray = [];
    if (arr.length === 0)
        throw new Error("Input array is empty");
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] > 0) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray.length === 0 ? null : filteredArray;
}
console.log(positiveElFilter(arr));
//# sourceMappingURL=app.js.map
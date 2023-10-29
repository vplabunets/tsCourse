function add(n1: number, n2: number): string | number {
  return n1 + n2;
}

function printResult(num: number | string): void {
  console.log("Result" + num);
}

function addAndHandle(n1: number, n2: number, cb: (number) => void): void {
  const result = n1 + n2;
  cb(result);
}

printResult(117);
printResult(add(22, 22));
let someValue = undefined;

let combineValues: (a: number, b: number) => number | string;

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
  return "10";
});

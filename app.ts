let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Vova";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const result = generateError("This is the error", 444);
console.log(result);

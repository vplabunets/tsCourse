var userInput;
var userName;
userInput = 5;
userInput = "Vova";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError("This is the error", 444);
console.log(result);

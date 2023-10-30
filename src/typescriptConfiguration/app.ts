const button_2 = document.querySelector("button")!;

function add_3(n1: number, n2: number) {
  if (n1 & n2) {
    return n1 + n2;
  }
  return n2 - n1;
}

function clickHandler(message: string, age: number) {
  console.log("Clicked " + message + age);
}

if (button_2) {
  // let useName = "Vova";
  button_2.addEventListener(
    "click",
    clickHandler.bind(null, "You are welcome", 22)
  );
}

// Вам необходимо написать функцию которая:

// Называется fib
// Принимает только 1 аргумент(n)
// Значение аргумента по-умолчанию = 1
// в качестве результата выполнения возвращает n-ый элемент из последовательностьчисел Фибоначчи
// У задачи есть несколько решений, можете не заморачиваться, сделайте так как считаете правильным

function fib(input: number = 1) {
  let arrFib: number[] = [];
  for (let i: number = 0; i < input; i += 1) {
    if (i < 2) arrFib.push(i);
    else arrFib.push(arrFib[i - 1] + arrFib[i - 2]);
  }
  return arrFib[input - 1];
}

console.log(fib(30));

let input;
const numbers = [input];
let total = 0;

while (true) {
  input = prompt("Введіть число");
  if (input === null) {
    break;
  }
  const userNumber = Number(input);
  numbers.push(userNumber);
}
if (numbers.length > 0) {
  for (const num of numbers) {
    total += num;
  }
  console.log(`Загальна сума чисел дорівнює ${total}`);
}

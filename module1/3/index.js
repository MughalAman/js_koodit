const number1 = prompt('Enter a number');
const number2 = prompt('Enter a second number');
const number3 = prompt('Enter a third number');

const sum = Number(number1) + Number(number2) + Number(number3);
const product = Number(number1) * Number(number2) * Number(number3);
const average = sum / 3;

document.getElementById('target').innerHTML = `The sum of ${number1}, ${number2}, and ${number3} is ${sum}. The product of ${number1}, ${number2}, and ${number3} is ${product}. The average of ${number1}, ${number2}, and ${number3} is ${average}.`;
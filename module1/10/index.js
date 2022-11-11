const num_of_dices = Number(prompt('Enter the number of dices: '));
const sum_of_eyes = Number(prompt('Enter the sum of the eye numbers: '));

let sums_of_dices = [];

for (let i = 0; i < 10000; i++) {
    let sum = 0;
    for (let j = 0; j < num_of_dices; j++) {
        sum += Math.floor(Math.random() * 6) + 1;
    }
    sums_of_dices.push(sum);
}

let count = 0;

sums_of_dices.forEach((sum) => {
    if (sum === sum_of_eyes) {
        count++;
    }
});

const probability = count / sums_of_dices.length * 100;

document.getElementById('target').innerHTML = `Probability to get sum of ${sum_of_eyes} with ${num_of_dices} dice is ${probability}%`;
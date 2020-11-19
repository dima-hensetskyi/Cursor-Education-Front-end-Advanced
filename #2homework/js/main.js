let minNumber;
let maxNumber;

do {
    minNumber = Math.round(prompt("Введіть, будь ласка, мінімальне значення", "0"));
} while (!Number.isInteger(minNumber))

do {
    maxNumber = Math.round(prompt("Введіть, будь ласка, максимальне значення", "100"));

} while (!Number.isInteger(maxNumber))

while (minNumber > maxNumber || !Number.isInteger(maxNumber)) {
    maxNumber = Math.round(prompt("Введіть максимальне значення, яке більше мінімального"))
}

const odd = confirm("Чи потрібно пропускати парні числа?");
let result = 0;

for (let i = minNumber; i <= maxNumber; i++) {
    if (odd && i % 2 === 0) {
        continue;
    }
    result += i;
}

console.log(`
Мінімальне значення: ${minNumber}
Маскимальне значення: ${maxNumber}
Чи потрібно пропускати парні числа?: ${odd}
Сума чисел: ${result}
`);
let minNumber;
let maxNumber;

do {
    minNumber = +prompt("Введіть, будь ласка, мінімальне значення", "0");
    minNumber = +minNumber.toFixed(0);

} while (isNaN(minNumber));


do {
    maxNumber = +prompt("Введіть, будь ласка, максимальне значення", "100");
    maxNumber = +maxNumber.toFixed(0);


    while (maxNumber <= minNumber && maxNumber !== 0) {
        maxNumber = +prompt("Введіть, будь ласка, максимальне значення, яке більше мінімального");
        maxNumber = +maxNumber.toFixed(0);
    };

} while (isNaN(maxNumber));

let odd = confirm("Чи потрібно пропускати парні числа?");
let result = 0;

for (let i = minNumber; i < maxNumber + 1; i++) {
    if (odd === false) {
        result += i;
    } else if (odd === true) {
        i % 2 === 0 ? 0 : result += i;
    };
};

console.log(`
Мінімальне значення: ${minNumber}
Маскимальне значення: ${maxNumber}
Чи потрібно пропускати парні числа?: ${odd}
Сума чисел: ${result}
`);
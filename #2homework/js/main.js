
let getMinNumber;
let getMaxNumber;

do {
    getMinNumber = +prompt("Введіть, будь ласка, мінімальне значення", "0");
    getMinNumber = +getMinNumber.toFixed(0);

} while (isNaN(getMinNumber));


do {
    getMaxNumber = +prompt("Введіть, будь ласка, максимальне значення", "100");
    getMaxNumber = +getMaxNumber.toFixed(0);

    while (getMinNumber > getMaxNumber || getMaxNumber === null) {
        getMaxNumber = +prompt("Введіть, будь ласка, максимальне значення, яке більше мінімального");
        getMaxNumber = +getMaxNumber.toFixed(0);
    };

} while (isNaN(getMinNumber));

let odd = confirm("Чи потрібно пропускати парні числа?");
let result = 0;

for (let i = getMinNumber; i < getMaxNumber + 1; i++) {
    if (odd === false) {
        result += i;
    } else if (odd === true) {
        i % 2 === 0 ? 0 : result += i;
    }
}

console.log(`
Мінімальне значення: ${getMinNumber}
Маскимальне значення: ${getMaxNumber}
Чи потрібно пропускати парні числа?: ${odd}
Сума чисел: ${result}
`);
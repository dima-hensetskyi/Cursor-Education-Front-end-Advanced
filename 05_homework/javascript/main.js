function getRandomArray(length = 5, min = 0, max = 15) {
    const randomArray = [];
    while (max < min) {
        alert("Введіть максимальне значення більше як мінімальне!")
        min = +prompt("Введіть мінімальне значення");
        max = +prompt("Введіть максимальне значення");
    }
    const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    for (let i = 0; i < length; i++) {
        randomArray.push(randomNumber(min, max));
    }

    return randomArray;
}

function getModa(...numbers) {
    const numberFilter = numbers.filter((number) => Number.isInteger(number));

    const descriptionModa = numberFilter.reduce((description, number, index, arr) => {
        let counter = 0;
        for (let item of arr) {
            if (item === number) {
                counter++;
                if (counter > 1 && counter > description.maxRepeat) {
                    description.moda = number;
                    description.maxRepeat = counter;
                } else if (description.maxRepeat === counter) {
                    description.multiModa = number;
                }
            }
        }
        return description;
    }, { moda: 0, maxRepeat: 0 });

    if (descriptionModa.moda !== descriptionModa.multiModa) {
        return [descriptionModa.moda, descriptionModa.multiModa];
    } else {
        return descriptionModa.moda;
    }
}

function getAverage(...numbers) {
    const numberFilter = numbers.filter((number) => Number.isInteger(number));
    return numberFilter.reduce((total, number, index, arr) => {
        total += number;
        const lastNumber = index === arr.length - 1;
        if (lastNumber) {
            return total / arr.length;
        } else {
            return total;
        }

    }, 0);
}


function getMediana(...numbers) {
    const numberFilter = numbers.filter((number) => Number.isInteger(number));

    const numberSort = numberFilter.sort((intA, intB) => intA - intB);

    const mediana = (arr) => {
        const pair = (arr.length % 2) === 0;
        let index = 0;
        if (pair) {
            return (arr.length + 1) / 2;

        } else {
            index = (arr.length + 1) / 2;
            return arr[index - 1];
        }
    }
    return mediana(numberSort);
}

function filterEvenNumbers(...numbers) {
    return numbers.reduce((arrOddNumbers, number) => {
        if (Number.isInteger(number)) {
            const pair = (number % 2) === 0;
            if (!pair) {
                arrOddNumbers.push(number);
            }
        }
        return arrOddNumbers
    }, []);
}

function countPositiveNumbers(...numbers) {
    const arrnumbers = numbers.reduce((arrPositiveNum, number) => {
        const positiveNumber = number > 0 && typeof (number === "number") && !isNaN(number);
        if (positiveNumber) {
            arrPositiveNum.push(number);
        }
        return arrPositiveNum;
    }, []);
    return arrnumbers.length;
}

function getDividedByFive(...numbers) {
    return numbers.filter((number) => Number.isInteger(number / 5));
}

console.log(`Функція#1 getRandomArray (15, 1, 100) -> ${getRandomArray(15, 1, 100)}`);
console.log(`Функція#2 getModa (1, 2, 2, 3, 3, 3, 4, 4, NaN, null) -> ${getModa(1, 2, 2, 3, 3, 3, 4, 4, NaN, null)}`);
console.log(`Функція#3 getAverage (6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) ->
${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}`);
console.log(`Функція#4 getMediana (1, 2, 3, 4) -> ${getMediana(1, 2, 3, 4)}`);
console.log(`Функція#5 filterEvenNumbers (1, 2, 3, 4, 5, 6) -> ${filterEvenNumbers(1, 2, 3, 4, 5, 6)}`);
console.log(`Функція#6 countPositiveNumbers (1, -2, 3, -4, -5, 6) -> ${countPositiveNumbers(1, -2, 3, -4, -5, 6)}`);
console.log(`Функція#7 getDividedByFive (6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) ->
 ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}`);

//Base
let priceAmericano = 15.678;
let priceFrappe = 123.965;
let priceLatte = 90.2345;

//  максимальна ціна
const maxPrice = Math.max(priceAmericano, priceFrappe, priceLatte);
console.log(`Максимальна ціна: ${maxPrice}`);

// мінімальна ціна
const minPrice = Math.min(priceAmericano, priceFrappe, priceLatte);
console.log(`Мінімальна ціна: ${minPrice}`);

//вартість усіх товарів
const getSumPrices = priceLatte + priceAmericano + priceFrappe;
console.log(`Вартість усіх товарів: ${getSumPrices}`);

//Cпочатку округлення, потім сума цілих чисел:
const sumRoundingDownPrices = Math.floor(priceAmericano) + Math.floor(priceFrappe) + Math.floor(priceLatte);
console.log(`Сума округлень в меншу сторону: ${sumRoundingDownPrices}`);

//Суму товарів округлену до сотень.
const sumRoundingUpPrices = Math.ceil(getSumPrices / 100) * 100;
console.log(`Cума товарів округлена до сотень ${sumRoundingUpPrices}`);

//булеве значення
let pair = sumRoundingDownPrices % 2 == 0;
console.log(`Чи є округлена сума всіх товарів парним числом?  ${pair}`);

//Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
let rest = +(500 - getSumPrices).toFixed(2);
console.log(`Якщо клієнт платить 500 грн, решта - ${rest}`);

//Виведіть середнє значення цін, округлене до другого знаку після коми
const averageValue = +(getSumPrices / 3).toFixed(2);
console.log(`Cереднє значення цін, округлене до другого знаку після коми: ${averageValue}`);



//Створіть змінну, в якої збережіть випадкову знижку
const discount = Math.floor(Math.random() * 100);
//Створимо також випадкову суму замовлення
let pay = +((Math.random() * getSumPrices) + minPrice).toFixed(2);

//Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
let amountPaid = +(pay - (pay * (discount / 100))).toFixed(2);
console.log(`Замовлення на суму: ${pay} Cума до сплати враховуючи знижку ${discount}% cклала - ${amountPaid} `);

//Виведіть чистий прибуток, собівартість товарів рівно в два рази нижче
const profit = pay / 2;
const netProfit = Math.round(profit - pay * (discount / 100));
console.log(`Чистий прибуток склав: ${netProfit}`);

//Advanced
document.writeln(`
<b>Advanced</b> <br>
Максимальна ціна за товар: ${maxPrice} <br>
Мінімальна ціна за товар: ${minPrice} <br>
Вартість усіх товарів склала: ${getSumPrices} <br>
Сума округлень цін на товар в меншу сторону склала: ${sumRoundingDownPrices} <br>
Cума цін товарів, яка округлена до сотень ${sumRoundingUpPrices} <br>
Чи є округлена сума всіх товарів парним числом? Відповідь:  ${pair} <br>
Якщо клієнт платить 500 грн - решта складе: ${rest} <br>
Cереднє значення цін, округлене до другого знаку після коми: ${averageValue} <br>
<b>Якщо замовлення на суму: ${pay}, то  сума до сплати, враховуючи знижку ${discount}%, <br>
cклала - ${amountPaid} . Чистий прибуток буде становити: ${netProfit} </b> <br>

`);

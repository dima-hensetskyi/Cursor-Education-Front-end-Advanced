//Base
const priceAmericano = 15.678;
const priceFrappe = 123.965;
const priceLatte = 90.2345;


const maxPrice = Math.max(priceAmericano, priceFrappe, priceLatte);
console.log(`Максимальна ціна: ${maxPrice}`);


const minPrice = Math.min(priceAmericano, priceFrappe, priceLatte);
console.log(`Мінімальна ціна: ${minPrice}`);


const getSumPrices = priceLatte + priceAmericano + priceFrappe;
console.log(`Вартість усіх товарів: ${getSumPrices}`);


const sumRoundingDownPrices = Math.floor(priceAmericano) + Math.floor(priceFrappe) + Math.floor(priceLatte);
console.log(`Сума округлень в меншу сторону: ${sumRoundingDownPrices}`);


const sumRoundingUpPrices = Math.round(getSumPrices / 100) * 100;
console.log(`Cума товарів округлена до сотень ${sumRoundingUpPrices}`);


const pair = sumRoundingDownPrices % 2 == 0;
console.log(`Чи є округлена сума всіх товарів парним числом?  ${pair}`);

const cash = 500;
const rest = +(cash - getSumPrices).toFixed(2);
console.log(`Якщо клієнт платить 500 грн, решта - ${rest}`);


const averageValue = +(getSumPrices / 3).toFixed(2);
console.log(`Cереднє значення цін, округлене до другого знаку після коми: ${averageValue}`);


const discount = Math.floor(Math.random() * 101);

const purchasesTotalPrice = +((Math.random() * getSumPrices) + minPrice).toFixed(2);


const amountPaid = +(purchasesTotalPrice - (purchasesTotalPrice * (discount / 100))).toFixed(2);
console.log(`Замовлення на суму: ${purchasesTotalPrice} Cума до сплати враховуючи знижку ${discount}% cклала - ${amountPaid} `);


const profit = purchasesTotalPrice / 2;
const netProfit = +(profit - purchasesTotalPrice * (discount / 100)).toFixed(2);
console.log(`Чистий прибуток склав: ${netProfit}`);

//Advanced
console.log(`
Максимальна ціна: ${maxPrice}
Мінімальна ціна: ${minPrice}
Вартість усіх товарів: ${getSumPrices}
Сума округлень в меншу сторону: ${sumRoundingDownPrices}
Cума товарів округлена до сотень ${sumRoundingUpPrices}
Чи є округлена сума всіх товарів парним числом?  ${pair}
Якщо клієнт платить 500 грн, решта - ${rest}
Cереднє значення цін, округлене до другого знаку після коми: ${averageValue}
Замовлення на суму: ${purchasesTotalPrice} Cума до сплати враховуючи знижку ${discount}% cклала - ${amountPaid}
Чистий прибуток склав: ${netProfit}
`);

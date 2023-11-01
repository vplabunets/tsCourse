// Для любителей борща
// Вы готовите борщ и вам необходимо посчитать сколько килограмм нужно купить картошки.
// На 1 литр борща необходимо 4 картошки, средний вес одной картошки составляет 75 грамм.
// Сколько килограмм картошки необходимо купить для приготовления 48 литров борща ?
// Вес одной картошки (гр.) = 75
// Количество литров борща (л.) = 48
// Используйте информацию о весе для того чтобы посчитать стоимость картошки в магазине,
// если после просчета веса у вас получилось float число, то округлите его в большую сторону и приведите к целому числу.
// Цена 1кг картошки( грн )= 13
// Вам необходимо написать функцию которая будет проводить расчеты стоимости покупки нужного количества картошки.

const POTATO_WEIGHT = 0.075;
const POTATO_PRICE = 13;
(function () {
  function calculatePotatoesPrice(
    volume: number,
    potatoWeight: number = POTATO_WEIGHT,
    potatoPrice: number = POTATO_PRICE
  ): number {
    const potatoesQuantity: number = volume * 4;
    console.log("potatoesQuantity", potatoesQuantity);

    const potatoesWeigth: number = Math.round(potatoesQuantity * potatoWeight);
    console.log("potatoesWeigth", potatoesWeigth);

    const potatoesPrice: number = potatoesWeigth * potatoPrice;
    console.log("potatoesPrice", potatoesPrice);

    return potatoesPrice;
  }

  console.log(calculatePotatoesPrice(48));
})();

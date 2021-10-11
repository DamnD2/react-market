export const totalBasketPrice = (basket) => (
  basket.reduce((accum, element) => {
    const totalCost = element.quantity * element.price;

    return accum + totalCost;
  }, 0)
);

export const quantityOfGoodsInBasket = (basket) => (
  basket.reduce((accum, element) => accum + element.quantity, 0)
);

export const addBasketToLocalstorage = (basket) => (
  localStorage.setItem('BASKET', JSON.stringify(basket))
);

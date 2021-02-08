export const selectAllProducts = state => state.products;
export const selectSelectedProducts = state => state.products
    .filter(product => product.checked);

export const totalProducts = state => state.products
    .filter(product => product.checked)
    .reduce((priceAccumulator, {price}) =>
        priceAccumulator + price, 0);




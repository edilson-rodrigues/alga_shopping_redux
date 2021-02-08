export const TOGGLE_PRODUCT = 'TOGGLE_PRODUCT';

const toggleProduct = (id) => {
    console.log('id', id);
    return {
        type: TOGGLE_PRODUCT,
        payload: id,
    }
}
export default toggleProduct;

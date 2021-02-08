import productsMock from '../../mocks/products.json';
import {TOGGLE_PRODUCT} from "../actions/products.actions";

const productsReducer = (state = productsMock.products, action) => {
    switch (action.type) {
        case TOGGLE_PRODUCT:
            return state.map(product =>
                product.id === action.payload
                    ? {...product, checked: !product.checked}
                    : product,
            );
        default:
            return state;
    }
}

export default productsReducer;

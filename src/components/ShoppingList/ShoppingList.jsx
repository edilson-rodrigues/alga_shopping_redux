import React from 'react'
import {Wrapper, Title, Array} from './ShoppingList.styles'
import Checkbox from '../../shared/Checkbox'
import {useSelector} from "react-redux";
import {selectAllProducts, selectSelectedProducts} from "../../store/selectors/products.selectors";

function ShoppingList({title, onToggle, displayOnlySelected}) {
    
    const displayProducts = displayOnlySelected ?
        selectSelectedProducts :
        selectAllProducts;

    const products = useSelector(displayProducts);

    return <Wrapper>
        <Title>
            {title}:
        </Title>
        <Array>
            {
                products.map(product =>
                    <Checkbox
                        key={product.id}
                        value={product.checked}
                        title={product.name}
                        onClick={() => onToggle(product.id)}
                    />
                )
            }
        </Array>
    </Wrapper>
}

export default ShoppingList

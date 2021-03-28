import React, {FC} from 'react';
import cloneDeep from 'lodash-es/cloneDeep';
import ShoppingCartProductColumn from '../shopping-cart-product-column/ShoppingCardProductColumn';
import {CartProduct} from '../../model/cartProduct';

interface ShoppingCartProductProps {
    product: CartProduct;
    setCart: React.Dispatch<React.SetStateAction<CartProduct[]>>;
}

const ShoppingCartProduct: FC<ShoppingCartProductProps> = (({product, setCart}) => {
    const {id, imgUrl, name, description, quantity, price} = product;

    const shortDescription = description.replace(
        /^(.{110}[\w^\s]*).*/,
        `${'$1'}...`
    );
    const singlePrice = `${price.toFixed(2)}$`;
    const totalPrice = (price * quantity).toFixed(2) + '$';

    const removeFromCart = (itemId: number) => {
        setCart(prevProducts => cloneDeep(prevProducts).filter(({id}) => id !== itemId));
    };

    return (
        <div key={id}>
            <div><img src={imgUrl} alt='product'/></div>
            <ShoppingCartProductColumn title='Product name' item={name}/>
            <ShoppingCartProductColumn title='Short description' item={shortDescription}/>
            <ShoppingCartProductColumn title='Qty' item={quantity}/>
            <ShoppingCartProductColumn title='Price per 1pc' item={singlePrice}/>
            <ShoppingCartProductColumn title='Line total' item={totalPrice}/>
            <div><button onClick={() => removeFromCart(id)}>Remove item</button></div>
        </div>
    );
});

export default ShoppingCartProduct;

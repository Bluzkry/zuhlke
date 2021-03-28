import React, {FC} from 'react';
import _ from 'lodash';
import './ShoppingCartProduct.css';
import ShoppingCartProductColumn from '../shopping-cart-product-column/ShoppingCartProductColumn';
import {CartProduct} from '../../model/cartProduct';

interface ShoppingCartProductProps {
    product: CartProduct;
    setCart: React.Dispatch<React.SetStateAction<CartProduct[]>>;
}

const ShoppingCartProduct: FC<ShoppingCartProductProps> = (({product, setCart}) => {
    const {id, imgUrl, name, description, quantity, price} = product;

    const shortDescription = description.replace(
        /^(.{100}[\w^\s]*).*/,
        `${'$1'}...`
    );
    const singlePrice = `${price.toFixed(2)}$`;
    const totalPrice = (price * quantity).toFixed(2) + '$';

    const removeFromCart = (itemId: number) => {
        setCart(prevProducts => _.cloneDeep(prevProducts).filter(({id}) => id !== itemId));
    };

    return (
        <div className='cart-product'>
            <div className='cart-product-image'><img src={imgUrl} alt='product'/></div>
            <ShoppingCartProductColumn title='Product name' item={name}/>
            <ShoppingCartProductColumn title='Short description' item={shortDescription}/>
            <ShoppingCartProductColumn title='Qty' item={quantity}/>
            <ShoppingCartProductColumn title='Price per 1pc' item={singlePrice}/>
            <ShoppingCartProductColumn title='Line total' item={totalPrice}/>
            <div className='cart-product-button' data-testid='cart-product-button'><button onClick={() => removeFromCart(id)}>Remove item</button></div>
        </div>
    );
});

export default ShoppingCartProduct;

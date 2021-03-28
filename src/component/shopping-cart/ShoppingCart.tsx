import React, {FC} from 'react';
import './ShoppingCart.css';
import ShoppingCartProduct from '../shopping-cart-product/ShoppingCartProduct';
import {CartProduct} from '../../model/cartProduct';

interface ShoppingCartProps {
    cart: CartProduct[];
    setCart: React.Dispatch<React.SetStateAction<CartProduct[]>>;

}

const ShoppingCart: FC<ShoppingCartProps> = (({cart, setCart}) => {
    const total = cart
        .reduce((result, {price, quantity}) => result + price * quantity, 0)
        .toFixed(2)
        + '$';

    return (
        <div>
            <div>
                {cart.map(product => <ShoppingCartProduct product={product} setCart={setCart} />)}
            <div>
            </div>
                <h4>Total amount for payment</h4>
                <p>{total}</p>
            </div>
        </div>
    );
});

export default ShoppingCart;

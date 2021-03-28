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

    if (cart.length === 0) {
        return (
            <div className="cart-empty">
                <h2>Please add some items to your shopping cart.</h2>
            </div>
        );
    }

    return (
        <div className="cart">
            <div>
                {cart.map(product => <ShoppingCartProduct key={product.id} product={product} setCart={setCart} />)}
            </div>
            <div className="total-container">
                <div className="total">
                    <h4 className="total-title">Total amount for payment</h4>
                    <p className="total-number">{total}</p>
                </div>
            </div>
        </div>
    );
});

export default ShoppingCart;

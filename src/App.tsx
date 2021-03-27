import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './component/header/Header';
import {ProductService} from './service/product.service';
import Products from './component/products/Products';
import ShoppingCartIcon from './component/shopping-cart-icon/ShoppingCartIcon';
import ShoppingCart from './component/shopping-cart/ShoppingCart';
import {CartProduct} from './model/cartProduct';

const productService = new ProductService();

const App = () => {
    const [isShoppingCartShown, showShoppingCart] = useState<boolean>(false);
    const [cart, setCart] = useState<CartProduct[]>([]);
    const [cartQuantity, setCartQuantity] = useState(0);

    useEffect(() => {
        const newQuantity = cart.reduce((total, product) => total + product.quantity, 0);

        setCartQuantity(newQuantity);
    }, [cart]);

    return (
        <div>
            <Header/>
            <ShoppingCartIcon
                onClick={() => {
                    showShoppingCart(!isShoppingCartShown);
                }}
                quantity={cartQuantity}
            />
            {isShoppingCartShown
                ? <ShoppingCart/>
                : <Products productService={productService} setCart={setCart}/>
            }
        </div>
    );
};

export default App;

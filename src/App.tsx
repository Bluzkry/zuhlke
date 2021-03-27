import React, {useState} from 'react';
import './App.css';
import Header from './component/header/Header';
import {ProductService} from './service/product.service';
import Products from './component/products/Products';
import ShoppingCartIcon from './component/shopping-cart-icon/ShoppingCartIcon';
import ShoppingCart from './component/shopping-cart/ShoppingCart';

const productService = new ProductService();

const App = () => {
    const [isShoppingCartShown, showShoppingCart] = useState<boolean>(false);

    return (
        <div>
            <Header/>
            <ShoppingCartIcon onClick={() => {
                showShoppingCart(!isShoppingCartShown);
            }}/>
            {isShoppingCartShown ? <ShoppingCart/> : <Products productService={productService}/>}
        </div>
    );
};

export default App;

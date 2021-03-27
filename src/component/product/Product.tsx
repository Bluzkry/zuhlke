import React, {FC} from 'react';
import './Product.css';
import {Product as ProductModel} from '../../model/product';

interface ProductProps {
    product: ProductModel;
}

const Product: FC<ProductProps> = (({product}) => {

    const addToCart = () => {
        // TODO - implement adding of product to cart
    };

    return (
        <div className={'product-container'}>
            <figure className='product blue'>
                <div>
                    <img src={product.imgUrl} alt='product'/>
                    <div className='price'>125.25$</div>
                </div>
                <figcaption>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <a onClick={() => {
                        addToCart();
                    }}>Add to Cart</a>
                </figcaption>
            </figure>
        </div>
    );
});

export default Product;

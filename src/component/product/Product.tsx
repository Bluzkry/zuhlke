import React, {FC} from 'react';
import _ from 'lodash';
import './Product.css';
import {Product as ProductModel} from '../../model/product';
import {CartProduct} from '../../model/cartProduct';

interface ProductProps {
    product: ProductModel;
    setCart: React.Dispatch<React.SetStateAction<CartProduct[]>>;
}

const Product: FC<ProductProps> = (({product, setCart}) => {

    const addToCart = () => {
        setCart(prevProducts => {
            let updatedProducts = _.cloneDeep(prevProducts);

            const newProduct = updatedProducts.some(({id}) => id === product.id);
            if (newProduct) {
                updatedProducts = updatedProducts.map(updatedProduct => {
                    if (updatedProduct.id === product.id) updatedProduct.quantity++;
                    return updatedProduct;
                })
            } else {
                updatedProducts.push({...product, quantity: 1});
            }

            return updatedProducts;
        });
    };

    return (
        <div className={'product-container'}>
            <figure className='product blue'>
                <div>
                    <img src={product.imgUrl} alt='product'/>
                    <div className='price'>{product.price}$</div>
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

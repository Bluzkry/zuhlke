import React, {FC, useEffect, useState} from 'react';
import './Products.css';
import {Product as ProductModel} from '../../model/product';
import {ProductService} from '../../service/product.service';
import Product from '../product/Product';
import {CartProduct} from '../../model/cartProduct';

interface ProductsProps {
    productService: ProductService;
    setCart: React.Dispatch<React.SetStateAction<CartProduct[]>>;
}

const Products: FC<ProductsProps> = (({productService, setCart}) => {
    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        productService.getProducts().then(products => setProducts(products));
    }, [productService]);

    return (
        products.length === 0 ? null :
            <div className='products-container'>
                    {products.map(product =>
                        <Product
                            key={product.id}
                            product={product}
                            setCart={setCart}
                        />
                    )}
            </div>
    );
});

export default Products;

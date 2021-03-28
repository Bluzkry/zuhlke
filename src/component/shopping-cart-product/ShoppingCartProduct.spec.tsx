import React from 'react';
import {cleanup, render} from '@testing-library/react';
import ShoppingCartProduct from './ShoppingCartProduct';
import { mockCart } from '../../testing/mocks';

describe('shoppingCartProduct component', () => {
    const mockProduct = mockCart[1];
    let getByText: Function;
    let getByTestId: Function;
    let getByRole: Function;

    beforeEach(() => {
        ({ getByText, getByTestId, getByRole } = render(
            <ShoppingCartProduct
                product={mockProduct}
                setCart={() => {}}
            />
        ));
    });

    afterEach(cleanup);
    
    it('renders the image', () => {
        expect(getByRole('img').src).toBe(mockProduct.imgUrl);
    });

    it('renders the product name', () => {
        expect(getByText(mockProduct.name)).toBeInTheDocument();
    });

    it('renders the shortened product description', () => {
        const expectedDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...';
        expect(getByText(expectedDescription)).toBeInTheDocument();
    });

    it('renders the product quantity', () => {
        expect(getByText(mockProduct.quantity.toString())).toBeInTheDocument();
    });

    it('renders the product single price', () => {
        expect(getByText('3.00$')).toBeInTheDocument();
    });

    it('renders the product total price', () => {
        expect(getByText('12.00$')).toBeInTheDocument();
    });

    it('renders the button to remove the product', () => {
        expect(getByTestId('cart-product-button')).toBeInTheDocument();
    });
});

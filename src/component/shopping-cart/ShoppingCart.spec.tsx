import React from 'react';
import { render } from '@testing-library/react';
import ShoppingCart from './ShoppingCart';
import { mockCart } from '../../testing/mocks';

describe('shoppingCart component', () => {
   it('when the cart is empty, shows a message to add items', () => {
       const { getByTestId } = render(<ShoppingCart cart={[]} setCart={() => {}} />);

       expect(getByTestId('cart-empty')).toBeInTheDocument();
   });

   it('when the cart is full, shows the total cost of the products', () => {
       const { getByText } = render(<ShoppingCart cart={mockCart} setCart={() => {}} />);

       expect(getByText('13.00$')).toBeInTheDocument();
   });
});

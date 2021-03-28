import React, {FC} from 'react';
import './ShoppingCartProductColumn.css';

interface ShoppingCartProductColumnProps {
    title: string;
    item: string | number;
}

const ShoppingCartProductColumn: FC<ShoppingCartProductColumnProps> = (({title, item}) => (
        <div className='cart-column'>
            <h3>{title}</h3>
            <p>{item}</p>
        </div>
    )
);

export default ShoppingCartProductColumn;

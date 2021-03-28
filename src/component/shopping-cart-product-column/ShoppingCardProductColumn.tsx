import React, {FC} from 'react';

interface ShoppingCartProductColumnProps {
    title: string;
    item: string | number;
}

const ShoppingCartProductColumn: FC<ShoppingCartProductColumnProps> = (({title, item}) => (
        <div>
            <h3>{title}</h3>
            <p>{item}</p>
        </div>
    )
);

export default ShoppingCartProductColumn;

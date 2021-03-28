import React, {FC} from 'react';

interface ShoppingCartProductColumnProps {
    title: string;
    item: string | number;
}

const ShoppingCartProductColumn: FC<ShoppingCartProductColumnProps> = (({title, item}) => (
        <div>
            <h4>{title}</h4>
            <p>{item}</p>
        </div>
    )
);

export default ShoppingCartProductColumn;

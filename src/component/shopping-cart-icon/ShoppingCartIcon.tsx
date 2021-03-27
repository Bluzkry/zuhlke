import React, {FC} from 'react';
import './ShoppingCartIcon.css';
import CartIcon from '../../assets/shopping-cart.svg';

interface ShoppingCartIconProps {
    onClick: () => void;
}

const ShoppingCartIcon: FC<ShoppingCartIconProps> = (({onClick}) => {
    return (
        <div className='icon-container' onClick={(onClick)}>
            <img className='shopping-cart-icon' src={CartIcon} alt='shopping-cart-icon'/>
                <span className='number-of-items-in-cart'>0</span>
        </div>
    );
});

export default ShoppingCartIcon;

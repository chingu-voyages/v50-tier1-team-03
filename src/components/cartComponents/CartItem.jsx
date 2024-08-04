import React from 'react';

function CartItem({ item }) {
    return (
        <li>
            <span>{item.name} - ${item.price} x {item.amount}</span>
        </li>
    );
}

export default CartItem;
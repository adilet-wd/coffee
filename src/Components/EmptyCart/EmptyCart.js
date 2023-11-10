import React from 'react';
import { useState, useEffect } from 'react';
import "./EmptyCart.scss"
const EmptyCart = () => {
    return (
        <div className='empty-cart'>
            <h2>
                Корзина пуста
            </h2>
        </div>
    );
}

export default EmptyCart;

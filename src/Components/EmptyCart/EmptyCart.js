import React from 'react';
import { useState, useEffect } from 'react';
import "./EmptyCart.scss"
import { Link } from 'react-router-dom';
const EmptyCart = () => {
    return (
        <div className='empty-cart'>
            <h1>
                Ваша корзина пуста
            </h1>
            <p className='text-center'>Возможно товары в <Link to="/catalog/">каталоге</Link> помогут вам определиься с выбором</p>
        </div>
    );
}

export default EmptyCart;

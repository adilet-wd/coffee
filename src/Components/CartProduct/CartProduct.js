import React from 'react'
import './CartProduct.scss';
import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';


export default function CartProduct({onCartChange,inCart ,url,amountInCartFromServer , title, price, weight, img, body, roast, blend, id}) {
    // Сколько в корзине
    const [amountInCart, setAmountInCart] = useState(amountInCartFromServer);

    // Есть ли он в корзине или нет
    // const [isInCart, setIsInCart] = useState(inCart);

    // Для рендеринга скелета 
    const [isLoading, setIsLoading] = useState(true);
    const handleImageLoad = () => {
        setIsLoading(false);
    };

    function increaseAmount(){
        
        let cartProducts = JSON.parse(localStorage.getItem('productsInCart'));
        // Проверяем есть ли уже такой же товар
        for (let i = 0; i < cartProducts.length; i++ ){
            if(cartProducts[i].id === id) {

                cartProducts[i].amountInCart += 1;
                setAmountInCart(cartProducts[i].amountInCart);

                // Если такой товар уже есть, то увеличиваем его количество в корзине
                onCartChange(cartProducts);
                // Отправляем в родительский элемент изменение корзины

                localStorage.setItem('productsInCart', JSON.stringify(cartProducts));
                
                break;
            }
        } 
        onCartChange(cartProducts);
    }

    function decreaseAmount(){
        if (amountInCart > 1) {
            let cartProducts = JSON.parse(localStorage.getItem('productsInCart'));
            // Проверяем есть ли уже такой же товар
            for (let i = 0; i < cartProducts.length; i++ ){
                if(cartProducts[i].id == id) {
                    cartProducts[i].amountInCart -= 1;
                    setAmountInCart(amountInCart-1);
                    // Если такой товар уже есть, то увеличиваем его количество в корзине
                    onCartChange(cartProducts);

                    localStorage.setItem('productsInCart', JSON.stringify(cartProducts));
                    // Отправляем в родительский элемент изменение корзины
                    break;
                }
            } 
            onCartChange(cartProducts);
        }
    }
    
    function deleteFromCart(){
        if (amountInCart > 0) {
            // Получаем текущий список товаров
            let cartProducts = JSON.parse(localStorage.getItem('productsInCart'));;

            for (let i = 0; i < cartProducts.length; i++ ){
                // Ищем товар в корзине
                    if(cartProducts[i].id === id) {
                        // Если есть,то возвращаем новый массив без текущего товара 
                        let changedCart = cartProducts.filter(function(obj) {
                            return obj.id !== id;
                        });
                        // Обновляем содержимое корзины
                        cartProducts = changedCart;
                        // Отправляем на сервер содержимое корзины
                        localStorage.setItem('productsInCart', JSON.stringify(cartProducts));
                        // Отправляем в родительский элемент изменение корзины
                        onCartChange(cartProducts);
                        break;
                    }
                }

        }
    }
    return (
        <div className='cart__product'>
            <div className='cart__product-img-block'>
                {isLoading ? (
                    <Skeleton className="img__skeleton"/> // Здесь вы можете настроить размеры заглушки
                ) : null}
                <img className='cart__product-img' variant="top" src={img} alt={title}
                    style={{ display: isLoading ? 'none' : 'grid'}}
                    onLoad={handleImageLoad}/>
            </div>
            <div className='cart__product-info cart__product-block'>
                <div className='cart__product-text'>{title}</div> 
                <div className='cart__product-blend'>{blend}</div>
            </div>
            <div className='cart__product-amount cart__product-block'>
                <div className='cart__product-button button__increase' onClick={decreaseAmount}>-</div>
                <div className='cart__product-text'>{amountInCart}</div> 
                <div className='cart__product-button button__decrease' onClick={increaseAmount}>+</div>
            </div>
            <div className='cart__product-price cart__product-block'>
                <div className='cart__product-text'>{price} сом</div> 
            </div>
            <div className='cart__product-delete cart__product-block' onClick={deleteFromCart}>
                <span className='cart__product-delete-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                </span> 
            </div>
        </div>
    )
}

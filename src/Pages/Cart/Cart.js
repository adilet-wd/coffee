import './Cart.scss';
import {React, useEffect, useState} from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import CartProduct from '../../Components/CartProduct/CartProduct';

export default function Cart() {
  const [cartProducts, setCartProducts] = useState([]);
  
  useEffect(() => {
    try {
      // Получаем с локалсторейдж массив объектов по ключу items
      setCartProducts( JSON.parse(localStorage.getItem('items')) );
    } catch (err) { 
        console.log(err)
    }
  },[])

  function clearCart() {
    localStorage.removeItem('productsInCart');
  }

  return (
    <div className='cart'>
      <Container>
        <h1>Корзина</h1>
        <div className='cart-inner'>
          <div className='cart__products-list'> 
          
          {/* Проверка пустая ли корзина, если нет, то создает продукты, если да, то возвращает надпись */}
            {cartProducts != null ? (cartProducts.map(product => (
              <CartProduct key={product.id} title={product.title} blend={product.blend} price={product.price}></CartProduct>
              ))): <h2>Empty</h2>}

          </div>
          <div className='cart__order'>
            <div className='cart__order-row'>
              <div className='cart__order-text'>X товаров</div>
              <div className='cart__order-text'>5000 сом</div>
            </div>
            <div className='cart__order-row cart__order-total'>
              <div className='cart__order-text'>Итого</div>
              <div className='cart__order-text'>5000 сом</div>
            </div>
            <Button className='cart__order-button' onClick={clearCart()}>Оформить заказ</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

import './Cart.scss';
import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import CartProduct from '../../Components/CartProduct/CartProduct';


export default function Cart() {
  return (
    <div className='cart'>
      <Container>
        <h1>Корзина</h1>
        <div className='cart-inner'>
          <div className='cart__products-list'>
            <CartProduct></CartProduct>
            <CartProduct></CartProduct>
            <CartProduct></CartProduct>
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
            <Button className='cart__order-button'>Оформить заказ</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

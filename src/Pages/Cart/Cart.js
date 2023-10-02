import './Cart.scss';
import {React, useEffect, useState} from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import CartProduct from '../../Components/CartProduct/CartProduct';

export default function Cart() {
  
  const [cartProducts, setCartProducts] = useState([]);
  const [productAmount, setProductAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  // Получение товаров в корзине
  useEffect(() => {
    try {
      // Получаем с локалсторейдж массив объектов по ключу items
      const storedCartProduct = JSON.parse(localStorage.getItem('productsInCart'));
      if(storedCartProduct) {
        setCartProducts(storedCartProduct);
        for (let i = 0; i < storedCartProduct.length; i--){
          console.log("Выводим цену этого массива")
          console.log(storedCartProduct)
          setProductAmount(productAmount + storedCartProduct[i].amountInCart);
          setTotalPrice(totalPrice   + (storedCartProduct[i].amountInCart * storedCartProduct[i].price));
        }
      }
    } catch (err) { 
        console.log(err)
    }
  },[])

  function handleCartChange(changedCart) {
    // Функция обратного вызова для обновления состояния родительского компонента
    // Изменились ли элементы в корзине
    setCartProducts(changedCart);

    // Если есть изменения, делаем пересчет цены
    const storedCartProduct = cartProducts;
    if(storedCartProduct) {
      setCartProducts(storedCartProduct);
      for (let i = 0; i < storedCartProduct.length; i--){
        console.log("Выводим цену этого массива")
        console.log(storedCartProduct)
        setProductAmount(productAmount + storedCartProduct[i].amountInCart);
        setTotalPrice(totalPrice + (storedCartProduct[i].amountInCart * storedCartProduct[i].price));
      }
    }
  }


  function clearCart() {
    localStorage.removeItem('productsInCart');
    console.log("cart cleared")
    window.location.reload();
  }

  return (
    <div className='cart'>
      <Container>
        <h1>Корзина</h1>
        <div className='cart-inner'>
          <div className='cart__products-list'> 
          
          {/* Проверка пустая ли корзина, если нет, то создает продукты, если да, то возвращает надпись */}
            {cartProducts.length !== 0 ? (cartProducts.map(product => (
              <CartProduct onCartChange={handleCartChange} inCart={true} id={product.id} img={product.img} amountInCartFromServer={product.amountInCart} key={product.id} title={product.title} blend={product.blend} price={product.price}></CartProduct>
              ))): <h2>Empty</h2>}

          </div>
          <div className='cart__order'>
            <div className='cart__order-row'>
              <div className='cart__order-text'>{productAmount} товаров</div>
              <div className='cart__order-text'>{totalPrice} сом</div>
            </div>
            <div className='cart__order-row cart__order-total'>
              <div className='cart__order-text'>Итого</div>
              <div className='cart__order-text'>{totalPrice} сом</div>
            </div>
            <Button className='cart__order-button' onClick={clearCart}>Оформить заказ</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

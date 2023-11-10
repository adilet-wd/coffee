import './Cart.scss';
import {React, useEffect, useState} from 'react';
import { Button, Container} from 'react-bootstrap';
import CartProduct from '../../Components/CartProduct/CartProduct';
import ModalOrder from '../../Components/ModalOrder/ModalOrder';
import EmptyCart from '../../Components/EmptyCart/EmptyCart';
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
      
        //  Получение данных о цене товаров и количестве
        let productsInCartAmount = 0;
        let productsInCartTotal = 0;
        for (let i = 0; i < storedCartProduct.length; i++){
          // console.log("Выводим цену этого массива")
          productsInCartTotal += storedCartProduct[i].amountInCart * storedCartProduct[i].price;
          productsInCartAmount += storedCartProduct[i].amountInCart;
          
          setProductAmount(productsInCartAmount);
          setTotalPrice(productsInCartTotal);
          // setTotalPrice(totalPrice + (storedCartProduct[i].amountInCart * storedCartProduct[i].price));
        }

      }
    } catch (err) { 
        console.log(err)
    }
  },[])

  function handleCartChange(changedCart) {

    const storedCartProduct = JSON.parse(localStorage.getItem('productsInCart'));
    // Функция обратного вызова для обновления состояния родительского компонента
    // Изменились ли элементы в корзине
    setCartProducts(storedCartProduct);

    // Если есть изменения, делаем пересчеты
    if(storedCartProduct) {
      setCartProducts(storedCartProduct);
      
      //  Получение данных о цене товаров и количестве
      let productsInCartAmount = 0;
      let productsInCartTotal = 0;
      for (let i = 0; i < storedCartProduct.length; i++){
        // console.log("Выводим цену этого массива")
        productsInCartTotal += storedCartProduct[i].amountInCart * storedCartProduct[i].price;
        productsInCartAmount += storedCartProduct[i].amountInCart;
        
        setProductAmount(productsInCartAmount);
        setTotalPrice(productsInCartTotal);
        // setTotalPrice(totalPrice + (storedCartProduct[i].amountInCart * storedCartProduct[i].price));
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
        <div className='cart__title'><h1>Корзина</h1> <div onClick={clearCart} className='cart__clear-button'>Очистить корзину</div></div>
        
        <div className='cart-inner'>
          <div className='cart__products-list'> 
          
          {/* Проверка пустая ли корзина, если нет, то создает продукты, если да, то возвращает надпись */}
            
            {cartProducts.length !== 0 ? (cartProducts.map(product => (
              <CartProduct onCartChange={handleCartChange} inCart={true} id={product.id} img={product.img} amountInCartFromServer={product.amountInCart} key={product.id} title={product.title} blend={product.blend} price={product.price}></CartProduct>
              
              ))): <EmptyCart></EmptyCart>}
            
          </div>
          {cartProducts.length !== 0 ? (<div className='cart__order'>
            <div className='cart__order-row'>
              <div className='cart__order-text'>{productAmount} товар&#40;а,ов&#41;</div>
              <div className='cart__order-text'>{totalPrice} сом</div>
            </div>
            <div className='cart__order-row cart__order-total'>
              <div className='cart__order-text'>Итого</div>
              <div className='cart__order-text'>{totalPrice} сом</div>
            </div>
            {/* <Button className='cart__order-button' onClick={clearCart}>Оформить заказ</Button> */}
             
            <ModalOrder className={"cart__order-button"} buttonInner={"Оформить заказ"}></ModalOrder>
          
          </div>): (null)}
          
        </div>
      </Container>
    </div>
  )
}

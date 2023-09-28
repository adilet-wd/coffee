import React from 'react';
import { Container, Row } from 'react-bootstrap';
import "./Notfoundpage.scss"
import { useState, useEffect } from 'react';
import { ref, onValue, getDatabase, child, get } from 'firebase/database';
import { database } from '../..';
import ProductCardItem from '../../Components/ProductCardItem/ProductCardItem';


const Notfoundpage = () => {

    const [products, setProducts] = useState([]);
    // Получение списка с сервера
    // Получаем json с данными о постах
    useEffect(() => {
        try {
            let databaseConnection = ref(database, '/Products/');
            get(databaseConnection).then(
                (data) => {
                    const dataFromDataBase = data.val();
                    const objectedArr = Object.values(dataFromDataBase);
                    // setProducts(dataFromDataBase);
                    setProducts(objectedArr.slice(0,3));
                }
            );
        } catch (err) {
            alert("Ошибка подключения к серверу");
            window.location.reload();
        }
    })
    
    return (    
        <div className='notFound catalog'>
            <Container className='notFound__text'>
                <h1>404</h1>
                <p>Товар, который вы искали не найден. Возможно вы искали эти товары</p>
            </Container>
            <Container className='catalog__products'>
                <Row className='products-flex'>
                    {  
                        products.map(product => (
                            <ProductCardItem key={product.id} to={`/catalog/${product.id}`} title={product.title} price={product.price} weight={product.weight} img={product.img}>
                            </ProductCardItem>

                        ))
                    }
                </Row>
            </Container>
        </div>
    );
}

export default Notfoundpage;

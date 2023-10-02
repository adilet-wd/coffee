import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ref, onValue, getDatabase, child, get } from 'firebase/database';
import { database } from '../..';
import './Catalog.scss';
import ProductCardItem from '../../Components/ProductCardItem/ProductCardItem';
const Catalog = () => {
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
                    setProducts(objectedArr);
                }
            );
        } catch (err) {
            alert("Ошибка подключения к серверу");
            window.location.reload();
        }
    })
    
    return (
        <div className='catalog'>
            <Container fluid className='about-us__parallax parallax__catalog'>
            </Container>
            <Container>
                <h1>Каталог</h1>
            </Container>
            <Container className='catalog__products'>
                <div className='products-flex'>
                    {   
                        products.map(product => (
                            <ProductCardItem amountInCart={product.amountInCart} key={product.id} to={`/catalog/${product.url}`} title={product.title} price={product.price} weight={product.weight} img={product.img}>
                            </ProductCardItem>

                        ))
                    }
                </div>
            </Container>
        </div>
    );
}

export default Catalog;

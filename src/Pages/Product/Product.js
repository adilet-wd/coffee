import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

import Notfoundpage from '../Notfoundpage/Notfoundpage';

import { ref, onValue, getDatabase, child, get } from 'firebase/database';
import { database } from '../..';
import ProductItem from '../../Components/ProductItem/ProductItem';

const Product = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);

    const goBack = () => navigate(-1);

    useEffect(() => {
        try {
            let databaseConnection = ref(database, `/Products/${id}`);
            get(databaseConnection).then(
                (data) => {
                    const dataFromDataBase = data.val();
                    setProduct(dataFromDataBase);
                }
            );
        } catch (err) {
            alert("Ошибка подключения к серверу");
            window.location.reload();
        }
    }, [id])

    if (product) {
        return (
            <>
                <ProductItem title={product.title} price={product.price} weight={product.weight} img={product.img} body={product.body} roast={product.roast} blend={product.blend} id={product.id}></ProductItem>
            </>
        )
    } else {
        return (
            <Notfoundpage></Notfoundpage>
        )
    }

}

export default Product;

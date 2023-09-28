import React from 'react';
import { Container, Row } from 'react-bootstrap';
import "./Notfoundpage.scss"
import ProductCardItem from '../../Components/ProductCardItem/ProductCardItem';


const Notfoundpage = () => {

    return (    
        <div className='notFound'>
            <Container className='notFound__text'>
                <h1>404</h1>
                <p>Страница не найдена</p>
            </Container>
        </div>
    );
}

export default Notfoundpage;

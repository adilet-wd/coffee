import React, { useState } from 'react';
import './ProductItem.scss';
import { Link, } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import ModalOrder from '../ModalOrder/ModalOrder';


const ProductItem = ({ title, price, weight, img, body, roast, blend, id }) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    return (
        <div className="product__card">
            <Container>
                <Row>
                    <Col md className="product__img-block">
                        {isLoading ? (
                            <Skeleton className="img__skeleton"/> // Здесь вы можете настроить размеры заглушки
                        ) : null}
                        <img className="product__img"  src={img} alt={title}
                            style={{ display: isLoading ? 'none' : 'block'}}
                            onLoad={handleImageLoad}
                        />
                    </Col>
                    <Col md className="product__info">
                        <h1 className="product__title">{title || <Skeleton />}</h1>
                        <span className="product__text">{body || <Skeleton />}</span>
                        <span className='product__weight'>Масса нетто: <span className='weight__inner inner'>{weight || <Skeleton />} грамм</span></span>
                        <span className='product__roast'>Обжарка: <span className='roast__inner inner'>{roast || <Skeleton />}</span></span>
                        <span className='blend__blend'>Смесь: <span className='blend__inner inner'>{blend || <Skeleton />}</span></span>
                        <span className='product__price'>Цена: <span className='price__inner inner'>{price || <Skeleton />} сом</span></span>
                        <ModalOrder className={'product__buy-button'} buttonInner={'Заказать'}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ProductItem;

import React from 'react';
import './ProductCardItem.scss';
import { Link, } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';
import { useState } from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ProductCardItem = ({ to, title, price, weight, img }) => {
    const [isLoading, setIsLoading] = useState(true);
    // Для рендеринга скелета 
    const handleImageLoad = () => {
        setIsLoading(false);
    };
    return (
            <Card className='catalog__card'>
            {isLoading ? (
                <Skeleton className="img__skeleton" /> // Здесь вы можете настроить размеры заглушки
            ) : null}
            <Link to={to}>
            <Card.Img variant="top" src={img} alt={title}
                style={{ display: isLoading ? 'none' : 'grid'}}
                onLoad={handleImageLoad}
            />
            </Link>
            <Link to={to}>
                <Card.Body>
                    <Card.Title>
                        {title}
                    </Card.Title>
                    <Card.Text>
                        <span className='weight'>Масса нетто: <span className='weight__inner'>{weight} грамм</span> </span>
                        <span className='price'>Цена: <span className='price__inner'>{price} сом</span></span>
                    </Card.Text>
                </Card.Body>
            </Link>
        </Card>
    );
}

export default ProductCardItem;
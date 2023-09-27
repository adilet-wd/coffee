import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FooterMobile = () => {
    return (
        <footer className='footer footer-mobile'>
            <Container>
                <Row>
                    <Col>
                        <h4>Контакты</h4>
                        <span><a href="mailto:fast.trading.kz@gmail.com">fast.trading.kz@gmail.com</a> , <a href="tel:+77072104500">+7 707 210 45 00</a> , Республика Казахстан, г. Алматы, ул. Перова, д. 11 </span>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default FooterMobile;

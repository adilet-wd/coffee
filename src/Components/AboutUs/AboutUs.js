import React from 'react';
import './AboutUs.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect } from 'react';
// Импорт фотографий
import img1 from './img/img-1.jpg';
import img2 from './img/img-2.jpg';
import img3 from './img/img-3.jpg';

const AboutUs = () => {
    return (
        <div className='about-us'>
            {/* Обертка и блоки */}
            <Container fluid className='about-us__block caffe-brand'>
                <Container>
                    <Row>
                        <Col lg>
                            <img src={img1} alt="Coffee beans" />
                        </Col>
                        <Col lg>
                            <img src="" alt="" />
                            <h1>CAFFÈ BONINI - это брэнд</h1>
                            <p>Caffè Bonini запускался как маленький семейный бизнес по обжарке Тосканского кофе, сделавшее из кофе искусство. Наша продукция является одной из любимейших для итальянских и иностранных клиентов, не только из-за доступной цены, но и благодаря высокому стандарту качества.</p>
                            <p>За годы работы мы смогли создать крепкие доверительные отношения с нашими клиентами, которые день за днем выбирают проводить свои моменты наслаждения вместе с Caffè Bonini.</p>
                            {/* Ссылка на скачивание с диска */}
                            <a className='about-us__button' href="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=18deO5tCYrLrEfe8XYpCVuxM0qI48fUQR" download>Скачать каталог</a></Col>
                    </Row>
                </Container>
            </Container>

            <Container fluid className='about-us__block'>
                <Container>
                    <Row>
                        <Col lg>
                            <h2>Почему мы?</h2>
                            <p>Без ущерба для качества Caffè Bonini предлагает конкурентоспособные цены как для самого продукта, так и для доставки.</p>
                            <p>Нашим приоритетом является удовлетворение клиента, и вы можете быть уверены, что вы получите всю помощь во время работы с нами.</p>
                        </Col>
                        <Col lg>
                            <img src={img2} alt="Our advantages" />
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container fluid className='about-us__parallax parallax__1'>
            </Container>

            <Container fluid className='about-us__block'>
                <Container>
                    <Row>
                        <Col lg>
                        <img src={img3} alt="Coffee beans" />
                        </Col>
                        <Col lg>
                            <h2>Насыщенность вкуса</h2>
                            <p>В мире, где аромат кофе становится настоящим искусством, мы приглашаем вас на нашу кулинарную экспедицию в мир удовольствия и бодрости. В нашем магазине вы найдете не просто кофе, а настоящее произведение искусства. Для нас кофе - это страсть, и мы хотим поделиться этой страстью с вами.</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
}

export default AboutUs;

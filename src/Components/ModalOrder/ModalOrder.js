import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import './ModalOrder.scss';

const ModalOrder = ({ innerContent, className, buttonInner }) => {
    const [showConfirm, setShowConfirm] = useState(false);
    const [show, setShow] = useState(false);
    const [cartProducts, setCartProducts] = useState('');
    const form = useRef();
    const [validated, setValidated] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCloseConfirm = () => setShowConfirm(false);
    const handleShowConfirm = () => setShowConfirm(true);

    
    // Отправка сообщения на почту
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_blc6fmm', 'template_gao59ps', form.current, 'pwfsWchJgGbipbQo-')
            .then((result) => {
                console.log(result.text);
                console.log("Успешно")
            }, (error) => {
                console.log(error.text);
            });
    };
    // Проверка валидности формы
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        if (form.checkValidity() === true) {
            orderConfirm(event);
            sendEmail(event);
        }
        setValidated(true);
    };
    // Открытие второй модалки и закрытие первой
    function orderConfirm(event) {
        event.preventDefault();
        handleClose();
        handleShowConfirm()
    }

    useEffect(() => {
        try {
          // Получаем с локалсторейдж массив объектов по ключу items
            const storedCartProduct = JSON.parse(localStorage.getItem('productsInCart'));
            let outputCartProducts = [];
            storedCartProduct.map(product => (
                outputCartProducts.push(`----Название товара: ${product.title}, Сколько заказали: ${product.amountInCart} , Id товара: ${product.id}, Ссылка на товар: ${product.url}, Цена за 1 товар ${product.price} сом ----`)
            ));


            setCartProducts(JSON.stringify(outputCartProducts));
        } catch (err) { 
            console.log(err)
        }
      },[])

    return (
        <>
            <button className={className} onClick={handleShow}>
                {innerContent} {buttonInner}
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='modal-title'>Оформление заказа</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-body'>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} ref={form}>
                        <Form.Group className="mb-3" controlId="validationMail">
                            <Form.Label>Электронная почта</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                name="user_email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="validationUserName">
                            <Form.Label>Ваше имя</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="user_name"
                                placeholder="Имя"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="validationUserNumber">
                            <Form.Label>Номер телефона</Form.Label>
                            <Form.Control
                                required
                                type="tel"
                                name="user_number"
                                placeholder="+996557662291"
                            />
                        </Form.Group>
                        {/* <Form.Group
                            className="mb-3"
                            controlId="validationOrderText">
                            <Form.Label>Содержимое заказа</Form.Label>
                            <Form.Control
                                required
                                name="message" as="textarea" rows={3} />
                        </Form.Group> */}
                        <Form.Group
                            className="mb-3"
                            controlId="validationOrderText" id={"orderInputArea"}>    
                            <Form.Label>Содержимое заказа</Form.Label>
                            <Form.Control
                                required
                                name="message" value={cartProducts}
                                onChange={(e) => setCartProducts(e.target.value)}
                                readOnly as="textarea" rows={3} />
                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Закрыть
                            </Button>
                            <Button type="submit">Подтвердить</Button>
                        </Modal.Footer>


                    </Form>
                </Modal.Body>
            </Modal>

            <Modal show={showConfirm} onHide={handleCloseConfirm}>
                <Modal.Header closeButton>
                    <Modal.Title>Заказ успешно оформлен</Modal.Title>
                </Modal.Header>
                <Modal.Body>В ближайшее время с вами свяжется менеджер, для подтверждения заказа.</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleCloseConfirm}>
                        Закрыть
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalOrder;

import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ModalOrder.scss';


const ModalOrderConfirm = ({innerContent, className, buttonInner}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Заказ успешно оформлен</Modal.Title>
                </Modal.Header>
                <Modal.Body>В ближайшее время с вами свяжется менеджер, для подтверждения заказа.</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Закрыть
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalOrderConfirm;

import React from 'react';
import { Container } from 'react-bootstrap';
import "./Notfoundpage.scss"
const Notfoundpage = () => {
    return (
        <div className='notfound'>
            <Container>
                <h1>Ошибка 404 <br/> Страница не найдена</h1>
            </Container>
        </div>
    );
}

export default Notfoundpage;

import React, { useEffect, useState } from 'react';
import { activate } from '../../http/userAPI';
import { Container, Alert } from 'react-bootstrap';


const ActivatePage = () => {
    const [acivate, setActive] = useState({});

    useEffect(() => {

        async function checkTokenActivated() {
            let currentUrl = window.location.pathname;
            const token = await activate(currentUrl.substring(currentUrl.lastIndexOf('/') + 1, currentUrl.length));
            if (token.email != null)
                setActive(token);
        }
        checkTokenActivated();
    }, []);// use effect with out dependencies call two times. In production mode ones

    return (
        <Container className='d-flex justify-content-center align-items-center'
            style={{ height: window.innerHeight - 54 }}>
            <Alert variant='success'>
                <div className='d-flex flex-column align-items-center'>
                    <p>Ваша электронная почта: {acivate.email} успешно активирована.</p>
                    <a href='/login'>Перейти на страницу авторизации</a>
                </div>
            </Alert>
        </Container >
    );
}

export default ActivatePage;

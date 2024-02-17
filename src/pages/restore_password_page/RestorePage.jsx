import React, { useEffect, useState } from 'react';
import { restorePasswordGet, restorePasswordPost } from '../../http/userAPI';
import { Container, Alert, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../utils/Paths';

const RestorePage = () => {

    // const [existsToken, setExistsToken] = useState(false);

    const currentUrl = window.location.pathname;
    const token = currentUrl.slice(currentUrl.lastIndexOf('/') + 1, currentUrl.length);

    useEffect(() => {

        async function checkRestoreToken() {
            await restorePasswordGet(token);
        }
        checkRestoreToken(token);
    }, // eslint-disable-next-line 
        []
    );

    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [restore, setRestore] = useState(false);

    const restorePassword = async () => { setRestore(await restorePasswordPost(token, { password1, password2 })) };

    useEffect(() => {

        async function checkRestoreToken() {
            await restorePasswordGet(token);
        }
        checkRestoreToken(token);
    }, // eslint-disable-next-line 
        []
    );

    return (
        <Container
            className='d-flex justify-content-center align-items-center flex-column'
            style={{ height: window.innerHeight - 54 }}>
            {restore ?
                <Alert variant='success'>
                    <p>Пароль успешно изменен</p>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className='mt-2'>
                            <NavLink to={LOGIN_ROUTE}>Вернуться на страницу авторизации</NavLink>
                        </div>
                    </div>
                </Alert> :
                <Form>
                    <h3>Изменение пароля</h3>
                    <Form.Group>
                        <Form.Label>
                            Новый пароль
                        </Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='новый пароль'
                            onChange={(e) => setPassword1(e.target.value)}
                        />
                        {password1.length < 8 ?
                            <Alert variant='primary' className='mt-2'>
                                Пароль должен иметь длину более 8 символов<br />
                                и содержать не менее одной латинской буквы
                            </Alert>
                            :
                            <></>}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className='mt-3'>
                            Повторите новый пароль
                        </Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='новый пароль'
                            onChange={(e) => setPassword2(e.target.value)}
                        />
                        {(password1 !== password2) && password2 && password2.length ?
                            <Alert variant='warning' className='mt-2'>
                                Пароли не совпадают
                            </Alert> : <></>}
                    </Form.Group>
                    <Button
                        variant='success'
                        className='mt-3'
                        onClick={restorePassword}
                    >Изменить пароль</Button>
                </Form>
            }
        </Container >
    );
}

export default RestorePage;

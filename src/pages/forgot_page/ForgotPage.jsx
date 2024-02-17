import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Row, Alert } from 'react-bootstrap';
import { forgotPassword } from '../../http/userAPI';
import { LOGIN_ROUTE } from '../../utils/Paths';
import { NavLink } from 'react-router-dom';


const ForgotPage = () => {

    const [restoreEmail, setRestoreEmail] = useState('');
    const [answer, setAnswer] = useState({ email: '' });
    useEffect(
        () => {
            // console.log(answer.email)
        },
        [answer]
    )
    return (
        <Container
            className='d-flex justify-content-center align-items-center flex-column'
            style={{ height: window.innerHeight - 54 }}>
            {answer.email === '' ?
                <>
                    <Form>
                        <h2>Восстановление пароля</h2>
                        <Form.Group>
                            <Form.Label>
                                Введите адрес электронной почты для восстановления пароля
                            </Form.Label>
                            <Form.Control
                                type='email'
                                className='mt-3'
                                onChange={(e) => setRestoreEmail(e.target.value)}
                                placeholder='email'
                            />
                        </Form.Group>
                        <Button
                            variant='outline-primary'
                            className='mt-2'
                            onClick={async () => setAnswer(
                                await forgotPassword({ email: restoreEmail }))
                            }>Восстановить пароль
                        </Button>
                    </Form>

                    <Row className="d-flex justify-content-between pl-3 pr-3">
                        <div className='mt-2'>
                            Вспомнили пароль?
                            <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
                        </div>
                    </Row>
                </> :
                answer.email != null ?
                    <Alert variant='success'>
                        <p>Ссылка для востановления пароля отправлена вам на электронную почту: {answer.email}</p>
                        <p>Для восстановления пароля пройдите по ссылке указанной в письме</p>
                        <NavLink to={LOGIN_ROUTE}>Вернуться на страницу авторизации</NavLink>

                    </Alert>
                    :
                    <Alert variant='warning'>
                        <p>Электронная почта не найдена или введена некорректно</p>
                        <Button
                            variant='warning'
                            onClick={() => setAnswer({ email: '' })}
                        >
                            Повторить
                        </Button>
                    </Alert>
            }
        </Container>
    );
}

export default ForgotPage;
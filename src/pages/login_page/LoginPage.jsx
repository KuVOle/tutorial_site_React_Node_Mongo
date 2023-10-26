import React, { useState, useRef, useEffect } from "react";
import { Form, Container, Card, Button, Row, Alert } from "react-bootstrap";
import "./loginPage.css";
import { NavLink } from "react-router-dom";
import { FORGOT_PASSWORD, REGISTRATION_ROUTE } from "../../utils/Paths";
import { loginAPI } from "../../http/userAPI";
import { useNavigate } from "react-router-dom";
import { MAIN_STUDENT_ROUTE, MAIN_TEACHER_ROUTE } from "../../utils/Paths";
import jwt_decode from "jwt-decode";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({});
  const inputEmail = useRef("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.token) {
      console.log(localStorage.token);
      if (jwt_decode(localStorage.token)?.role === "student")
        navigate(MAIN_STUDENT_ROUTE);
      if (jwt_decode(localStorage.token)?.role === "teacher")
        navigate(MAIN_TEACHER_ROUTE);
    }
    // eslint-disable-next-line
  }, []);

  const login = async () => {
    let res = await loginAPI({
      email: email,
      password: password,
      activateEmail: "",
    });
    setData(res);
    inputEmail.current = email;

    if (jwt_decode(res.jwtToken)?.role === "student")
      navigate(MAIN_STUDENT_ROUTE);

    if (jwt_decode(res?.jwtToken)?.role === "teacher")
      navigate(MAIN_TEACHER_ROUTE);
  };

  const sendActivateEmail = async () => {
    await loginAPI({
      email: email,
      password: password,
      activateEmail: inputEmail.current,
    });
    setData({});
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight }}
    >
      <Card className=".cardWidth p-5">
        <h2 className="m-auto">Авторизация</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-5"
            placeholder="Введите Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Form.Control
            className="mt-4"
            type="password"
            placeholder="Введите пароль"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button variant="outline-success" className="mt-2" onClick={login}>
            Войти
          </Button>
        </Form>
        {data?.noActivate === true ? (
          <Alert variant="warning" className="mt-3 d-flex flex-column">
            <p>Ваш аккаунт не активирован.</p>
            <p>
              Для активации перейдите по ссылке отправленной вам на электронную
              почту.
            </p>
            <Button variant="warning" onClick={sendActivateEmail}>
              Отправить пиьсмо повторно
            </Button>
          </Alert>
        ) : (
          <></>
        )}
        {data.incorectData === true ? (
          <Alert
            variant="danger"
            className="mt-3 d-flex justify-content-center"
          >
            <p>Неверный логин или пароль</p>
          </Alert>
        ) : (
          <></>
        )}
        <hr />
        <Row>
          <div className="mt-1">
            Нет аккаунта?
            <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink>
          </div>
          <div className="mt-1">
            Забыли пароль?
            <NavLink to={FORGOT_PASSWORD}>Восстановить пароль</NavLink>
          </div>
        </Row>
      </Card>
    </Container>
  );
};

export default LoginPage;

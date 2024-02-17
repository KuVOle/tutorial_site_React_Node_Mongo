import React, { useState } from "react";
import "./registrationPage.css";
import { NavLink } from "react-router-dom";
import {
  Form,
  Container,
  Card,
  Button,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import CloseButton from "react-bootstrap/CloseButton";
import { LOGIN_ROUTE } from "../../utils/Paths";
import background from "../../static_file/bacround_img.png";
import { registration } from "../../http/userAPI";

const RegistrationPage = () => {
  const variantClass = ["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const variantItems = [
    "",
    "алгебра",
    "геометрия",
    "физика",
    "русский",
    "литература",
    "английский",
  ];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [currentСlass, setCurrentClass] = useState("");
  const [subject, setSubject] = useState("");
  const [selectedSubject, setSelectedSubject] = useState([]);
  const [parentName, setParentName] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [parentEmail, setParentEmail] = useState("");

  const addNewLesson = (newLesson) => {
    if (!selectedSubject.includes(newLesson) && newLesson !== "") {
      const copy = Object.assign([], selectedSubject);
      copy.push(newLesson);
      setSubject(newLesson);
      setSelectedSubject(copy);
    }
  };
  const deleteLesson = (delLesson) => {
    const copy = Object.assign([], selectedSubject);
    if (copy.includes(delLesson)) {
      copy.splice(copy.indexOf(delLesson, 0), 1);
      setSelectedSubject(copy);
    }
  };

  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <Container className="d-flex justify-content-center align-items-center">
        <Card className=".cardWidth p-5">
          <h2 className="m-auto">Регистрация</h2>
          <Form className="d-flex flex-column">
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                placeholder="пароль"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Ваше имя</Form.Label>
              <Form.Control
                type="text"
                placeholder="имя"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Ваша фамилия</Form.Label>
              <Form.Control
                type="text"
                placeholder="фамилия"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Ваш телефон</Form.Label>
              <Form.Control
                type="text"
                placeholder="телефон"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Текущий класс</Form.Label>
              <Form.Select
                value={currentСlass}
                onChange={(event) => setCurrentClass(event.target.value)}
              >
                {variantClass.map((el, index) =>
                  index !== 0 ? (
                    <option key={index} value={el}>
                      {el} класс
                    </option>
                  ) : (
                    <option disabled key={index} value={el}>
                      {el}
                    </option>
                  )
                )}
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label>Выбранные предметы</Form.Label>
              <Form.Select
                multiple={false}
                value={subject}
                onChange={(e) => addNewLesson(e.target.value)}
              >
                {variantItems.map((el, index) => (
                  <option key={index} value={el}>
                    {el}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <ListGroup className="pt-3">
              {selectedSubject.length ? (
                selectedSubject.map((item, index) => (
                  <ListGroupItem key={index}>
                    <div key={index} className="d-flex justify-content-between">
                      {item}
                      <CloseButton
                        key={index}
                        onClick={() => deleteLesson(item)}
                        className="btn-secondary"
                      ></CloseButton>
                    </div>
                  </ListGroupItem>
                ))
              ) : (
                <ListGroup>- Нет выбранных предметов -</ListGroup>
              )}
            </ListGroup>

            <h2 className="mt-3">Информация для связи с родителями</h2>
            <Form.Group>
              <Form.Label>Имя родителя</Form.Label>
              <Form.Control
                type="text"
                placeholder="имя"
                value={parentName}
                onChange={(event) => setParentName(event.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email родителя</Form.Label>
              <Form.Control
                type="email"
                placeholder="email"
                value={parentEmail}
                onChange={(event) => setParentEmail(event.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Телефон родителя</Form.Label>
              <Form.Control
                type="phone"
                placeholder="телефон"
                value={parentPhone}
                onChange={(event) => setParentPhone(event.target.value)}
              />
            </Form.Group>

            <Button
              variant="outline-primary"
              className="mt-2"
              onClick={() =>
                registration({
                  email,
                  password,
                  firstName,
                  lastName,
                  phone,
                  currentСlass,
                  selectedSubject,
                  parentName,
                  parentPhone,
                  parentEmail,
                })
              }
            >
              Зарегистрироваться
            </Button>
          </Form>
          <hr />
          <div className="d-flex justify-content-center align-items-center">
            <div className="mt-2">
              Есть аккаунт?
              <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default RegistrationPage;

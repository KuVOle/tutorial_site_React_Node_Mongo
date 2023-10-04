import React, { useState, useEffect } from "react";
import StudentNavBar from "../../components/StudentNavBar/StudentNavBar";
import { getProfile } from "../../http/studentAPI";
import { Form, Col, Row, Container } from "react-bootstrap";
import ChengeProfileButton from "../../components/Buttons/ChengeProfileButton/ChengeProfileButton";
import AlertSuccess from "../../components/alert/AlertSuccess";

const StudentProfilePage = () => {
  const [startData, setStartData] = useState({});
  const arrClass = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  useEffect(() => {
    const data = async () => {
      let serverRes = await getProfile();
      setStartData(serverRes);
    };
    data();
  }, []);

  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [parentName, setParentName] = useState(null);
  const [parentPhone, SetParentPhone] = useState(null);
  const [phone, setPhone] = useState(null);
  const [currentСlass, setCurrentClass] = useState(null);
  const [result, setResult] = useState(null);

  const setResultChild = (result) => setResult(result);
  const nullAllFields = () => {
    setFirstName(null);
    setLastName(null);
    setParentName(null);
    setPhone(null);
    setCurrentClass(null);
  };
  return (
    <>
      <StudentNavBar />
      <Container>
        {result?.data?.status ? <AlertSuccess /> : <></>}
        <Form className="pt-3">
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="4">
              <p>Текущий email:</p>
            </Form.Label>
            <Col sm="7">
              <Form.Control plaintext readOnly defaultValue={startData.email} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="">
            <Form.Label column sm="4">
              Имя: {startData.firstName}
            </Form.Label>
            <Col sm="7">
              <Form.Control
                type="text"
                placeholder="Новое имя"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="">
            <Form.Label column sm="4">
              Фамилия: {startData.lastName}
            </Form.Label>
            <Col sm="7">
              <Form.Control
                type="text"
                placeholder="Новая фамилия"
                onChange={(e) => setLastName(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="">
            <Form.Label column sm="4">
              Телефон: ({startData.phone})
            </Form.Label>
            <Col sm="7">
              <Form.Control
                type="text"
                placeholder="новый телефон"
                onChange={(e) => setPhone(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="">
            <Form.Label column sm="4">
              Класс: ' {startData.currentСlass} '
            </Form.Label>
            <Col sm="7">
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setCurrentClass(e.target.value)}
              >
                <option>выбрать класс</option>
                {arrClass.map((el) => {
                  return (
                    <option key={el} value={el}>
                      {el}
                    </option>
                  );
                })}
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="4">
              Имя родителя: {startData.parentName}
            </Form.Label>
            <Col sm="7">
              <Form.Control
                type="text"
                placeholder="новое имя родителя"
                onChange={(e) => setParentName(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="4">
              Телефон родителя: ({startData.parentPhone})
            </Form.Label>
            <Col sm="7">
              <Form.Control
                type="text"
                placeholder="новоый телефон родителя"
                onChange={(e) => SetParentPhone(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="">
            <Form.Label column sm="4">
              <p>Выбранные предметы:</p>
            </Form.Label>
            <Col sm="7">
              {startData?.selectedSubject?.length ? (
                startData.selectedSubject.map((subject) => {
                  return subject + " ";
                })
              ) : (
                <p>Список пуст</p>
              )}
            </Col>
          </Form.Group>
          <ChengeProfileButton
            props={{
              firstName,
              lastName,
              phone,
              parentName,
              parentPhone,
              currentСlass,
              setResultChild,
              nullAllFields,
            }}
          />
        </Form>
      </Container>
    </>
  );
};

export default StudentProfilePage;

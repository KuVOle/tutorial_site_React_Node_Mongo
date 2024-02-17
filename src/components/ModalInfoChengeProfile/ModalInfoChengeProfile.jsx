import React, { useState } from "react";
import { Button, Modal, Form, InputGroup } from "react-bootstrap";
import { setNewPriceAPI } from "../../http/teacherAPI";

const ModalInfoChengeProfile = ({ propsModalStudentInfo }) => {
  const { showStudentProfile, handleCloseStudentProfile, props } =
    propsModalStudentInfo;
  const {
    currentСlass,
    firstName,
    lastName,
    parentName,
    parentPhone,
    phone,
    selectedSubject,
    priceArr,
    _id,
  } = props;
  console.log(
    "res",
    priceArr.find((item) => item.subject === "алгебра")?.price
  );
  const [newPrice, setNewPrice] = useState({});
  return (
    <>
      <Modal show={showStudentProfile} onHide={handleCloseStudentProfile}>
        <Modal.Header closeButton>
          <Modal.Title>Информация об ученике</Modal.Title>
        </Modal.Header>
        <Modal.Body>Имя: {firstName}</Modal.Body>
        <Modal.Body>Фамилия: {lastName}</Modal.Body>
        <Modal.Body>Телефон: {phone}</Modal.Body>
        <Modal.Body>
          Выбранные предметы: {selectedSubject.map((el) => el + " ")}
        </Modal.Body>
        <Modal.Body>Имя родителя: {parentName}</Modal.Body>
        <Modal.Body>Телефон родителя: {parentPhone}</Modal.Body>
        <Modal.Body>Класс: {currentСlass}</Modal.Body>
        <Modal.Body>
          {selectedSubject.map((el) => (
            <InputGroup key={el} className="mb-3">
              <InputGroup.Text id="basic-addon1">
                {el}:{" "}
                {priceArr.find((item) => item.subject === el)?.price !==
                undefined ? (
                  priceArr.find((item) => item.subject === el)?.price
                ) : (
                  <> цена не задана</>
                )}
              </InputGroup.Text>
              <Form.Control
                placeholder="стоймость"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) =>
                  setNewPrice({ price: e.target.value, subject: el, _id: _id })
                }
              />
              <Button onClick={() => setNewPriceAPI(newPrice)}>
                Установить
              </Button>
            </InputGroup>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseStudentProfile}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={handleCloseStudentProfile}>
            Изменить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalInfoChengeProfile;

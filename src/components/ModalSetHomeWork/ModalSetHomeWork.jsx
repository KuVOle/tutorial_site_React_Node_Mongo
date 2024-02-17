import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import CalendarComponent from "../Calendar/CalendarComponent";
import { createNewHomeWork } from "../../http/teacherAPI";

const ModalSetHomeWork = ({ props }) => {
  const { showHomeWork, handleClose, _id, selectedSubject } = props;
  const [subject, setSubject] = useState(selectedSubject[0]);
  const [example, setExample] = useState(null);
  const [selectedDates, setSelectedDates] = useState([]);
  const handleChange = (e) => setSelectedDates(e);
  const sendAPI = () => {
    console.log("sendAPI");
    console.log(selectedDates);
    createNewHomeWork({
      _id,
      subject,
      example,
      taskDate: selectedDates[0],
    });
    handleClose();
  };
  return (
    <>
      <Modal show={showHomeWork} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Задать домашнее задание</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Select onChange={(e) => setSubject(e.target.value)}>
                {selectedSubject.map((el) => (
                  <option key={el}>{el}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Домашнее задание</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => setExample(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <CalendarComponent props={{ selectedDates, handleChange }} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={sendAPI}>
            Отправить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalSetHomeWork;

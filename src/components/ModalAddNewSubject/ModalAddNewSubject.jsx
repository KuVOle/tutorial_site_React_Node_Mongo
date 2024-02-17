import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { addNewSubject } from "../../http/teacherAPI";
const ModalAddNewSubject = ({ props }) => {
  const { show, showModal } = props;
  const [subject, setNewSubject] = useState("");
  return (
    <>
      <Modal show={show} onHide={showModal}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="display-4">Добавить предмет</p>
          <Form>
            <Form.Control
              type="text"
              placeholder="новый предмет"
              onChange={(e) => setNewSubject(e.target.value)}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => {
              addNewSubject(subject);
              showModal();
            }}
          >
            Добавить
          </Button>
          <Button variant="secondary" onClick={showModal}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAddNewSubject;

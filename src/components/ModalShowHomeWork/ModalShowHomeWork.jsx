import React from "react";
import { Button, Modal } from "react-bootstrap";
import { getCurrntDate } from "../../utils/methodsFromDate";

const ModalShowHomeWork = ({ propsShowHomeWork }) => {
  const { showHomeWork, handleCloseShowHomeWork, value } = propsShowHomeWork;
  const date = getCurrntDate(value.taskDate);

  return (
    <>
      <Modal show={showHomeWork} onHide={handleCloseShowHomeWork}>
        <Modal.Header closeButton>
          <Modal.Title>
            {value.subject} {date.day}.{date.month}.{date.year} (
            {date.dayOfTheWeek})
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Задание: {value.example}</p>
          <p>Ваш коментарий: {value.comment}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseShowHomeWork}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalShowHomeWork;

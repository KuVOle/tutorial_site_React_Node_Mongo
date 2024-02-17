import React from "react";
import { Button, Modal } from "react-bootstrap";
import { deleteUserAPI } from "../../http/teacherAPI";

const ModalDeleteUser = ({ propsUserDelete }) => {
  const { showStudentDelete, handleCloseStudentDelete, props } =
    propsUserDelete;
  const { firstName, lastName, _id } = props;

  const deleteUserAndCloseModal = () => {
    deleteUserAPI(_id).then((res) => {
      if (res?.statusDelete) {
        window.location.reload();
      }
    });
    handleCloseStudentDelete();
  };

  return (
    <>
      <Modal show={showStudentDelete} onHide={handleCloseStudentDelete}>
        <Modal.Header closeButton>
          <Modal.Title>
            Удалить ученика {firstName} {lastName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="display-1">Вы уверены?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseStudentDelete}>
            Закрыть
          </Button>
          <Button variant="danger" onClick={deleteUserAndCloseModal}>
            Удалить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteUser;

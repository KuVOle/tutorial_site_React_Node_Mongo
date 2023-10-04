import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import ModalSetHomeWork from "../../components/ModalSetHomeWork/ModalSetHomeWork";
import ModalInfoChengeProfile from "../ModalInfoChengeProfile/ModalInfoChengeProfile";
import ModalDeleteUser from "../ModalDeleteUser/ModalDeleteUser";

const StudentCard = ({ props }) => {
  const [showHomeWork, setShowHomeWork] = useState(false);
  const [showStudentProfile, setShowStudentProfile] = useState(false);
  const [showStudentDelete, setShowStudentDelete] = useState(false);

  const { firstName, lastName, currentСlass, selectedSubject, _id } = props;

  const handleClose = () => setShowHomeWork(false);
  const handleShow = () => setShowHomeWork(true);

  const handleCloseStudentProfile = () => setShowStudentProfile(false);
  const handleShowStudentProfile = () => setShowStudentProfile(true);

  const handleCloseStudentDelete = () => setShowStudentDelete(false);
  const handleShowStudentDelete = () => setShowStudentDelete(true);

  return (
    <Card style={{ width: "100%" }}>
      <Card.Body>
        <Card.Title>
          {firstName} {lastName}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {currentСlass} класс{" "}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          Предметы: {selectedSubject.map((el) => el + " ")}
        </Card.Subtitle>
        <Card.Link>
          <Button variant="primary" onClick={handleShow}>
            Задать домашнее задание
          </Button>
          <ModalSetHomeWork
            props={{ handleClose, showHomeWork, _id, selectedSubject }}
          />
        </Card.Link>
        <Card.Link>
          <Button variant="info" onClick={handleShowStudentProfile}>
            Информация/изменеия
          </Button>
          <ModalInfoChengeProfile
            propsModalStudentInfo={{
              showStudentProfile,
              handleCloseStudentProfile,
              props,
            }}
          />
        </Card.Link>
        <Card.Link>
          <Button variant="danger" onClick={handleShowStudentDelete}>
            Удалить ученика
          </Button>
          <ModalDeleteUser
            propsUserDelete={{
              showStudentDelete,
              handleCloseStudentDelete,
              props,
            }}
          />
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default StudentCard;

import React, { useEffect, useState } from "react";
import TeacherNavBar from "../../components/TeacherNavBar/TeacherNavBar";
import { Button, Container, Form } from "react-bootstrap";
import { getSubjectList } from "../../http/teacherAPI";
import ModalAddNewSubject from "../../components/ModalAddNewSubject/ModalAddNewSubject";
import ModalAddNewBook from "../../components/ModalAddNewBook/ModalAddNewBook";

const TeacherAddNewBook = () => {
  const [startData, setStartData] = useState([]);
  const [show, setShow] = useState(false);
  const showModal = () => setShow((prev) => !prev);
  const [showAddNewBook, setShowAddNewBook] = useState(false);
  const showModalAddNewBook = () => setShowAddNewBook((prev) => !prev);
  useEffect(() => {
    const data = async () => {
      //   const res = await getSubjectList();
      //   setStartData(res);
    };
    data();
  }, []);

  return (
    <>
      <TeacherNavBar />
      <Container>
        <ModalAddNewSubject props={{ showModal, show }} />
        <ModalAddNewBook props={{ showModalAddNewBook, showAddNewBook }} />
        <div className="mt-3">
          <Button onClick={() => showModalAddNewBook()}>
            Добавить учебник
          </Button>
          <Button onClick={() => showModal()}>Добавить предмет</Button>
        </div>

        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="mb-3">
              Выберете предмет для загрузки учебника
            </Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default TeacherAddNewBook;

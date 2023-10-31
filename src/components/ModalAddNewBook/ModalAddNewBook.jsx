import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { getSubjectsList, addNewBook } from "../../http/teacherAPI";

const ModalAddNewBook = ({ props }) => {
  const { showModalAddNewBook, showAddNewBook } = props;
  const [description, setDescription] = useState("");
  const [startData, setStartData] = useState({});
  const [classNumber, setClassNumber] = useState(1);
  const [subject, setSubject] = useState("");
  const [author, setAuthor] = useState("");
  const [file, setFile] = useState();
  useEffect(() => {
    const getStartData = async () => {
      const res = await getSubjectsList();
      setStartData(res?.data);
    };
    getStartData();
  }, []);
  const getFile = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };
  return (
    <>
      <Modal show={showAddNewBook} onHide={showModalAddNewBook}>
        <Modal.Header>
          <p className="display-4">Добавить учебник</p>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2">
              <Form.Control
                type="text"
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Автор учебника"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Описание учебника"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Select onChange={(e) => setSubject(e.target.value)}>
                <option disabled>--выберите предмет--</option>
                {startData?.subject &&
                  startData.subject.map((el) => (
                    <option key={el} value={el}>
                      {el}
                    </option>
                  ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Select onChange={(e) => setClassNumber(e.target.value)}>
                <option disabled>--выберите класс--</option>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((el) => (
                  <option key={el} value={el}>
                    {el}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Выберите файл</Form.Label>
              <Form.Control type="file" onChange={getFile} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() =>
              addNewBook({ description, author, subject, classNumber }, file)
            }
          >
            Добавить
          </Button>
          <Button variant="secondary" onClick={showModalAddNewBook}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAddNewBook;

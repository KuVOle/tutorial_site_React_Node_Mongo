import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FileHomeWork from "../FileHomeWork/FileHomeWork";
import SendHomeWork from "../Buttons/SendHomeWork/SendHomeWork";

const ChengeFile = ({ value }) => {
  const [files, setFiles] = useState([]);
  const [comment, setComment] = useState("");
  const getFile = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      const fileTmp = [];
      for (let el in e.target.files) {
        fileTmp[el] = e.target.files[el];
      }
      const sortArr = fileTmp.filter((el) => {
        let { name } = el;
        name = name.toLowerCase();
        if (
          name.indexOf(".jpeg") !== -1 ||
          name.indexOf(".heic") !== -1 ||
          name.indexOf(".jpg") !== -1 ||
          name.indexOf(".png") !== -1
        )
          return true;
        return false;
      });
      setFiles([...files, ...sortArr]);
    }
  };

  return (
    <Form.Group controlId="formFileMultiple" type="file" className="mb-3">
      <Form.Label>Коментарии к домашнему заданию</Form.Label>
      <Form.Control
        as="textarea"
        rows={1}
        className="mb-2"
        onChange={(e) => setComment(e.target.value)}
      />

      <Form.Control type="file" multiple onChange={getFile} />
      <div className="d-flex">
        {files.map((el, index) => (
          <FileHomeWork key={index} file={el} state={setFiles} files={files} />
        ))}
      </div>
      <>
        {files.length === 0 ? (
          <></>
        ) : (
          <SendHomeWork files={files} homeWork={{ value, comment }} />
        )}
      </>
    </Form.Group>
  );
};

export default ChengeFile;

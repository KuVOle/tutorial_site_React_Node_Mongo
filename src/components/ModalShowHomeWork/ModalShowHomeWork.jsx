import React, { useEffect, useState } from "react";
import { Button, Modal, Image } from "react-bootstrap";
import { getCurrntDate } from "../../utils/methodsFromDate";
import { getHomeWork } from "../../http/studentAPI";
import Spiner from "../Spiner/Spiner";

const ModalShowHomeWork = ({ propsShowHomeWork }) => {
  const { showHomeWork, handleCloseShowHomeWork, value } = propsShowHomeWork;
  const date = getCurrntDate(value.taskDate);
  const [imagesURL, setImagesURL] = useState([]);
  // const [spiner, setSpiner] = useState(false);
  useEffect(() => {
    const serverRes = async () => {
      if (showHomeWork) {
        return await getHomeWork(value?._id);
      }
    };
    if (showHomeWork)
      serverRes()
        .then(async (res) => {
          setImagesURL(res.data.imgesPaths);
        })
        .catch((err) => console.log(err));
  }, [showHomeWork, value?._id]);
  console.log(imagesURL);
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
        <Modal.Body>
          {imagesURL.length ? (
            imagesURL.map((img) => <Image key={img} src={img} alt="dont" />)
          ) : (
            <Spiner />
          )}
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

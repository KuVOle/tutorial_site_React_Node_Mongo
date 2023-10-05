import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import ChengeFile from "../ChengeFile/ChengeFile";
import { getCurrntDate } from "../../utils/methodsFromDate";
import ModalShowHomeWork from "../ModalShowHomeWork/ModalShowHomeWork";

const LessonsCard = ({ value }) => {
  const date = getCurrntDate(value?.taskDate);
  const [showHomeWork, setShowHomeWork] = useState(false);

  const handleCloseShowHomeWork = () => setShowHomeWork(false);
  const handleShowHomeWork = async () => setShowHomeWork(true);
  return (
    <Card border={value?.done ? "success" : "warning"} className="m-2">
      <Card.Header>{value?.lesson}</Card.Header>
      <Card.Body>
        <Card.Title>{value?.subject}</Card.Title>
        <Card.Title>
          Домашнее задание на: {date.day}.{date.month}.{date.year} (
          {date.dayOfTheWeek})
        </Card.Title>
        <Card.Text>Задание:{value?.example}</Card.Text>
        {value?.done ? (
          <>
            <Button variant="primary" onClick={handleShowHomeWork}>
              Просмотреть домашнее задание
            </Button>
            <ModalShowHomeWork
              propsShowHomeWork={{
                showHomeWork,
                handleCloseShowHomeWork,
                value,
              }}
            />
          </>
        ) : (
          <ChengeFile value={value} />
        )}
      </Card.Body>
    </Card>
  );
};

export default LessonsCard;

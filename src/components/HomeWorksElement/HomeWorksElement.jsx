import React from "react";
import { ListGroupItem } from "react-bootstrap";
import { getCurrntDate } from "../../utils/methodsFromDate";

const HomeWorksElement = ({ element }) => {
  const date = getCurrntDate(element.taskDate);
  return (
    <ListGroupItem className="mt-2 mb-2">
      <div>
        <h4>{element.subject}</h4>
        <p>
          {date.day}.{date.month}.{date.year} ({date.dayOfTheWeek})
        </p>
        <p>Задание: {element.example}</p>
        <div className="d-flex">
          <p>Ваш комментарий: </p>
          {element.comment ? (
            <p>{element.comment}</p>
          ) : (
            <p className="text-warning">-нет комментария-</p>
          )}
        </div>
        <div className="d-flex">
          <p>Задание отправлено:</p>
          {element.done ? (
            <p className="text-success"> Да</p>
          ) : (
            <p className="text-danger"> Нет</p>
          )}
        </div>
        <div className="d-flex">
          <p>Занятие проведено:</p>
          {element.carriedOut ? (
            <p className="text-success"> Да</p>
          ) : (
            <p className="text-danger"> Нет</p>
          )}
        </div>

        {element.grade ? (
          <>
            <div className="d-flex">
              <p>Оценка:</p>
              <p>{element.grade}</p>
            </div>
            <div className="d-flex">
              <p>Комментарий преподавателя:</p>
              <p>{element.teacherComment}</p>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </ListGroupItem>
  );
};

export default HomeWorksElement;

import React from "react";
import { ListGroupItem } from "react-bootstrap";
import { getCurrntDate } from "../../utils/methodsFromDate";

const HomeWorksElement = ({ element }) => {
  const {
    subject,
    comment,
    onfocus,
    done,
    example,
    carriedOut,
    grade,
    teacherComment,
  } = element;
  const { day, month, year, dayOfTheWeek } = getCurrntDate(element.taskDate);
  return (
    <ListGroupItem className="mt-2 mb-2">
      <div onMouseEnter={onfocus}>
        <h4>{subject}</h4>
        <p>
          {day}.{month}.{year} ({dayOfTheWeek})
        </p>
        <p>Задание: {example}</p>
        <div className="d-flex">
          <p>Ваш комментарий: </p>
          {comment ? (
            <p>{comment}</p>
          ) : (
            <p className="text-warning">-нет комментария-</p>
          )}
        </div>
        <div className="d-flex">
          <p>Задание отправлено:</p>
          {done ? (
            <p className="text-success"> Да</p>
          ) : (
            <p className="text-danger"> Нет</p>
          )}
        </div>
        <div className="d-flex">
          <p>Занятие проведено:</p>
          {carriedOut ? (
            <p className="text-success"> Да</p>
          ) : (
            <p className="text-danger"> Нет</p>
          )}
        </div>

        {grade ? (
          <>
            <div className="d-flex">
              <p>Оценка:</p>
              <p>{grade}</p>
            </div>
            <div className="d-flex">
              <p>Комментарий преподавателя:</p>
              <p>{teacherComment}</p>
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

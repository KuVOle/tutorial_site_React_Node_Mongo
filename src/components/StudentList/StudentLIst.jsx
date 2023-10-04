import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import StudentCard from "../StudentCard/StudentCard";

const StudentList = ({ props }) => {
  return (
    <ListGroup>
      {props.studentList.map((el, iter) => (
        <ListGroup.Item key={iter}>
          <StudentCard props={{ ...el }} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default StudentList;

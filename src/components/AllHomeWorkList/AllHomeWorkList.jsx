import React from "react";
import { ListGroup } from "react-bootstrap";
import HomeWorksElement from "../HomeWorksElement/HomeWorksElement";

const AllHomeWorkList = ({ homeWorks }) => {
  return (
    <ListGroup>
      {homeWorks.map((el) => (
        <HomeWorksElement key={el._id} element={{ ...el }} />
      ))}
    </ListGroup>
  );
};

export default AllHomeWorkList;

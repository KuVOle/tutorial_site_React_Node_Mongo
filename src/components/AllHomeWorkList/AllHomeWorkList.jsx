import React from "react";
import { ListGroup } from "react-bootstrap";
import HomeWorksElement from "../HomeWorksElement/HomeWorksElement";
import { observer } from "mobx-react-lite";

const AllHomeWorkList = observer(({ homeWorks }) => {
  const { hw, onfocus } = homeWorks;
  return (
    <ListGroup>
      {hw.map((el, index) => {
        if (index === hw.length - 1) {
          return <HomeWorksElement key={el._id} element={{ ...el, onfocus }} />;
        }
        return <HomeWorksElement key={el._id} element={{ ...el }} />;
      })}
    </ListGroup>
  );
});

export default AllHomeWorkList;

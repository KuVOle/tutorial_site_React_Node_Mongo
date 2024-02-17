import React from "react";
import { Button } from "react-bootstrap";
import { chengeStudentProfile } from "../../../http/studentAPI";

const ChengeProfileButton = ({ props }) => {
  return (
    <Button
      variant="primary"
      onClick={async () => {
        const res = await chengeStudentProfile(props);
        props.nullAllFields();
        props.setResultChild(res);
      }}
    >
      Изменить данные
    </Button>
  );
};

export default ChengeProfileButton;

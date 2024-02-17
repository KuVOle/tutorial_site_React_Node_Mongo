import React from "react";
import { Alert, Button } from "react-bootstrap";
import { MAIN_STUDENT_ROUTE } from "../../utils/Paths";
import { NavLink } from "react-router-dom";

const AlertSuccess = () => {
  return (
    <Alert
      variant="success"
      className=" d-flex justify-content-between align-items-center mt-2"
    >
      Ваши данные успешно изменены
      <Button variant="outline-success">
        <NavLink
          className="btn text-muted"
          variant="sucess"
          to={MAIN_STUDENT_ROUTE}
        >
          На главную
        </NavLink>
      </Button>
    </Alert>
  );
};

export default AlertSuccess;

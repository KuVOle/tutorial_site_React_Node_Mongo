import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { sendHomeWork } from "../../../http/studentAPI";
import Spiner from "../../Spiner/Spiner";

const SendHomeWork = ({ homeWork, files }) => {
  console.log("home work", homeWork);
  const [loading, setLoading] = useState(false);
  return (
    <Button
      variant="primary"
      className="mt-4 w-100"
      onClick={async () => {
        setLoading(true);
        await sendHomeWork(homeWork.value._id, files, homeWork.comment);
        window.location.reload();
      }}
    >
      Отправить
      {loading ? <Spiner /> : <></>}
    </Button>
  );
};

export default SendHomeWork;

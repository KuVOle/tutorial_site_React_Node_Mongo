import React, { useEffect, useState } from "react";
import { getStartInfo } from "../../http/studentAPI";
import StudentNavBar from "../../components/StudentNavBar/StudentNavBar";
import { Container } from "react-bootstrap";
import CalendarLessons from "../../components/CalendarLessons/CalendarLessons";

const StudentMainPage = () => {
  const [startData, setStartData] = useState({});

  useEffect(() => {
    const data = async () => {
      let serverRes = await getStartInfo();
      setStartData(serverRes);
    };
    data();
  }, []);

  return (
    <>
      <StudentNavBar user={startData?.user} />
      <Container>
        <CalendarLessons value={startData?.notHeldClasses} />
      </Container>
    </>
  );
};

export default StudentMainPage;

import React, { useState, useEffect } from "react";
import { getStudentList } from "../../http/teacherAPI";
import TeacherNavBar from "../../components/TeacherNavBar/TeacherNavBar";
import { Container } from "react-bootstrap";
import CalendarLessons from "../../components/CalendarLessons/CalendarLessons";

const TeacherMainPage = () => {
  const [startData, setStartData] = useState({});

  useEffect(() => {
    const data = async () => {
      let serverRes = await getStudentList();
      setStartData(serverRes);
    };
    data();
  }, []);
  return (
    <>
      <TeacherNavBar />
      <Container>
        <CalendarLessons value={startData?.notHeldClasses} />
      </Container>
    </>
  );
};

export default TeacherMainPage;

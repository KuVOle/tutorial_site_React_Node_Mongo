import React, { useEffect, useState } from "react";
import TeacherNavBar from "../../components/TeacherNavBar/TeacherNavBar";
import { Container } from "react-bootstrap";
import { getStudentList } from "../../http/teacherAPI";
import StudentList from "../../components/StudentList/StudentLIst";
import AlertEmptiList from "../../components/alert/AlertEmptiList";

const StudentListPage = () => {
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
        <h2 className="mt-2 text-center">Мои ученики</h2>
        {startData?.studentList?.length ? (
          <StudentList props={{ ...startData }} />
        ) : (
          <AlertEmptiList />
        )}
      </Container>
    </>
  );
};

export default StudentListPage;

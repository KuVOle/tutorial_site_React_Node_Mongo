import React, { useEffect, useState } from "react";
import StudentNavBar from "../../components/StudentNavBar/StudentNavBar";
import { Container, Button } from "react-bootstrap";
import { getAllHomeWorks } from "../../http/studentAPI";
import AllHomeWorkList from "../../components/AllHomeWorkList/AllHomeWorkList";

const AllHomeWorksPage = () => {
  const [startData, setStartData] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPagesCount, setMaxPagesCount] = useState(1);
  useEffect(() => {
    const data = async () => {
      const res = await getAllHomeWorks(page);
      setStartData(res?.data?.homeWorks);
      setMaxPagesCount(res?.data?.maxPagesCount);
    };
    data();
  }, [page]);
  console.log("data", startData);
  console.log("maxPgaesCount", maxPagesCount);

  return (
    <>
      <StudentNavBar />
      <Container>
        <h2 className="text-center mt-2">Все домашние задания</h2>
        {startData.length ? (
          <AllHomeWorkList homeWorks={[...startData]} />
        ) : (
          <p>EmpryList</p>
        )}

        <Button
          onClick={() => {
            let newPage = page + 1;
            setPage(newPage);
          }}
        >
          Next page
        </Button>
      </Container>
    </>
  );
};

export default AllHomeWorksPage;

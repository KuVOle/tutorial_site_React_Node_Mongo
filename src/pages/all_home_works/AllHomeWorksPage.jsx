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
      setStartData((prev) => [...prev, ...res?.data?.homeWorks]);
      setMaxPagesCount(res?.data?.maxPagesCount);
    };
    data();
  }, [page]);
  const onclick = () => {
    if (maxPagesCount >= page) {
      setPage((prev) => ++prev);
    }
  };
  const onfocus = () => {
    console.log("Focus element");
    if (maxPagesCount >= page) {
      setPage((prev) => ++prev);
    }
  };

  return (
    <>
      <StudentNavBar />
      <Container>
        <h2 className="text-center mt-2">Все домашние задания</h2>
        {startData.length ? (
          <AllHomeWorkList homeWorks={{ hw: [...startData], onfocus }} />
        ) : (
          <h4 className="text-center">Пусто</h4>
        )}
        {maxPagesCount > page && (
          <Button onClick={onclick}>Добавить: {page}</Button>
        )}
      </Container>
    </>
  );
};
export default AllHomeWorksPage;

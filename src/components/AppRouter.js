import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  publicRoutes,
  studentRoutes,
  teacherRoutes,
} from "../routes/RoutesApp";

//add check roles to auth routes

const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      {studentRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      {teacherRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
};

export default AppRouter;

import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login_page/LoginPage";
import {
  publicRoutes,
  studentRoutes,
  teacherRoutes,
} from "../routes/RoutesApp";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<LoginPage />} />

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

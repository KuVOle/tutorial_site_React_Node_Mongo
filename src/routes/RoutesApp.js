import {
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  ACTIVATE_ROUTE,
  FORGOT_PASSWORD,
  RESTORE_PASSWORD,
  MAIN_STUDENT_ROUTE,
  STUDENT_PROFILE,
  MAIN_TEACHER_ROUTE,
  STUDENT_LIST,
  ALL_HOME_WORKS,
} from "../utils/Paths";

import LoginPage from "../pages/login_page/LoginPage";
import RegistrationPage from "../pages/registration_page/RegistrationPage";
import ActivatePage from "../pages/activate_page/ActivatePage";
import ForgotPage from "../pages/forgot_page/ForgotPage";
import RestorePage from "../pages/restore_password_page/RestorePage";

import StudentMainPage from "../pages/sudent_main_page/StudentMainPage";
import StudentProfilePage from "../pages/student_profile_page/StudentProfilePage";
import AllHomeWorksPage from "../pages/all_home_works/AllHomeWorksPage";

import TeacherMainPage from "../pages/teacher_main_page/TeacherMainPage";
import StudentListPage from "../pages/student_list_page/StudentListPage";

export const publicRoutes = [
  { path: LOGIN_ROUTE, Component: LoginPage },
  { path: REGISTRATION_ROUTE, Component: RegistrationPage },
  { path: ACTIVATE_ROUTE, Component: ActivatePage },
  { path: FORGOT_PASSWORD, Component: ForgotPage },
  { path: RESTORE_PASSWORD, Component: RestorePage },
];

export const studentRoutes = [
  { path: MAIN_STUDENT_ROUTE, Component: StudentMainPage },
  { path: STUDENT_PROFILE, Component: StudentProfilePage },
  { path: ALL_HOME_WORKS, Component: AllHomeWorksPage },
];

export const teacherRoutes = [
  { path: MAIN_TEACHER_ROUTE, Component: TeacherMainPage },
  { path: STUDENT_LIST, Component: StudentListPage },
];

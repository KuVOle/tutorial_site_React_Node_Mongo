import axios from "axios";

const $host = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8833/",
});

const $studentHost = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8833/mainStudent",
});

const studentInterceptor = (config) => {
  config.headers.Authorization = `${localStorage.getItem("token")}`;
  return config;
};
$studentHost.interceptors.request.use(studentInterceptor);

const $teacherHost = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8833/teacher",
});

const teacherInterceptor = (config) => {
  config.headers.Authorization = `${localStorage.getItem("token")}`;
  return config;
};
$teacherHost.interceptors.request.use(teacherInterceptor);

export { $host, $studentHost, $teacherHost };

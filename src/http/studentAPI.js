import { $studentHost } from "./index";
import {
  SEND_HOME_WORK_POINT,
  GET_PROFILE_POINT,
  PUT_STUDENT_PROFILE,
  GET_HOME_WORK_POINT,
} from "./studentEndpoints";

export const getStartInfo = async () => {
  const { data } = await $studentHost.get();
  console.log("data ", data);
  return data;
};

export const sendHomeWork = async (_id, data, comment) => {
  const formData = new FormData();
  data.forEach((item, i) => formData.append(`file_${i}`, item, item.name));
  formData.append("_id", `${_id}`);
  formData.append("comment", `${comment}`);
  await $studentHost.post(SEND_HOME_WORK_POINT, formData);
  return;
};

export const getProfile = async () => {
  const { data } = await $studentHost.get(GET_PROFILE_POINT);
  return data;
};
export const chengeStudentProfile = async (data) => {
  const res = await $studentHost.put(PUT_STUDENT_PROFILE, data);
  return res;
};

export const getHomeWork = async (_id) => {
  const res = await $studentHost.get(GET_HOME_WORK_POINT + _id);
  return res;
};

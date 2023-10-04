import { $teacherHost } from "./index";
import {
  CREATE_NEW_HOME_WORK,
  DELETE_USER,
  SET_NEW_PRICE,
} from "./teacherEndpoints";

export const getStudentList = async () => {
  const { data } = await $teacherHost.get();
  return data;
};

export const createNewHomeWork = async (data) => {
  const { res } = await $teacherHost.post(CREATE_NEW_HOME_WORK, data);
  return res;
};
export const setNewPriceAPI = async (data) => {
  const res = await $teacherHost.put(SET_NEW_PRICE, data);
  return res;
};

export const deleteUserAPI = async (userId) => {
  const res = await $teacherHost.delete(DELETE_USER + userId);
  return res;
};

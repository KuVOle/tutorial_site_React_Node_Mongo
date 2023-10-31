import { $teacherHost } from "./index";
import {
  CREATE_NEW_HOME_WORK,
  DELETE_USER,
  SET_NEW_PRICE,
  GET_ALL_SUBJECT,
  ADD_NEW_SUBJECT,
  ADD_NEW_BOOK,
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

export const getSubjectsList = async () => {
  const res = await $teacherHost.get(GET_ALL_SUBJECT);
  return res;
};

export const addNewSubject = async (newSubject) => {
  const res = await $teacherHost.post(ADD_NEW_SUBJECT, { subject: newSubject });
  return res;
};

export const addNewBook = async (data, file) => {
  const { description, subject, author, classNumber } = data;
  const formData = new FormData();
  formData.append(file, file.name);
  // formData.append("description", description);
  formData.append("author", author);
  formData.append("subject", subject);
  formData.append("classNumber", classNumber);

  const res = await $teacherHost.post(ADD_NEW_BOOK, formData);
  return res;
};

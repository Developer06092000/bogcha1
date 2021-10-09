import { httpRequest, url } from "./Host";

export const getRahbariyat = () => {
  var config = {
    url: `${url}/rahbariyat/`,
    method: "get",
  };
  return httpRequest(config);
};

export const deleteTeacher = (id) => {
  var config = {
    url: `${url}/rahbariyat/${id}/`,
    method: "delete",
  };
  return httpRequest(config);
};

export const pushTeacher = (teacher) => {
  var config = {
    url: `${url}/rahbariyat/`,
    method: "post",
    data: teacher,
  };
  return httpRequest(config);
};

export const editTeachers = (teacher, id) => {
  var config = {
    url: `${url}/rahbariyat/${id}/`,
    method: "patch",
    data: teacher,
  };
  return httpRequest(config);
};

export const getXodimlar = () => {
  var config = {
    url: `${url}/xodim/`,
    method: "get",
  };
  return httpRequest(config);
};

export const deleteXodim = (id) => {
  var config = {
    url: `${url}/xodim/${id}/`,
    method: "delete",
  };
  return httpRequest(config);
};

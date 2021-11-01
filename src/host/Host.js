import axios from "axios";

export const url = "https://bogcha.herokuapp.com";
export const idBogcha = "1";
export const httpRequest = (config) => {
  return axios({
    ...config,
  });
};

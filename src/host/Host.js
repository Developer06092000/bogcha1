import axios from "axios";

export const url = "https://bogcha.herokuapp.com";

export const httpRequest = (config) => {
  return axios({
    ...config,
  });
};

import axios from "axios";

const API =
  "http://127.0.0.1:8000/api/auth";

export const registerUser = (
  data: any
) => {

  return axios.post(
    `${API}/register/`,
    data
  );

};
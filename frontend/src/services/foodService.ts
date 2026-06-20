import axios from "axios";

const API =
  "http://127.0.0.1:8000/api";

export const getFoods = () => {
  return axios.get(
    `${API}/foods/`
  );
};
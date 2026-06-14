import axios from "axios";

const API =
  "http://127.0.0.1:8000/api";

export const getAnimals = () => {
  return axios.get(
    `${API}/animals/`
  );
};
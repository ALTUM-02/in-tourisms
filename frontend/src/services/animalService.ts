import axios from "axios";

export const getAnimals = () => {
  return axios.get(
    "http://127.0.0.1:8000/api/animals/"
  );
};
import axios from "axios";

const API =
  "http://127.0.0.1:8000/api/hotels/";

export const getHotels = () => {
  return axios.get(
    `${API}/hotels/`
  );
};
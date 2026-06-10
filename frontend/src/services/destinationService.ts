// services/destinationService.ts

import axios from "axios";

export const getDestinations = () => {
  return axios.get(
    "http://127.0.0.1:8000/api/destinations/"
  );
};
import api from "../api/axios";

export const registerUser = (userData: any) => {
  return api.post("/auth/register/", userData);
};
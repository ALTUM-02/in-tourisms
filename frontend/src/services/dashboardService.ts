import api from "../api/axios";

export const getProfile = () => {
  return api.get("/auth/profile/");
};

export const getDashboard = () => {
  return api.get("/dashboard/");
};
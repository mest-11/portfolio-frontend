import { apiClient } from "./config";

export const apiGetUserDetails = async (userName) => {
  
    const user = await apiClient.get(`/auth/${userName}`);
    const userData = await user.data.user

    return userData
  };
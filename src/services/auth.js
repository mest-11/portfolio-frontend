import { apiClient } from "./config"

export const apiSignUp = async(payload) =>{
    return apiClient.post("/auth/signup", payload);
};

export const apiLogIn = async(payload) =>{
    return apiClient.post("/auth/login", payload);
};
export const apiCheckUsernameExist = async(userName) =>{
    return apiClient.get(`/auth/${userName}`);
};
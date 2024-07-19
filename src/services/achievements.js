import { apiClient } from "./config"

export const apiAddAchievements =async(payload) =>{
    return apiClient.post("/achievements",payload);
};

export const apiGetAchievements = async() =>{
    return apiClient.get("/achievements");
};

export const apiGetAchievementsById =async(id) => {
    return apiClient.get(`/achievements/${id}`);
};

export const apiUpdateAchievements = async(id) =>{
    return apiClient.patch(`/achievements/${id}`);
};

export const apiDeleteAchievements = async(id) =>{
    return apiClient.delete(`/ahievements/${id}`);
};
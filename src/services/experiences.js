import { apiClient } from "./config"

export const apiGetExperiences =async() =>{
    return apiClient.get("/experiences");
};

export const apiGetExperienceById =async(id) => {
    return apiClient.get(`/experiences/${id}`);
};

export const apiUpdateExperiences =async() => {
    return apiClient.patch(`/experiences/${id}`);
};

export const apiDeleteExperiences = async(id) =>{
    return apiClient.delete(`/experiences/${id}`);
};
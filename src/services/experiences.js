import { apiClient } from "./config"

export const apiAddExperiences = async(payload)=>
    {
   return apiClient.post("/experiences",payload);
};
export const apiGetExperiences = async() =>{
   return apiClient.get("/experiences");
};

export const apiGetExperiencesById =async(id) => {
   return apiClient.get(`/experiences/${id}`);
};

export const apiUpdateExperiences = async(id) =>{
   return apiClient.patch(`/experiences/${id}`);
};

export const apiDeleteExperiences = async(id) =>{
   return apiClient.delete(`/experiences/${id}`);
};
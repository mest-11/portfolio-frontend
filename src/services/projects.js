import { apiClient } from "./config";

export const apiAddProjects = async(payload)=>
     {
    return apiClient.post("/projects",payload);
};
export const apiGetProjects = async() =>{
    return apiClient.get("/projects");
};

export const apiGetProjectsById =async(id) => {
    return apiClient.get(`/projects/${id}`);
};

export const apiUpdateProjects = async(id) =>{
    return apiClient.patch(`/projects/${id}`);
};

export const apiDeleteProjects = async(id) =>{
    return apiClient.delete(`/projects/${id}`);
};


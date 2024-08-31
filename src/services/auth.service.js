import { authAxiosInstance } from "../axiosConfig";


export const loginService = async (data) => authAxiosInstance.post("/login", data);

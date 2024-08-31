import axios from "axios";

axios.defaults.withCredentials = true;

const AUTH_BASEURL = "http://localhost:3000/auth";

export const authAxiosInstance = axios.create({
    baseURL: AUTH_BASEURL,
});

import axios from "axios";
import { API_BASE_URL } from "./api";

axios.defaults.baseURL = API_BASE_URL;

axios.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem("token") || sessionStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config; 
    }
);



axios.interceptors.response.use(
    (response) => {
        if (response.data) {
            return response.data;
        } else {
            return response;
        }
    },
    (error) => {
        if (error.response) {
            return Promise.reject(error.response.data);
        } else if (error.code === 'ERR_NETWORK') {
            return Promise.reject({ success: false, error: 'Network Error' });
        } else {
            return Promise.reject(error);
        }
    }
);

export default axios;
import axios from "axios";

const axiosInstance = axios.create({ baseURL: 'http://localhost:4000', withCredentials: true });

export const ENDPOINTS = {
    USER: {
        LOGIN: '/user/login',
        SIGNUP: '/user/signup',
        RESET_PASSWORD: 'user/resetPassword'
    },
    CART:{
        
    }
}


export default axiosInstance;

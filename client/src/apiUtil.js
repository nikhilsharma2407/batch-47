import axios from "axios";

export const axiosInstance = axios.create({ baseURL: 'http://localhost:4000', withCredentials: true });

export const ENDPOINTS = {
    USER: {
        LOGIN: '/user/login',
        SIGNUP: '/user/signup',
        RESET_PASSWORD: 'user/resetPassword',
        LOGOUT: 'user/logout',
    },
    CART: {
        GET_CART: 'cart/getCart',
        ADD_TO_CART: 'cart/addToCart',
        REMOVE_FROM_CART: 'cart/removeFromCart',
        INCREMENT: 'cart/increment',
        DECREMENT: 'cart/decrement',
        CLEAR: 'cart/clear',
    }
}

export const REQUEST_TYPES = {
    GET:'get',
    POST:'post',
    PUT:'put',
    PATCH:'patch',
}

export default axiosInstance;

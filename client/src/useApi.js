import { useContext, useState } from "react";
import axiosInstance, { REQUEST_TYPES } from "./apiUtil";
import { UserContext } from "./UserContextProvider";

function useApi(url, type = REQUEST_TYPES.GET, showMessage = true) {

    const { isError, isLoading, message, setIsError, setIsLoading, setMessage, setUserData } = useContext(UserContext);

    // const [loading, setIsLoading] = useState(null)
    // const [error, setError] = useState(null)
    // const [data, setData] = useState(null)
    // const [message, setMessage] = useState(null);

    const makeRequest = async (payload) => {
        try {
            setIsError(false);
            setMessage(null)
            setIsLoading(true);
            const { data: response } = await axiosInstance[type](url, payload);
            const { data, message } = response;
            setUserData(data);
            if(showMessage){
                setMessage(message)
            }
            console.log("🚀 ~ makeRequest ~ response:", response)
        } catch (error) {
            console.log("🚀 ~ makeRequest ~ error:", error)
            setIsError(true);
            const errData = error.response?.data;
            const { message } = errData;
            setMessage(message)
        } finally {
            setIsLoading(false);
        }
    }

    return { makeRequest, isLoading, message, isError }

}

export default useApi
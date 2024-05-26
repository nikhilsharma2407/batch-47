import { useContext, useState } from "react";
import axiosInstance, { REQUEST_TYPES } from "./apiUtil";
import { UserContext } from "./UserContextProvider";

function useApi(url, type = REQUEST_TYPES.GET, { showMessage = true, updateUserdata = true } = {}) {

    const { isError, isLoading, message, setIsError, setIsLoading, setMessage, setUserData } = useContext(UserContext);

    const [response, setResponse] = useState(null);

    const makeRequest = async (payload) => {
        try {
            setIsError(false);
            setMessage(null)
            setIsLoading(true);
            const { data: response } = await axiosInstance[type](url, payload);
            const { data, message } = response;
            if (updateUserdata) {
                setUserData(data);
            } else {
                setResponse(response);
            }
            if (showMessage) {
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

    return { makeRequest, response, setResponse, isLoading, message, isError }

}

export default useApi
import { createContext, useState } from "react";

const UserContext = createContext({
    userData: null,
    setUserData: null,
    message: null,
    setMessage: null,
    isLoading: null,
    setIsLoading: null,
    isError: null,
    setIsError: null,
});

function UserContextProvider({ children }) {

    const [userData, setUserData] = useState(null);
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [isError, setIsError] = useState(null);

    return (
        <UserContext.Provider value={{
            userData,
            setUserData,
            message,
            setMessage,
            isLoading,
            setIsLoading,
            isError,
            setIsError,
        }}>{children}</UserContext.Provider>
    )
}

export default UserContextProvider
export { UserContext }
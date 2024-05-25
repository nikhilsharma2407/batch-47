import React, { useContext, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from './UserContextProvider';

function Toast() {
    const { message, isError } = useContext(UserContext);

    useEffect(()=>{
        if(!isError){
            toast.success(message)
        } else if (isError){
            toast.error(message)
        }

    },[message,isError])


    return <ToastContainer />
}

export default Toast
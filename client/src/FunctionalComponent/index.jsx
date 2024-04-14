import React, { useEffect, useState } from 'react'
import axios from 'axios';

function FunctionalComponent(props) {
    // creating the state
    const [message, setMessage] = useState("Hello");

    const [userId, setUserId] = useState(1);

    const URL = 'https://jsonplaceholder.typicode.com/users/';

    const { name, id, fn } = props;

    console.log("🚀 ~ FunctionalComponent ~ render ~ render:")


    useEffect(() => {
        // works like componentDidMount
        console.log('useEffect Empty dependency array, works like componentDidMount');
        // works like componentWillUnmount

        // Fetch all user
        (async () => {
            try {
                const { data } = await axios.get(URL);
                console.log("🚀 ~ data:", data);
            } catch (error) {
                console.log(error);
            }
        })();

        return () => {
            console.log("🚀 ~ return fn from useEffect ~ works like componentWillUnmount")
        }
    }, []);

    useEffect(() => {
        console.log("🚀 ~ useEffect ~ updated userId:", userId);
    }, [userId]);

    const updateGreeting = () => {
        console.log('setState()')
        setMessage(`Hello ${name}`);
    }

    const incrementCount = () => {
        // this.setState({ userId: this.state.userId + 1 });
        setUserId(userId + 1);
    }

    // when userId is updated fetch that particual user details from https://jsonplaceholder.typicode.com/users/<userId>
    // https://jsonplaceholder.typicode.com/users/1
    // https://jsonplaceholder.typicode.com/users/2
    // https://jsonplaceholder.typicode.com/users/3
    return (
        <>
            <h1>{message}</h1>
            <h2>{userId}</h2>
            <div>{name}- {id}</div>
            <button onClick={updateGreeting}>Greet</button>
            <button onClick={incrementCount}>Increment count</button>
        </>
    )
}

export default FunctionalComponent

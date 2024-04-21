import React, { useEffect, useState } from 'react'
import axios from 'axios';

const User = (user) => {
    console.log("🚀 ~ User ~ user:", user)
    const { name } = user
    return <h1>{name}</h1>
}
function FunctionalComponent(props) {
    // creating the state
    const [message, setMessage] = useState("Hello");

    const [userId, setUserId] = useState(1);

    const [users, setUsers] = useState([]);

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
                setUsers(data);
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
            {/* <h1>{message}</h1>
            <h2>{userId}</h2>
            <div>{name}- {id}</div>
            <button onClick={updateGreeting}>Greet</button>
            <button onClick={incrementCount}>Increment count</button> */}

            {/*             
                <h1>{users[0] && users[0].name}</h1>
                <h1>{users[1] && users[1].name}</h1>
                <h1>{users[2] && users[2].name}</h1> */}

            {/* {users.map((user) => <h1>{user.name}</h1>)} */}


            {/* {users.map((user) => <User id={user.id} name={user.name} />)} */}
            {users.map((user) => <User {...user} />)}


        </>
    )
}

export default FunctionalComponent

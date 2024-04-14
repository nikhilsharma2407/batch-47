import React, { Component } from 'react'

export default class ClassComponent extends Component {

    constructor() {
        console.log("🚀 ~ ClassComponent ~ constructor ~ initialisation phase:");
        // initialisation phase
        super();
        this.state = {
            message: "Hello",
            userId: 0,
        }
    }


    render() {
        // console.log(this.props);
        const { name, id, fn } = this.props;
        const { message, userId: count } = this.state;
        console.log("🚀 ~ ClassComponent ~ render ~ render:", count)
        
        const updateGreeting = () => {
            console.log('setState()')
            this.setState({ message: `Hello ${name}` });
        }



        const incrementCount = () => {
            this.setState({ userId: this.state.userId + 1 });
        }

        return (
            <>
                <h1>{message}</h1>
                <h2>{count}</h2>
                <div>{name}- {id}</div>
                <button onClick={updateGreeting}>Greet</button>
                <button onClick={incrementCount}>Increment count</button>
            </>
        )
    }

    componentDidMount() {
        console.log("🚀 ~ ClassComponent ~ componentDidMount ~ componentDidMount:")
        setTimeout(() => {
            document.title = "Class Component"
        }, 3000);
    }

    shouldComponentUpdate() {
        console.log("🚀 ~ ClassComponent ~ shouldComponentUpdate ~ shouldComponentUpdate:")
        return true
    }

    componentDidUpdate() {
        console.log("🚀 ~ ClassComponent ~ componentDidUpdate ~ componentDidUpdate:", "state.userId", this.state.userId);
        console.log("🚀 Fetching details for user id", this.state.userId);
    }

    componentWillUnmount() {
        console.log("🚀 ~ ClassComponent ~ componentWillUnmount ~ componentWillUnmount:")
    }
}

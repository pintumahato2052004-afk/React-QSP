import React, { Component } from 'react'

export default class LifeCycleCbc extends Component{
    constructor(){
        super();
        console.log("I am Constructor");
        this.state = {count : 0}
    }

    increment = () =>{
        this.setState((prev) => ({count : prev.count+1}));
    };

    componentDidMount(){
        console.log("Component Mounted successfully");
        this.id = setInterval(() =>{
            console.log("API CALL");
        }, 2000)
    }


    componentDidUpdate(){
        console.log("Component Updated Successfully");
    }

    componentWillUnmount(){
        console.log("Component Unmounted 👋");
        clearInterval(this.id);
    }

    render(){
        console.log("I am Render");
    return (
    <div className="p-5">
        <h1 className="text-center text-4xl bg-violet-700 rounded-4xl text-white">
            Learn Life Cycle  of a Component {this.state.count}

        </h1>
        <button onClick={this.increment}>incre</button>
    </div>
    )
    }
}


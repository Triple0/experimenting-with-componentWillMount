import React, { Component } from 'react';
import { render } from 'react-dom';

export interface IProps {
    shortMessage: string
    componentDidMount: () => void;
    printMe: () => void;
}

interface IState {
    shortMessage: string
}

export default class ComponentDidMount extends React.Component<IProps, IState> {
    shortMessage!: string
    constructor(props: IProps) {
        super(props);
        this.state = {
            shortMessage: "Hello, try and click me!"
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        console.log("in constructor");
    }

    componentDidMount = (): void => {
        this.printMe();
        console.log("in componentDidMount");
    }


    printMe = (): void => {
        setTimeout(() => {this.setState({shortMessage: "You clicked me!"});} , 3000)
        console.log("in Print");
    }

    render() {

        return (
            <div>
                <h1>{this.state.shortMessage}</h1>
                <button onClick={this.componentDidMount}>Click Me!</button>
            </div>

        )

    }

}

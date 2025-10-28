class based components:
import React, { Component } from 'react';

export class Welcome extends Component {
    render() {
        return <h1>Hello, {this.props.name}!</h1>;
    }
}

we also write the same code in different way: 

export function Welcome({ name }) {
    return <h1>Hello, {name} !</h1>;
} 



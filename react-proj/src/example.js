import React from "react";

export class Example extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>This is {this.props.name}</div>;
    }
}
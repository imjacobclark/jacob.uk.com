import React, {Component} from 'react';

export default class Heading extends React.Component {
    render(){
        return <h6>{this.props.children}</h6>
    }
}
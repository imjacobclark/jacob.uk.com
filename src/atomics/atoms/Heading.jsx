import React from 'react';

export default class Heading extends React.Component {
    render(){
        const Level = this.props.level;
        return <Level>{this.props.children}</Level>
    }
}
import React from 'react';
import {render} from 'react-dom';

export default class Repository extends React.Component {
  render () {
    return (
      <li>
        <a href={this.props.url}>{this.props.name}</a>
      </li>
    );
  }
}
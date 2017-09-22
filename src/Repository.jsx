import React from 'react';
import {render} from 'react-dom';

export default class Repository extends React.Component {
  render () {
    return (
      <li>
        <a href={"http://github.com/imjacobclark/" + this.props.name}>{this.props.name}</a>
      </li>
    );
  }
}
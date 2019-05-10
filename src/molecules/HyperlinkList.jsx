import React from 'react';
import {render} from 'react-dom';

export default class HyperlinkList extends React.Component {
  render () {
    console.log(this.props);
    return (
      <ul>
        {this.props.items.map(item => <li>
          <a href={item.href}>{item.name}</a>
        </li>)}
      </ul>
    );
  }
}
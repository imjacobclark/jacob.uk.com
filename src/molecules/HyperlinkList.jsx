import React from 'react';

export default class HyperlinkList extends React.Component {
  render () {
    return (
      <ul>
        {this.props.items.map(item => <li>
          <a href={item.href}>{item.name}</a>
        </li>)}
      </ul>
    );
  }
}
import React from 'react';

import Heading from '../atomics/atoms/Heading.jsx';
import Repository from '../molecules/HyperlinkList.jsx'

export default class RecentlyActiveRepositories extends React.Component {
  constructor(){
    super();

    this.state = {repositories: new Set()};
  }

  componentWillMount(){
    let events = fetch('https://api.github.com/users/imjacobclark/events')
      .then(events => events.json())
      .then(events => 
        this.setState({
          repositories: new Set(
            events
            .filter(event => event.type === 'PushEvent')
            .map(event => 
              JSON.stringify({
                name: event.repo.name.replace('imjacobclark/', ''),
                href: "http://github.com/imjacobclark/" + event.repo.name.replace('imjacobclark/', '')
              })
            )
          )}
        )
      );
  }

  render () {
    return (
      <div>
        <Heading>Recent GitHub pushes:</Heading> 
        <Repository items={[...this.state.repositories].map(JSON.parse)}/>
      </div>
    );
  }
}
import React from 'react';
import {render} from 'react-dom';

import Repository from './Repository.jsx'

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
                url: event.repo.url
              })
            )
          )}
        )
      );
  }

  render () {
    return (
      <div>
        <h6>Recent <a href="https://github.com/imjacobclark">GitHub</a> activity</h6> 
        <ul>
          {[...this.state.repositories]
            .map(repo => JSON.parse(repo))
            .map(repo => <Repository name={repo.name} />)
          }
        </ul>
      </div>
    );
  }
}
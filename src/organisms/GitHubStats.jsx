import React, {Fragment} from 'react';

import Heading from '../atomics/atoms/Heading.jsx';
import Paragraph from '../atomics/atoms/Paragraph.jsx';
import Repository from '../molecules/HyperlinkList.jsx'

export default class GitHubStats extends React.Component {
  constructor(){
    super();
    this.state = {repositories: new Set(), user: {}};
  }

  componentWillMount(){
    fetch('https://api.github.com/users/imjacobclark/events')
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

    fetch('https://api.github.com/users/imjacobclark')
      .then(user => user.json())
      .then(user =>
        this.setState({
          user: user,
          repositories: this.state.repositories
        })
      );
  }

  render () {
    return (
      <Fragment>
        <Paragraph>In total on GitHub I have {this.state.user.public_repos} public repositories, {this.state.user.public_gists} public gists and {this.state.user.followers} followers.</Paragraph>

        <Heading level="h6">Recent GitHub project activity 💁🏻‍♂️</Heading> 
        <Repository items={[...this.state.repositories].map(JSON.parse)}/>
      </Fragment>
    );
  }
}
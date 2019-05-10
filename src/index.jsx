import './style.scss';

import React from 'react';
import {render} from 'react-dom';

import GitHubStats from './organisms/GitHubStats.jsx'

class App extends React.Component {
  render () {
    return <GitHubStats />;
  }
}

render(<App/>, document.getElementById('github__activity'));
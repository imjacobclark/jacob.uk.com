import './style.scss';

import React from 'react';
import {render} from 'react-dom';

import RecentlyActiveRepositories from './RecentlyActiveRepositories.jsx'

class App extends React.Component {
  render () {
    return <RecentlyActiveRepositories />;
  }
}

render(<App/>, document.getElementById('github__activity'));
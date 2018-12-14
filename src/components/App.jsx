import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Heading from './atoms/Heading.jsx';
import Paragraph from './atoms/Paragraph.jsx';

export default props => (
    <div>
        <section>
            <Heading level="1">Jacob Clark</Heading>
            <Paragraph>This was rendered on the {props.runtime}!</Paragraph>
        </section>

        <Switch>
            <Route key="/" path="/" exact={true} render={() => (
                <Heading level="2">Homepage</Heading>
            )}  />
            
            <Route key="/about-me" path="/about-me" exact={true} render={() => (
                <Heading level="2">About me</Heading>
            )} />

            <Route render={() => <div>404...</div>} />
        </Switch>
    </div>
)
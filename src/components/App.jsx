import React from 'react';
import Heading from './atoms/Heading.jsx';

export default props => (
    <div>
        <Heading>Jacob Clark</Heading>
        <p>This was rendered on the {props.runtime}!</p>
    </div>
)
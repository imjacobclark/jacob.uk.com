import React from 'react';

export default ({level, children}) => {
    const Heading = `h${level}`;
    return <Heading>{children}</Heading>
}
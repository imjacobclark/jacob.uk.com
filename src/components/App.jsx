import React from 'react';
import Heading from './atoms/Heading.jsx';
import Paragraph from './atoms/Paragraph.jsx';

export default props => (
    <div>
        <section>
            <Heading level="1">Jacob Clark</Heading>
            <Paragraph>This was rendered on the {props.runtime}!</Paragraph>
        </section>

        <section>
            <Heading level="2">About me</Heading>
            <Paragraph>Experienced technologist and polyglot software engineer currently working at the BBC.</Paragraph>
            <Paragraph>I specialise in leading and mentoring teams that craft high quality software which meets user needs through a variety of extreme programming and agile techniques.</Paragraph>
            <Paragraph>I strongly believe in building autonomous teams around agile principles, thin slicing, incremental and continuous delivery, clean & test driven code, refactoring, automation, simplicity, and pragmatism.</Paragraph>
            <Paragraph>I have a wide range of public and private industry experience in travel, leisure, broadcast media, government, eCommerce, retail, co-operative and digital agencies.</Paragraph>
        </section>
    </div>
)
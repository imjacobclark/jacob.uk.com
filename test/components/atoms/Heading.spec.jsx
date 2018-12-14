import React from 'react';
import renderer from 'react-test-renderer';
import Heading from '../../../src/components/atoms/Heading.jsx';

describe('Heading', () => {
    it('renders a h1 correctly', () => {
        const tree = renderer.create(<Heading level="1">Jacob Clark</Heading>).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders a h2 correctly', () => {
        const tree = renderer.create(<Heading level="2">Jacob Clark</Heading>).toJSON();

        expect(tree).toMatchSnapshot();
    });
});

import React from 'react';
import renderer from 'react-test-renderer';
import Heading from '../../../src/components/atoms/Heading.jsx';

describe('Server routes', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Heading>Jacob Clark</Heading>).toJSON();

        expect(tree).toMatchSnapshot();
    });
});

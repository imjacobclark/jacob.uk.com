import React from 'react';
import renderer from 'react-test-renderer';
import Paragraph from '../../../src/components/atoms/Paragraph.jsx';

describe('Paragraph', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Paragraph>Hello I am Jacob Clark</Paragraph>).toJSON();

        expect(tree).toMatchSnapshot();
    });
});

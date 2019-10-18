import TheDate from './TheDate';
import React from 'react';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

describe(`TheDate Component Tests`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TheDate />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
    it.skip('renders the UI as expected', () => {
        expect(
            renderer.create(<TheDate />).toJSON()).toMatchSnapshot()
    })
})
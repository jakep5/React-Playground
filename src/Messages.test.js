import Messages from './Messages';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

describe('Messages component', () => {
    it('Messages component renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Messages />, div);
        ReactDOM.unmountComponentAtNode(div);
        }
    )

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<Messages name="messages" unread={4}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders the UI as expected with no unreads', () => {
        const tree = renderer
            .create (<Messages name="Messages" unread={0}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})
import React from 'react';

class HelloWorld extends React.Component {
    constructor(props) {
        console.log('props in container', props)
        super(props)
        this.state = {
            who: 'world'
        }
    }
    handleFriendButton = () => {
        this.setState({ who: 'friend' })
    }
    handleReactButton = () => {
        this.setState({ who: 'React' })
    }
    handleWorldButton = () => {
        this.setState({ who: 'world' })
    }
    render () {
        return (
            <div>
                <p>Hello, {this.state.who}!</p>
                <button onClick={() => this.handleFriendButton()}>Friend</button>
                <button onClick={() => this.handleReactButton()}>React</button>
                <button onClick={() => this.handleWorldButton()}>World</button>
            </div>
        )
    }
}

export default HelloWorld
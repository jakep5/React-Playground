import React from 'react';
import ReactDOM from 'react-dom';

class Accordion extends React.Component {
    static defaultProps = { sections : [] };
    state = {
        currentTabIndex: 0
    };

    handleLiClick(index) {
        this.setState({currentTabIndex: index})
    }

    renderLiElements(section, index, currentTabIndex) {
        return(
            <li className="Accordion_item" key={index}>
                <button
                    type='button'
                    onClick={() => this.handleLiClick(index)}>
                        {section.title}
                    </button>
                    {(currentTabIndex === index) && <p>{section.content}</p>} {/* if the current tab index equals this index, also render the section content */}
            </li>
        )
        
    }

    render() {
        const {currentTabIndex} = this.state
        const {sections} = this.props
        return (
            <ul className="accordion">
                {sections.map((section, index) =>
                    this.renderLiElements(section, index, currentTabIndex))}
            </ul>
        )
    }
}

export default Accordion;
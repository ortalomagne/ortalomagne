import React from 'react';
import Chapter from './chapter.jsx'

class Story extends React.Component {
    render () {
        return (
            <div>
                <Chapter header={this.props.header[0]} text={this.props.text[0]} image={this.props.images[0]} />
                <Chapter header={this.props.header[1]} text={this.props.text[1]} image={this.props.images[1]} />
                <Chapter header={this.props.header[2]} text={this.props.text[2]} image={this.props.images[2]} />
            </div>
        );
    }
}

export default Story;
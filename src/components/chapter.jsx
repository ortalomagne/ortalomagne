import React from 'react';
import './chapter.css';

class Chapter extends React.Component {
    render () {
        return(
            <div className="page">
                <p className="text">
                    <b>{this.props.header}</b>
                    <br /><br />
                    {this.props.text}
                </p>
                <img src={this.props.image} className="image" alt='' />
            </div>
        )
    };
}

export default Chapter;
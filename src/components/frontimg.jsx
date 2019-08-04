import React from 'react';
import './frontimg.css'

class Frontimg extends React.Component {
    render() {
        return (
            <div>
                <a href={this.props.Link}>
                    <img src={this.props.Image} className="frontimg" alt='' />
                </a>
                <p className="subtext">{this.props.Text}</p>
            </div>
        );
    }
}

export default Frontimg;
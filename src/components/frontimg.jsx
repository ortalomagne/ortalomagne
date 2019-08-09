import React from 'react';
import { Link } from 'react-router-dom';
import './frontimg.css';

class Frontimg extends React.Component {
    render() {
        return (
            <div>
                <Link to={this.props.Link}>
                    <img src={this.props.Image} className="frontimg" alt='' />
                </Link>
                <p className="subtext">{this.props.Text}</p>
            </div>
        );
    }
}

export default Frontimg;


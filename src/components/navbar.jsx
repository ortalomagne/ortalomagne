import React from 'react';
import './navbar.css';

class Navbar extends React.Component {
    render () {
        return (
            <div className="navbar">
                <button className='el' id={this.props.select ? 'select' : null} onClick={this.props.switchGallery}>Gallery</button>
                <button className='el' id={this.props.select ? null : 'select'} onClick={this.props.switchStory}>Story</button>
            </div>
        );
    }
}

export default Navbar;

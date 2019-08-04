import React from 'react';
import './galleryimg.css'

class Galleryimg extends React.Component {
    render() {
        return (
            <div className="galleryimg">
                <img src={this.props.Image} className="galleryimg" alt='' />
            </div>
        );
    }
}

export default Galleryimg;
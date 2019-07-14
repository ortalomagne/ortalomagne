import React from 'react';
import './frontpagegallery.css';
import img from '../images/mtn.jpeg';
import Frontimg from './frontimg';

class FrontpageGallery extends React.Component {
    render() {
        return (
            <div className="frontgallery">
                <h1 className="frontheader">Gallery</h1>
                <div className="row frontimg"> 
                    <div className="column">
                        <Frontimg parentImg={img} />
                        <Frontimg parentImg={img} />
                    </div>
                    <div className="column">
                        <Frontimg parentImg={img} />
                        <Frontimg parentImg={img} />
                    </div>
                    <div className="column">
                        <Frontimg parentImg={img} />
                        <Frontimg parentImg={img} />
                    </div>
                    <div className="column">
                        <Frontimg parentImg={img} />
                        <Frontimg parentImg={img} />
                    </div>
                </div>
            </div>
        );
    }
}

export default FrontpageGallery;

import React from 'react';
import './frontpagegallery.css';
import mountain from '../images/mtn.jpg';
import family from '../images/family.jpg';
import intern from '../images/intern.jpg';
import Frontimg from './frontimg';
import Footer from './footer';

class FrontpageGallery extends React.Component {
    render() {
        return (
            <div className="frontgallery">
                <h1 className="frontheader">Galleries</h1>
                <div className="row"> 
                    <div className="column">
                        <Frontimg Image={intern} Text='My Internship' Link="/myinternship" />
                        <Frontimg Image={mountain} Text='mountain2' Link='/mountain2' />
                    </div>
                    <div className="column">
                        <Frontimg Image={family} Text='Death Valley' Link="/deathvalley" />
                        <Frontimg Image={mountain} Text='mountain3' Link='/mountain3' />
                    </div>
                    <div className="column">

                        {/* Text appears under the image on the front page, Link is the route set in App.js */}

                        <Frontimg Image={mountain} Text='Template' Link="/template" />
                        <Frontimg Image={mountain} Text='mountain5' Link='/mountain5' />
                    </div>
                    <div className="column">
                        <Frontimg Image={mountain} Text='mountain6' Link='/mountain6' />
                        <Frontimg Image={mountain} Text='mountain7' Link='/mountain7' />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default FrontpageGallery;

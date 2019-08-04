import React from 'react';
import './frontpagegallery.css';
// import mountain from '../images/mtn.jpg';
// import Galleryimg from './galleryimg';
import LightboxExample from './lightboxexample';

class Gallery extends React.Component {

    
    render() {

        var imageArr= [
            'https://lh3.googleusercontent.com/wd60zckfclesLsjBtozN9d4IY3HK5VmYbb-Y8o79Xyi0PWZS60FsA33OBcnPuhNmuhqzoOcxoIQoAPYUmNxPRsa7sdG1l1N3S0zv1wZtaMCHnzvRyCGYh9BKxZDyTNHLpyVCAzgx=w2400'
        ];
        
        return (
            <div>
                {/* <img src='https://lh3.googleusercontent.com/wd60zckfclesLsjBtozN9d4IY3HK5VmYbb-Y8o79Xyi0PWZS60FsA33OBcnPuhNmuhqzoOcxoIQoAPYUmNxPRsa7sdG1l1N3S0zv1wZtaMCHnzvRyCGYh9BKxZDyTNHLpyVCAzgx=w2400' /> */}
                <LightboxExample Image={imageArr} />
                {/* <h1 className="frontheader">Gallery</h1>
                <div className="row"> 
                    <div className="column"> */}
                        {/* <Galleryimg Image={mountain} Text='mountain0' /> */}
                        {/* <Galleryimg Image={mountain} Text='mountain1' /> */}
                    {/* </div>
                    <div className="column">
                        <Galleryimg Image={mountain} Text='mountain2' />
                        <Galleryimg Image={mountain} Text='mountain3' />
                    </div>
                </div> */}
            </div>
        );
    }
}

export default Gallery;

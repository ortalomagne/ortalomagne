import React from 'react';
import './frontpage.css';

class Frontpage extends React.Component {
    render() {
        return (
            <div className="inline">
                <div className="wrap fade">
                    <p>The Ortalo-Magne Family<br /><span className="subheader">Some nice sounding subtext</span></p>
                </div>
            </div>
        );
    }
}

export default Frontpage;

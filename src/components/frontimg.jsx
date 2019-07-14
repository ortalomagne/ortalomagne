import React from 'react';

class Frontimg extends React.Component {
    render() {
        // function openGallery() {
        //     console.log('Opening gallery');
        // }
        return (
            <a href='#drop'>
                <img src={this.props.parentImg} alt='' />
            </a>
        );
    }
}

export default Frontimg;
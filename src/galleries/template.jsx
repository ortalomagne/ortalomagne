import React, { Component } from 'react';
import './gallery.css'
import Navbar from '../components/navbar.jsx';
import Story from '../components/story.jsx';
import Galleryimg from '../components/galleryimg.jsx';
import Lightbox from 'react-image-lightbox';
import Footer from '../components/footer.jsx';
import 'react-image-lightbox/style.css';

/* 
 * Need to set:
 * galleryTitle - text on top left of image viewer
 * galleryImage - the images in the gallery, each four are a row of four
 * storyHeader - bold text for story
 * storyText - text for story
 * storyImage - images for story
 * 
 * The number of galleryImage pictures should be the same as the number of Galleryimg's
 * you have. Keep in mind the images are aligned horizontally but Galleryimg's are sectioned
 * vertically and galleryImage[0] is the first image, galleryImage[total - 1] is the last.
 * 
 * At the bottom, export default your-gallery-name
 * 
 */

const galleryTitle = [
    'example title',
    'example title',
    'example title',
    'example title',
    'example title',
    'example title',
    'example title',
    'example title',
    'example title',
    'example title',
    'example title',
    'example title'
];

const galleryImage = [
    'image link',
    'image link',
    'image link',
    'image link',
    'image link',
    'image link',
    'image link',
    'image link',
    'image link',
    'image link',
    'image link',
    'image link'
];

const storyHeader = [
    'header',
    'header',
    'header'
];

const storyText = [
    'story text, use \ for symbols like \' or \". putting a \ at the end of the line \
    goes to a new line without affecting what is shown',
    'story text, use \ for symbols like \' and \\. putting a \ at the end of the line \
    goes to a new line without affecting what is shown',
    'story text, use \ for symbols like \' and \\. putting a \ at the end of the line \
    goes to a new line without affecting what is shown'
];

const storyImage = [
    galleryImage[0],
    galleryImage[1],
    galleryImage[2]
];

// Change this to gallery name, ex: class Gallery-name extends Component

class Template extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
            showGallery: true
        };
    }

    switchGallery = () => {
        this.setState({showGallery: true});
    }
    switchStory = () => {
        this.setState({showGallery: false});
    }

    render () {
        const { photoIndex, isOpen, showGallery } = this.state;
        return (
            <div>
                <Navbar select={showGallery} switchGallery={this.switchGallery} switchStory={this.switchStory}/>
                <br />
                <h1 className="title">{this.props.name}</h1>
                <p className="date">{this.props.date}</p>
                {this.state.showGallery ? (
                    <div className="row"> 
                        <br />

                        {/* photoIndex and galleryImage[] values must be set */}

                        <div className="column">
                            <button onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}>
                                <Galleryimg Image={galleryImage[0]} alt='' className="image" />
                            </button>
                            <button onClick={() => this.setState({ isOpen: true, photoIndex: 4 })}>
                                <Galleryimg Image={galleryImage[4]} alt='' className="image" />
                            </button>
                            <button onClick={() => this.setState({ isOpen: true, photoIndex: 8 })}>
                                <Galleryimg Image={galleryImage[8]} alt='' className="image" />
                            </button>
                            <button onClick={() => this.setState({ isOpen: true, photoIndex: 12 })}>
                                <Galleryimg Image={galleryImage[12]} alt='' className="image" />
                            </button>
                        </div>
                        <div className="column">
                            <button onClick={() => this.setState({ isOpen: true, photoIndex: 1 })}>
                                <Galleryimg Image={galleryImage[1]} alt='' className="image" />
                            </button>
                            <button onClick={() => this.setState({ isOpen: true, photoIndex: 5 })}>
                                <Galleryimg Image={galleryImage[5]} alt='' className="image" />
                            </button>
                            <button onClick={() => this.setState({ isOpen: true, photoIndex: 9 })}>
                                <Galleryimg Image={galleryImage[9]} alt='' className="image" />
                            </button>
                        </div>
                        <div className="column">
                            <button onClick={() => this.setState({ isOpen: true, photoIndex: 2 })}>
                                <Galleryimg Image={galleryImage[2]} alt='' className="image" />
                            </button>
                            <button onClick={() => this.setState({ isOpen: true, photoIndex: 6 })}>
                                <Galleryimg Image={galleryImage[6]} alt='' className="image" />
                            </button>
                            <button onClick={() => this.setState({ isOpen: true, photoIndex: 10 })}>
                                <Galleryimg Image={galleryImage[10]} alt='' className="image" />
                            </button>
                        </div>
                        <div className="column">
                            <button onClick={() => this.setState({ isOpen: true, photoIndex: 3 })}>
                                <Galleryimg Image={galleryImage[3]} alt='' className="image" />
                            </button>
                            <button onClick={() => this.setState({ isOpen: true, photoIndex: 7 })}>
                                <Galleryimg Image={galleryImage[7]} alt='' className="image" />
                            </button>
                            <button onClick={() => this.setState({ isOpen: true, photoIndex: 11 })}>
                                <Galleryimg Image={galleryImage[11]} alt='' className="image" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <Story header={storyHeader} text={storyText} images={storyImage}/>
                )}
                {isOpen && (
                    <Lightbox
                        mainSrc={galleryImage[photoIndex]}
                        nextSrc={galleryImage[(photoIndex + 1) % galleryImage.length]}
                        prevSrc={galleryImage[(photoIndex + galleryImage.length - 1) % galleryImage.length]}
                        imageTitle={galleryTitle[photoIndex]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + galleryImage.length - 1) % galleryImage.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % galleryImage.length,
                            })
                        }
                    />
                )}
            <Footer />
            </div>
        );
    }
}

// export default name-you-set-above-for-class

export default Template;
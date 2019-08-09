import React, { Component } from 'react';
import './gallery.css'
import Navbar from '../components/navbar.jsx';
import Story from '../components/story.jsx';
import mountain from '../images/mtn.jpg';
import family from '../images/family.jpg';
import Galleryimg from '../components/galleryimg.jsx';
import Lightbox from 'react-image-lightbox';
import Footer from '../components/footer.jsx';
import 'react-image-lightbox/style.css';

const galleryTitle = [
    'placeholder text',
    'placeholder text',
    'placeholder text',
    'placeholder text',
    'placeholder text',
    'placeholder text',
    'placeholder text',
    'placeholder text',
    'placeholder text',
    'placeholder text',
    'placeholder text',
    'placeholder text'
];

const galleryImage = [
    'https://lh3.googleusercontent.com/wd60zckfclesLsjBtozN9d4IY3HK5VmYbb-Y8o79Xyi0PWZS60FsA33OBcnPuhNmuhqzoOcxoIQoAPYUmNxPRsa7sdG1l1N3S0zv1wZtaMCHnzvRyCGYh9BKxZDyTNHLpyVCAzgx=w2400',
    family,
    family,
    family,
    family,
    family,
    family,
    mountain,
    mountain,
    mountain,
    mountain,
    mountain
];

const storyHeader = [
    'This text is customizeable',
    'Day 2:',
    'Day 3:',
    'Day 4:',
    'Day 5:',
    'Day 6:',
    'Day 7:',
    'Day 8:',
    'Day 9:',
    'Day 10:',
    'Day 11:',
    'Day 12:'
];

const storyText = [
    'Lorem ipsum dolor sit amet, delectus salutandi quaerendum vis ut, ex quo case solet elaboraret.',
    'Lorem ipsum dolor sit amet, delectus salutandi quaerendum vis ut, ex quo case solet elaboraret.',
    'Lorem ipsum dolor sit amet, delectus salutandi quaerendum vis ut, ex quo case solet elaboraret.'
];

const storyImage = [
    mountain,
    mountain,
    mountain
];

class DeathValley extends Component {
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
                    // <Gallery />
                    <div className="row"> 
                        <br />
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

export default DeathValley;
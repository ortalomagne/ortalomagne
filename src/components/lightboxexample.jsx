import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import Galleryimg from './galleryimg.jsx';

const images = [
    'https://lh3.googleusercontent.com/wd60zckfclesLsjBtozN9d4IY3HK5VmYbb-Y8o79Xyi0PWZS60FsA33OBcnPuhNmuhqzoOcxoIQoAPYUmNxPRsa7sdG1l1N3S0zv1wZtaMCHnzvRyCGYh9BKxZDyTNHLpyVCAzgx=w2400',
    'https://lh3.googleusercontent.com/wd60zckfclesLsjBtozN9d4IY3HK5VmYbb-Y8o79Xyi0PWZS60FsA33OBcnPuhNmuhqzoOcxoIQoAPYUmNxPRsa7sdG1l1N3S0zv1wZtaMCHnzvRyCGYh9BKxZDyTNHLpyVCAzgx=w2400',
    '//placekitten.com/4000/3000',
  '//placekitten.com/800/1200',
  '//placekitten.com/1500/1500',
];

class LightboxExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        <Galleryimg Image={this.props.Image[0]} alt='' className="image" onClick={() => this.setState({ isOpen: true, photoIndex: 0 })} />
        <button type="button" className="image" imageCaption="Testing caption" onClick={() => this.setState({ isOpen: true, photoIndex: 1 })}>
                <img src={this.props.Image[0]} alt='' />
        </button>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            imageTitle="Testing title"
            imageCaption="Testing caption"
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}

export default LightboxExample;

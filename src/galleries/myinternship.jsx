import React, { Component } from 'react';
import './gallery.css'
import Navbar from '../components/navbar.jsx';
import Story from '../components/story.jsx';
import Galleryimg from '../components/galleryimg.jsx';
import Lightbox from 'react-image-lightbox';
import Footer from '../components/footer.jsx';
import 'react-image-lightbox/style.css';

const galleryTitle = [
    'The lobby of the West Office Building, I worked on the third floor',
    'John Deere equipment showcase at the Classic',
    'Advanced putter',
    'A dangerous looking combine for smaller bushes and shrubs',
    'My desk\'s layout, it could transform to a standing desk too',
    'Mexican food! Steak with beans, tortillas, and salsa',
    'A combine in the lobby of the factory where they\'re made',
    'Me in my Marshal uniform at the John Deere Classic',
    'Saw the Blue Angles at the Quad Cities Airshow',
    'Hole 9 at TPC Deere Run, where I was a Marshal',
    'Ribfest in Naperville, some very tasty ribs and BBQ sauce',
    '$500 worth of fireworks, a lot of which I got to set off. Only a couple misfires...',
    'Chicago style deep dish pizza I ate when I went to visit Tim in Naperville'
];

const galleryImage = [
    'https://lh3.googleusercontent.com/xqlYTbviHYEoBll-WT0mFs3STGxMwa9esOSsr20VXdkA8sE8hz2gA2b6FrYB4wQfuQh3VQn8fAULqMTDKjoH12lWe0aagisS1KDYw0Tnj8EzxsM1APGVdZWmQ-a_IhHfa_6N_EL6Ag=w2400',
    'https://lh3.googleusercontent.com/YQ53GJ8fJxl0R3uKjV7IsuXvJtmFlezIyC8QYY5LObxBPi_uluWHt_Gul06DjMP-u4Ec9C3Y8vkJIDT23DCnnLJVeyusaODDEkHgMT0iMmA5AghYPw7RDZ-PAmhrxXSlh4BgeDBWYw=w2400',
    'https://lh3.googleusercontent.com/RpvCIBXWCpSm53o1-mJovpSEXwrdJsLfzR2SIPzpbWLOac3Mx57x4zfW_jOPL8kfLpgRQSVsfz4OZG3xYND1Mm_a4PvOixyd654idsNHm6zXeNNcqfFS-KiRIoyHbauTni_3D3c_0Q=w2400',
    'https://lh3.googleusercontent.com/mCHzk4rT4O53-1hSANI3HnPwVyLkNkJrlE9vJsd7ZsjucM-lkh2U4ksXxHrN5o7-vBwX9xglHMfXjUc471h9PCZGHEpNB61SmBbtnOObunfP8Gg6UJnXQmX7VmHS3GiaOiSUGpqSkQ=w2400',
    'https://lh3.googleusercontent.com/W0oqRSiMNJUTkVH7GG3Pc4sqikngHK3PJHtBGHrT2fYjSfnHC7s8WPs5JJq0sj-EcxZjmio6evtuVA6Y_stbJ_BJxCpkOMDfrCZwWJiH9PgtslSHheuSBaJRBQWdldqjj4FC8TGlIg=w2400',
    'https://lh3.googleusercontent.com/vYxUo0pKCvtKMuuKuA9N4fWLh9ewMKz0i-oNKJRXThpFxn8S0pWwzTlxp2Squ0YunFY4s0XNBdefrDETcIdeXZvTJ6J2Njfko_pLnQwYlODF42PFAyHMUbi76ovrwfzfs2H_7DjZtA=w2400',
    'https://lh3.googleusercontent.com/nKgNRjgsEJVc6kafaMUYyuJnw9fhH3ezmY7qUbtDb7eIWHjVFnRFptUgoL4air7FJdCxZGnZTLzNsoSShzcuYJiu9Zi75kjjAF1Vbs0fzNZyDVJfrAkO-QZuBAIE7p1whNK5HYGAtA=w2400',
    'https://lh3.googleusercontent.com/yxls-hDuJuz2bwqzrfLcSgJ_-ye-4M9cYxwAWFxiwfcr6MuRprA0GDO6NTwasBt07f8mZIenwMS3RefJVt_AIhw-E5cpzt2fvKFkK2fnfEzneWDVOxnjnem9UBzhXKMCHXqbCM5NgQ=w2400',
    'https://lh3.googleusercontent.com/WXGqNczZxnWIjMKWSUjr7CGlN23WV7ogVxdW5LZ08AzwJOTqE2GyDjYfEsUpWan1xg1i6noE4Fzg1tmPZpoS8D92jnTLFJtSOPMIp1m-PjGE6osBxhQapYQ_cBbJoQ-oeQLKYfyjxQ=w2400',
    'https://lh3.googleusercontent.com/yEb3QlUDJoWrEfpdI78e1CHs7LMHvkOhCOzRlyicIrZFTDfYLfgLzPfolyAHx_5sKUz8mlm7pokZfx_veUC6e5gA0r_ItnfPH5ciUH0tXXgYx0c-joYVFmnSIZZ3v6Ebd0jTOsjcIg=w2400',
    'https://lh3.googleusercontent.com/mUcw2XfbsIIGTjekHVqDJWbtiXCSjqVTMDQ_bubDmgXTCtiPyDUCLdYyp90ecRFUOoW3TEzBtFXKATXq15JAchHaAhzEZyzSdJKrFFjydkE1t_nqhAhCCpBH6Dy9ObGd9nDtMloqPA=w2400',
    'https://lh3.googleusercontent.com/fSnFh0JWqYd6fTSmr2G-aCNEUMlc1fKkVLcX5kLPn0hfFTVAq5T2CbDmKUdQrfaAjddanCQOS-Cg9oEpdOUIqh8IhoTA_Ebio2v8cTcoa85_uhTNjvGhgwYqiRwwILKrhbYzPc9EAw=w2400',
    'https://lh3.googleusercontent.com/k4tlckvNt-OB_AXp2htp4Uk4AugNQ3q-p6wxc8hzt-y5-yxooLGX2Q8rnzqDY5U_cmslGZB5KYigqb4MRAaaUpMF-kGdvOJF9nZDPUrKyyJcLlLYn5ELOMwZbtjJxywWY5JUFOyHgA=w2400'
];

const storyHeader = [
    'Internship',
    'John Deere Classic',
    'Just For Fun'
];

const storyText = [
    'This summer, I worked as a John Deere IT intern. More specifically, I was working on John Deere Sales Center as a member of Team DEFCON. JDSC is the website between Deere dealers and their customers so everything from listing vehicles, to creating quotes, to order management is a part of the final product. Team DEFCON is officialy a security and code infrastructure team. To put it in simpler terms, we are the ones who are in charge of making the code work together and keeping it up and running. My two main projects were writing tests for the code and organizing Deere\'s GitHub. I also worked on some scripts to automate and speed up my tasks. Pictured is the result of running one of my scripts which made changes to 82 repositories!',
    'One of the coolest events I participated in while at Deere was the John Deere Classic. This was my first ever PGA Tour so I figured I would volunteer as a Marshal to fully experience it. As a Hole 9 Marshal, I was in charge of holding up the quiet signs whenever the golfers were putting and taking down the fence when they missed the green so they had a clear shot. Pictured is just a section of the machines Deere brought to the event, most of the rest is pictured in the gallery pictures.',
    'Of course I also did some non-Deere related things this summer. A few of my favorites were the Quad Cities Air Show and Fourth of July weekend. The air show featured several great performers, including the Blue Angles. On the weekend of the fourth, I went with Cedric back to his house in Chicago and launched around $500 worth of fireworks!'
];

const storyImage = [
    galleryImage[4],
    galleryImage[1],
    galleryImage[8]
];

class MyInternship extends Component {
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

export default MyInternship;
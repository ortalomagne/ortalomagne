import React from 'react';
import './App.css';
import Frontpage from './components/frontpage.jsx'
import FrontpageGallery from './components/frontpagegallery.jsx'
import {BrowserRouter, Route} from 'react-router-dom';
import DeathValley from './galleries/deathvalley.jsx';
import MyInternship from './galleries/myinternship.jsx';
import Template from './galleries/template.jsx';


/* 
 * There are 3 steps to adding a gallery / story:
 * App.js - import above and add another route
 * galleries/ - This folder needs a new file and changes within
 * frontpagegallery.jsx - Need to add the image that links to the gallery
 * 
 */ 


function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact={true} path='/' render={() => (
          <div className="App">
            <Frontpage />
            <FrontpageGallery />
          </div>
        )}/>
        <Route exact={true} path='/deathvalley' render={() => (
          <div className="App">
            <DeathValley name="Death Valley" date="Summer 2017"/>
          </div>
        )}/>
        <Route exact={true} path='/myinternship' render={() => (
          <div className="App">
            <MyInternship name="My Internship" date="Summer 2019"/>
          </div>
        )}/>

        {/* 
          * Each gallery has its own route, change:
          * path - each one must be unique, should be similar to name
          * name - what your gallery is called
          * date - when it happened
          * 
          * Should be short so they display correctly
          * 
          */}

        <Route exact={true} path='/template' render={() => (
          <div className="App">
            <Template name="Enter Name" date="enter date"/>
          </div>
        )}/>
      </div>
    </BrowserRouter>
  );
}

export default App;

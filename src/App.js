import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, Link } from 'react-router-dom';
import Header from './Header/Header.js';
import Home from './Home/Home.js';
import About from './About/About.js';
import Media from './Media/Media.js';
import Contact from './Contact/Contact.js';
import Services from './Services/Services.js';
import NeuFit from './NeuFit/NeuFit.js';
import PrimaleticsPodcast from './PrimaleticsPodcast/PrimaleticsPodcast'


export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/about' component={About} />
        <Route path='/media' component={Media} />
        <Route path='/contact' component={Contact} />
        <Route path='/neufit' component={NeuFit} />
        <Route path='/primaleticspodcast' component={PrimaleticsPodcast} />
    </div>
    );
  }
}

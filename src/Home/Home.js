import React from 'react';
import css from './Home.css'
import Contact from '../Contact/Contact.js'
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import appcss from '../App.css';

const Home = () => {
  return (
    <div className='home-container'>
        <Route path='/' component={Header} />
      <div className='logo-container'>
    <img className="logo" src={require('../assets/bear.png')} alt="logo" />
  </div>
    <h2 className='home-title'>We Study. We Learn. We Adapt.</h2>
    <p className='home-details'>We understand even though many of us have similar goals when it comes health and happiness we are all our unique selves. We have different bodies, stressors and perspectives that influence who we are and what we do. We use science backed research and real world experience to help you build a frame work for health and wellness that makes sense for you.</p>
  </div>
  )
}

export default Home;

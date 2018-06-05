import React from 'react';
import css from './NeuFit.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { Route } from 'react-router-dom';

const NeuFit = () => {
  return (
    <div className='all-neufit'>
    <Route path='/' component={Header} />
    <div className='neufit-container'>
      <div className='logo-container'>
        <img className="logo" src={require('../assets/bear.png')} alt="logo" />
      </div>
      <div className='text-image-container'>
        <p className='neufit-text'>We are proudly trained and certified to use the Neubie machine from Neufit. <a className='neufit-link' href="https://www.neu.fit/">Click Here</a> to learn more about how this could help you.</p>
        <img className="neubie" src={require('../assets/neubie.png')} alt="logo" />
      </div>
        <div className="neurology-text">
          <h2>NEUROLOGY + FITNESS = NEUFIT</h2>
        </div>
        <img className="image-1" src={require('../assets/nf-1.png')} alt="logo" />
        <img className="image-2" src={require('../assets/nf-2.png')} alt="logo" />
        <img className="image-3" src={require('../assets/nf-3.png')} alt="logo" />
      </div>
    </div>
  )
}

export default NeuFit;

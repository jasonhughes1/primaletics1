import React from 'react';
import Header from '../Header/Header';
import { Route } from 'react-router-dom';
import css from './PrimaleticsPodcast.css';


const PrimaleticsPodcast = () => {
  return (
    <div className='podcast-container'>
      <Route path='/' component={Header} />
      <div className='logo-container'>
        <img className="logo" src={require('../assets/bear.png')} alt="logo" />
      </div>
    </div>
  )
}

export default PrimaleticsPodcast;

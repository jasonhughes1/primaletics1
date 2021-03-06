import React from 'react';
import Instafeed from 'react-instafeed';
import InstagramEmbed from 'react-instagram-embed'
import css from './Media.css';
import Header from '../Header/Header';
import { Route } from 'react-router-dom';

const Media = () => {

return (
  <div className='all-media'>
    <Route path='/' component={Header} />
    <div className='instagram-container'>
      <img className="logo" src={require('../assets/bear.png')} alt="logo" />
      <h2 className='instagram-text'>Recent Instagram Posts</h2>
      <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script><iframe src="//lightwidget.com/widgets/88e916761aaf5d3bab9b8e3d4722152f.html" scrolling="no" allowtransparency="true" className="lightwidget-widget"></iframe>
    </div>
      <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script><iframe src="//lightwidget.com/widgets/50cb8e2dc92453159ddf240a45b16bab.html" scrolling="no" allowtransparency="true" className="lightwidget-widget-mobile"></iframe>
  </div>
  )
}

export default Media;

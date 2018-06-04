import React from 'react';
import Instafeed from 'react-instafeed';
import InstagramEmbed from 'react-instagram-embed'
import css from './Media.css';

const Media = () => {




return (
  <div>
    <div className='instagram-container'>
      <h2 className='instagram-text'>Recent Instagram Posts</h2>
      <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script><iframe src="//lightwidget.com/widgets/d5254224f0ef5ffaacdbe8af90689fbb.html" scrolling="no" allowtransparency="true" className="lightwidget-widget"></iframe>
    </div>
    <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script><iframe src="//lightwidget.com/widgets/459867bee7c859b580e9f3919904e6f2.html" scrolling="no" allowtransparency="true" className="lightwidget-widget-mobile"></iframe>

  </div>
)

}

export default Media;

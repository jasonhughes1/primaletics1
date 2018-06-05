import React from 'react';
import css from './Services.css';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';

const Services = () => {
  return(
    <div className='services-main-container'>
      <Route path='/' component={Header} />
      <div className='logo-container'>
        <img className="logo" src={require('../assets/bear.png')} alt="logo" />
      </div>
      <h1 className='services-title'>What We Offer</h1>
      <div className='grey-box'>
        <div className='services-container'>
          <h2 className='services-title-1'>We Study. We Learn. We Adapt.</h2>
          <p className='services-par-1'>We understand even though many of us have similar goals when it comes health and happiness we are all our unique selves. We have different bodies, stressors and perspectives that influence who we are and what we do. We use science backed research and real world experience to help you build a frame work for health and wellness that makes sense for you.</p>
        </div>
      </div>
        <div className='box-2'>
        <div className='primaletics-program-container'>
          <h2 className='services-title-2'>Primaletics Program</h2>
          <p className='services-par-2'>Improving mind body connection while increasing mobility and building confidence & strength.</p>
        </div>
      </div>
      <div className='grey-box'>
        <div className='box-3'>
          <h2 className='services-title-3'>Foundations of Primaletics Workshop</h2>
          <p className='services-par-3'>We will give you the tools necessary to build your own Primaletics practice by teaching you what movements, how to efficiently and effectively perform them, when to do them and why.</p>
        </div>
        <div className='list'>
          <p className='list-item'><img className="check" src={require('../assets/check.png')} alt="check-mark"/>Posture and Brain</p>
          <p className='list-item'><img className="check" src={require('../assets/check.png')} alt="check-mark"/> Breathing</p>
          <p className='list-item'><img className="check" src={require('../assets/check.png')} alt="check-mark"/> Joint Health</p>
          <p className='list-item'><img className="check" src={require('../assets/check.png')} alt="check-mark"/> Dynamic Movements</p>
          <p className='list-item'><img className="check" src={require('../assets/check.png')} alt="check-mark"/> Dynamic Stretching</p>
          <p className='list-item'><img className="check" src={require('../assets/check.png')} alt="check-mark"/> Chunk of Workout</p>
          <p className='list-item'><img className="check" src={require('../assets/check.png')} alt="check-mark"/> Isometric Stretching</p>
        </div>
      </div>
      </div>
  )
}


export default Services;

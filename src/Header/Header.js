import { NavLink } from 'react-router-dom';
import css from './Header.css';
import React, { Component } from 'react';


  class Header extends Component {
    constructor() {
      super();
}

      render() {
        return(
          <div>
            <div class="container">
              <nav class="nav nav-pills flex-column flex-sm-row">
                <h1 className='header-title'>Primaletics</h1>
                <NavLink to='/' className="flex-sm-fill text-sm-center" href='#'><strong>Home</strong> </NavLink>
                <NavLink to='/about' className='flex-sm-fill text-sm-center' href='#'><strong>About</strong> </NavLink>
                <NavLink to='/services' className='flex-sm-fill text-sm-center' href='#'><strong> Services</strong></NavLink>
                <NavLink to='/media' className='flex-sm-fill text-sm-center'  href='#'> Media </NavLink>
                <NavLink to='/primaleticspodcast' className='flex-sm-fill text-sm-center'  href='#'> Primaletics Podcast </NavLink>
                <NavLink to='/neufit' className='flex-sm-fill text-sm-center'  href='#'> NeuFit </NavLink>
            </nav>
          </div>
            <div class="pos-f-t">
              <div class="collapse" id="navbarToggleExternalContent">
                <div class="p-4">
                  <h1 className='drop-down-title'>Primaletics</h1>
                  <div className='drop-down-links'>
                  <NavLink to='/' className="flex-sm-fill text-sm-center" href='#'><strong>Home</strong> </NavLink>
                  <NavLink to='/about' className='flex-sm-fill text-sm-center' href='#'><strong>About</strong> </NavLink>
                  <NavLink to='/services' className='flex-sm-fill text-sm-center' href='#'><strong> Services</strong></NavLink>
                  <NavLink to='/media' className='flex-sm-fill text-sm-center'  href='#'> Media </NavLink>
                  <NavLink to='/primaleticspodcast' className='flex-sm-fill text-sm-center'  href='#'> Primaletics Podcast </NavLink>
                  <NavLink to='/neufit' className='flex-sm-fill text-sm-center'  href='#'> NeuFit </NavLink>
                </div>
                </div>
              </div>
              <nav class="navbar navbar-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              </nav>
            </div>
          </div>
        )
      }
    }

export default Header;

import { NavLink } from 'react-router-dom';
import css from './Header.css';
import React, { Component } from 'react';


  class Header extends Component {
    constructor() {
      super();

      this.state = {
        showMenu: false,
      };
      this.showMenu = this.showMenu.bind(this);
      this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
      event.preventDefault();


    this.setState({ showMenu: true}, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

    closeMenu(event) {
      if (!this.dropdownMenu.contains(event.target)) {
        this.setState({ showMenu: false}, () => {
          document.removeEventListener('click', this.closeMenu);
        });
      }
    }
    render() {


    return (
        <div className='header-section'>
          <div className='header-left'>
            <h2 className='header-title'>Primaletics</h2>
            <img className="logo" src={require('../assets/bear.png')} alt="logo" />
          </div>
          <div className='header-right header-right-mobile'>
            <div className='drop-down-container'>
              <button onClick={this.showMenu}>
                <img className="menulogo" src={require('../assets/menu.svg')} alt="logo" />
              </button>
              {
                this.state.showMenu
                ? (
                  <div
                    className="menu" ref={(element) => {
                      this.dropdownMenu = element;
                    }}>
                    <div className='navlink-container'>
                      <NavLink to='/' className='nav'> Home </NavLink>
                      <NavLink to='/about' className='nav'> About </NavLink>
                      <NavLink to='/services' className='nav'> Services </NavLink>
                      <NavLink to='/media' className='nav'> Media </NavLink>
                      <NavLink to='/primaleticspodcast' className='nav'> Primaletics Podcast </NavLink>
                      <NavLink to='/neufit' className='nav'> NeuFit </NavLink>
                    </div>
                  </div>

                )
                : (
                  null
                )

              }
            </div>
          </div>
          <div className='navlink-container-desktop'>
            <NavLink to='/' className='nav'> Home </NavLink>
            <NavLink to='/about' className='nav'> About </NavLink>
            <NavLink to='/services' className='nav'> Services </NavLink>
            <NavLink to='/media' className='nav'> Media </NavLink>
            <NavLink to='/primaleticspodcast' className='nav'> Primaletics Podcast </NavLink>
            <NavLink to='/neufit' className='nav'> NeuFit </NavLink>
          </div>
        </div>

      )
    }
  }

export default Header;

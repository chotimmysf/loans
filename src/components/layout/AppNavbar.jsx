import React, { Component } from 'react'
import { DEFAULT_BREAKPOINTS } from 'react-bootstrap/esm/ThemeProvider';
import { Link } from 'react-router-dom';

export default class AppNavbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-md navbar-dark bg-primary mb-4'>
        <div className='container'>
            <Link to="/" className='navbar-brand'>Loans Panel</Link>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarMain'>
                <i className='navbar-toggler-icon'></i>
            </button>
            <div className='collapse navbar-collapse' id='navbarMain'>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                        <Link to="/" className='nav-link'>
                            Dashboard
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
      </nav>

    )
  }
}

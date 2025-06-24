import React from 'react';
import '../App.css';
import { Link } from 'react-router';

const Header = () => {
  return (
      <div className='header'>
          <h1>IMDB</h1>
          <ul>
              <li><Link to='/'>Home</Link> </li>
              <li><Link to='/details'>Details</Link> </li>
              <li><Link to='/watchlist'>Watchlist</Link> </li>
              <li><Link to='/rateus'>Rateus</Link> </li>
              <li><Link to='/signout'>Signout</Link> </li>
          </ul>
        </div>
    )
}

export default Header;
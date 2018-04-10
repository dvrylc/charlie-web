// External imports
import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header>
        <Link to={{ pathname: '/' }}>
          <h1>Charlie</h1>
        </Link>
      </header>
    );
  }
}

export default Header;

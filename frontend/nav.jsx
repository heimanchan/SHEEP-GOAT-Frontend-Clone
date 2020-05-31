import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <div className='nav-header'>
          <div className='nav-logo'>GOAT</div>
          <a href ='' className='nav-list-link'>Discover</a>
          <a href ='' className='nav-list-link'>Shop All</a>
          <a href ='' className='nav-list-link'>Styles</a>
          <a href ='' className='nav-search'>search</a>
        </div>
      </nav>
    )
  }
}

export default NavBar;
import React from 'react';

function Header() {
  return (
    <div className="App">
      <nav className="navbar" style={{ backgroundColor: '#d1114d' }}>
        <div className="navbar__logo" style={{ color: '#eed5d1' }}>Ecomerce</div>
        <div>
          <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
            <li style={{ marginRight: '30px' }}><a href="#">Home</a></li>
            <li style={{ marginRight: '30px' }}><a href="#">About Us</a></li>
            <li><a href="#">Contact US</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;

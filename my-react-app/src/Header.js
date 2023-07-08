import React from 'react';

function Header() {
    return (
        <div className="App">
      <nav className="navbar">
        <div className="navbar__logo">Logo</div>
        <div className="navbar__cart">
          <i className="fas fa-shopping-cart"></i>
          <span className="navbar__cartCount">3</span>
        </div>
      </nav>
    </div>
    )
}
export default Header;
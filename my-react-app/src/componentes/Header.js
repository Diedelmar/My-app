import React from 'react';

function Header() {
    return (
      <div className="App">
  <nav className="navbar" style={{ backgroundColor: '#d1114d' }}>
    <div className="navbar__logo" style={{ color: '#eed5d1' }}>Logo</div>
    <div className="navbar__cart">
      <i className="fas fa-shopping-cart"></i>
      <span className="navbar__cartCount">3</span>
    </div>
  </nav>
</div>

    )
}
export default Header;
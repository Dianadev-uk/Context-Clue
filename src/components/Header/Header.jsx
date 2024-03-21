import React from 'react';

const Header = (props) => {
  return (
      <header>
          <h2>{props.children}</h2>
    </header>
  )
}

export default Header;
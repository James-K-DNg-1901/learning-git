import React from "react";

function Header() {
  return(
    <div  style={{ 
      width: "100%" , 
      height: '4rem',
      color: 'white', 
      backgroundColor: '#FFB534', 
      display: 'flex', 
      alignItems: 'center', 
      padding: '0.5em 3em'
      }} >
      <h1>Keeper</h1>
    </div>
  );
}

export default Header;
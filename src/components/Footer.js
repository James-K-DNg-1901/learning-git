import React from "react";

const date = new Date();

function Footer() {
  return(
    <div  style={{ width: "100%", height: '4rem',
     color: 'gray', backgroundColor: "#f5ba13" , display: 'flex',
      alignItems: 'center', justifyContent: 'center' 
      }} >
      <p>Copyright - {date.getFullYear()}</p>
    </div>
  );
}

export default Footer;

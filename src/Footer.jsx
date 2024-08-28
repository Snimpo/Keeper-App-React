import React from 'react';
import "./App.css"

function Footer() {
  let date = new Date();

  return (
    //Decided to use the tag footer instead of a <p>
    
     <footer>Copyright {date.getFullYear()}</footer>
    
  );
}

export default Footer;

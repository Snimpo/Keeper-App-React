import React from "react";
function Header({onAddNote }) {
  return (
    //decided to use a header tag instead of a <h1>
    
      <header>
        <h1>Keeper App</h1>
        <button className="add-note-button" onClick={onAddNote}>
        Add Note
      </button>
      </header>
    
  );
}

export default Header;

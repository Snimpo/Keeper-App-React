import React, { useState } from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {

  //useState and hooks to dynamically handle the addition or removal of the cards
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    setNotes([...notes, {}]);
  };

  const removeNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <Header onAddNote={addNote} />

      <div className="Content" style={{ display: 'flex', flexDirection: 'row' }}>
        {notes.map((note, index) => (
          <Note key={index} onRemove={() => removeNote(index)} />
        ))}
      </div>

      
      

      <Footer />
    </div>
  );
}

export default App;
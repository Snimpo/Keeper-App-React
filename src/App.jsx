import React, { useState } from 'react';
import Header from './Header';
import Note from './Note';

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const startAddingNote = () => {
    setIsAdding(true);
  };

  const createNote = () => {
    if (title && body) {
      setNotes([...notes, { title, body }]);
      setTitle('');
      setBody('');
      setIsAdding(false);
    } else {
      alert('Please enter both title and body');
    }
  };

  const cancelAddingNote = () => {
    setIsAdding(false);
    setTitle('');
    setBody('');
  };

  const removeNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Header onAddNote={startAddingNote} />
      
      {isAdding && (
        <div className="note-form-container">
          <div className="note-body">
            <button className="cancel-button" onClick={cancelAddingNote}>Cancel</button>
            <input
              type="text"
              placeholder="Please add a title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Here goes the body..."
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <button className="create-note-button" onClick={createNote}>Create</button>
          </div>
        </div>
      )}
      <div className='container'>
        {notes.map((note, index) => (
          <Note
            key={index}
            title={note.title}
            body={note.body}
            onRemove={() => removeNote(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
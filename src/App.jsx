import React, { useState } from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

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

  const removeNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Header onAddNote={startAddingNote} />
      <div className='container'>
      {isAdding && (
        <div className="note-form-container">
          <div className="note-body">
            <input
              type="text"
              placeholder="Please add a title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Here goes the body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <button className="create-note-button" onClick={createNote}>
              Create
            </button>
          </div>
        </div>
      )}
      <div>
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
    </div>
  );
}

export default App;
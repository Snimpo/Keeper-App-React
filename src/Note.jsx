import React from "react";

function Note({ title, body, onRemove }) {
  return (
    <div className="note-body">
      <h1 className="card-title">{title}</h1>
      <div>
        <p>{body}</p>
        <div className="note-footer">
        <button className="delete-note-button" onClick={onRemove}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
      </div>
    </div>
  );
}

export default Note;
import React from "react";

function Note({ title, body, onRemove }) {
  return (
    <div className="note-body">
      <h1 className="card-title">{title}</h1>
      <p>{body}</p>
      <div>
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
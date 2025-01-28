import React from 'react';
import Draggable from 'react-draggable';
import Note from './Note';

const DraggableComponent = () => {
  return (
    <Draggable>
      <div >
      <Note />
      </div>
    </Draggable>
  );
};

export default DraggableComponent;
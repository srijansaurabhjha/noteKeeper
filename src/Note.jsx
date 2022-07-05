import React from 'react';
import './Note.css';

const Note = (props) => {
 
  const deleteNote=()=>{
     props.onDelete(props.id);
  }

  return (
    <div className='note'>
      <p className='note_title'>{props.title}</p>
      <p className='note_content'>{props.note}</p>
      <p className='note_delete' onClick={deleteNote}>x</p>
    </div>
  );
}

export default Note

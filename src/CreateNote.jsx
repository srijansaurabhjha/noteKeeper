import React, { useState } from 'react'
import './CreateNote.css';

const CreateNote = (props) => {

  const [data, setData] = useState({
    title: "",
    note: "",
  });

  const inputEvent = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  const addNote = () => {
    props.passNote(data);
    setData({
      title: "",
      note: "",
    })
  }

  const update = (e) => {
    e.preventDefault();
  }

  return (
    <div className='createNote'>
      <form onSubmit={update}>
        <input type='text' name='title' value={data.title} onChange={inputEvent} placeholder='Title' autoComplete='off' spellCheck='false' />
        <textarea rows='' column='' name='note' value={data.note} onChange={inputEvent} placeholder='Take a note' spellCheck='false'></textarea>
        <button onClick={addNote} type='submit'>+</button>
      </form>
    </div>
  )
}

export default CreateNote

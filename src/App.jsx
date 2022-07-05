import React, { useState } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import CreateNote from './CreateNote';
import Note from './Note';
import useLocalStorage from './useLocalStorage';

const App=()=>{

// const [addItem,setAddItem]=useState([]);
const [addItem,setAddItem]=useLocalStorage('name',[]);


const addNote=(data)=>{
  setAddItem((oldData)=>{
    return [...oldData,data];
  })
}

const deleteItem=(id)=>{
    setAddItem((prev)=>{
       return prev.filter((currData,index)=>{
         return index!==id;
       })
    })
}

  return (
    <>
      <Header/> 
      <div className='main'>
      <CreateNote
       passNote={addNote}
      />
      <div className='note_align'>
        {addItem.map((value,index)=>{
            return (
              <Note
               key={index}
               id={index}
               title={value.title}
               note={value.note}
               onDelete={deleteItem}
              />
            );
        })}
      </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;


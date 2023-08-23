import React from 'react'
import INotes from '../Model/Notes'
import Notes from './Notes'

type Props = {
    notes:INotes[],
    setNotes:React.Dispatch<React.SetStateAction<INotes[]>>
}
const NotesList = ({notes , setNotes}:Props) => {

    const handleDelete =(id:string)=>{
        setNotes(notes.filter(notes=>notes.id !== id));
    }

  return (
    <>
    <h2 className='mt-3 text-center'>Notes</h2>
    {notes.map((note)=>{
        return <Notes key={note.id} note={note} handleDelete={handleDelete}/> 
    })}
    </>
  )
}

export default NotesList
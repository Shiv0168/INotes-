import React from 'react'
import INotes from '../Model/Notes'
import { Button, Card } from 'react-bootstrap'

type Props = {
  note:INotes,
  handleDelete: (id: string) => any
}

const Notes = ({note , handleDelete}:Props) => {
  return (
    
    <>
       <Card style={{backgroundColor:note.color}}>
      <Card.Body>
        <Card.Title>{note.title}</Card.Title>
        <Card.Text>{note.text}</Card.Text>
        <Card.Subtitle className='text-muted'>{note.date}</Card.Subtitle>
        <Button variant="danger" className='mt-3' onClick={()=>{handleDelete(note.id)}}>Delete</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default Notes
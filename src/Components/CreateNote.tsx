import React, { useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import INotes from '../Model/Notes';
import { Alert } from 'react-bootstrap';

type Props = {
  notes:INotes[],
  setNotes:React.Dispatch<React.SetStateAction<INotes[]>>
}

const CreateNote = ({notes , setNotes}:Props) => {

  const [error, setError] = useState<string>('');
  const titleRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const colorRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit=(e:React.FormEvent<HTMLFormElement>):void=>{
    e.preventDefault();
    if(titleRef.current?.value === "" || textRef.current?.value === "" ){
      return setError("All filed required !!!")
    }
    setError("");
    setNotes([...notes , {
      id:(new Date()).toString() ,
      title:(titleRef.current as HTMLInputElement).value ,
      text:(textRef.current as HTMLTextAreaElement).value,
      color:(colorRef.current as HTMLInputElement).value,
      date:(new Date()).toString()
    }]);
    (titleRef.current as HTMLInputElement).value = "";
    (textRef.current as HTMLTextAreaElement).value = "";
  }

  return (
    <div className='container my-5'>
    <h2>Create Note</h2>
    {error&&<Alert variant='danger'>{error}</Alert>}
    <Form onSubmit={(e)=>{handleSubmit(e)}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Title here.." ref={titleRef}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Text</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter Notes here.." ref={textRef}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label htmlFor='color'>Notes Color</Form.Label>
        <Form.Control type="color" id='color' defaultValue="#dfdfdf"  title="Enter Title here.." ref={colorRef} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    </div>
  )
}

export default CreateNote
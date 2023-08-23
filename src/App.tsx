import { useState } from 'react';
import './App.css';
import INotes from './Model/Notes';
import Header from './Components/Header';
import NotesList from './Components/NotesList';
import { Col, Container, Row } from 'react-bootstrap';
import CreateNote from './Components/CreateNote';

function App() {

  const [notes, setNotes] = useState<INotes[]>([{
    id:(new Date()).toString(),
    title:"Meetings" ,
    text:"Schedule a meeting" ,
    color: "#808080" ,
    date:(new Date()).toString()
  }])

  return (
    <div className="App">
      <Header/>
      <Container className='mt-5'>
        <Row>
          <Col>
      <NotesList notes={notes} setNotes={setNotes}/>
          </Col>
        </Row>
        <Row>
          <Col>
      <CreateNote notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

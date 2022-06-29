import Form from './Form/Form';
import './App.css';
import { useState } from 'react';

function App() {

  const someText = "From parent to child";

  const [name, changeName] = useState('');

  const nameTransfer = (value) => {
    changeName(value);
     
  }

  return (
    <div className="App">
      <Form infoTransfer = {someText} getName = {nameTransfer} ></Form>
      <p>{name}</p>
    </div>
  );
}

export default App;

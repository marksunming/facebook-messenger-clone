import { FormControl, IconButton, Input, InputLabel } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      username: username,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setMessages([...messages, {username: username, message: input}]);
    setInput("");
  }

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  },[]);

  useEffect(() => {
    db.collection("messages").orderBy('timestamp','desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({
        data: doc.data(),
        id: doc.id
      })))
    });
  },[]);


  return (
    <div className="app">
      <img src="https://i.pinimg.com/originals/98/4d/b3/984db3f9cabcf67479806c19882adc7e.png" alt=""/>
      <h1>Facebook messenger clone🚀</h1>
      <h2>Welcome {username}</h2>
      <form className='app__form'>
        <FormControl className='app__formControl'>
          <Input className='app__input' placeholder='Enter a message...' value={input} onChange={(e) => setInput(e.target.value)} />
          
          <IconButton className='app__iconButton' disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>
            <SendIcon />
          </IconButton>
          
        </FormControl> 
      </form>

      <FlipMove>
        { messages.map(message => (
          <Message key={message.id} message={message.data} username={username} />
        ))}
      </FlipMove>

    </div>
  );
}

export default App;
